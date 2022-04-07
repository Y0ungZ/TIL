class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let fetchUrl = await fetch(url);

  if (fetchUrl.status == 200) {
    return fetchUrl.json();
  } else {
    throw new HttpError(fetchUrl);
  }
}

// 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('GitHub username을 입력하세요.', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('일치하는 사용자가 없습니다. 다시 입력해 주세요.');
        return demoGithubUser();
      } else {
        throw err;
      }
    }
  }

  alert(`이름: ${user.name}.`);
  return user;
}

demoGithubUser();
