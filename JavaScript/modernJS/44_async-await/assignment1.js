async function loadJson(url) {
  let fetchUrl = await fetch(url);

  if (fetchUrl.status == 200) {
    return fetchUrl.json();
  } else {
    throw new Error(fetchUrl.status);
  }
}

loadJson('no-such-user.json').catch(alert);
