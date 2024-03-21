function solution(word, pages) {
  const scores = [];
  const REGEX_PAGE_URL = /<meta property="og:url" content="(\S+)"\/>/;
  const REGEX_BODY = /<body>([\s\S]+)<\/body>/;
  const REGEX_EXTERNAL_LINK = /<a\s+href="([^"]+)">/g;
  const REGEX_LINK_TEXT = /<a\s+[^>]+>.*?<\/a>/g;
  const REGEX_WORD = new RegExp(`\\b${word.toLowerCase()}\\b`, 'gm');
  const REGEX_NOT_ALPHA = /[^a-z]/g;

  const pageSet = new Set();
  const basicScoreMap = new Map();
  const externalLinkCountMap = new Map();
  const pageLinkObj = {};

  for (let i = 0; i < pages.length; i++) {
    const url = pages[i].match(REGEX_PAGE_URL)[1];
    pageSet.add(url);
    basicScoreMap.set(url, 0);
    pageLinkObj[url] = [];
  }

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const url = page.match(REGEX_PAGE_URL)[1];
    const body = page.match(REGEX_BODY)[1];
    const externalLinks = [];
    let match;

    while ((match = REGEX_EXTERNAL_LINK.exec(body)) !== null) {
      const link = match[1];
      externalLinks.push(link);

      if (pageLinkObj[link]) {
        pageLinkObj[link].push(url);
      }
    }

    const content = body
      .replace(REGEX_LINK_TEXT, '')
      .toLowerCase()
      .replace(REGEX_NOT_ALPHA, ' ');

    if (content.match(REGEX_WORD)) {
      basicScoreMap.set(url, content.match(REGEX_WORD).length);
    }

    externalLinkCountMap.set(url, externalLinks.length);
  }

  for (const page in pageLinkObj) {
    const basicScore = basicScoreMap.get(page);
    const links = pageLinkObj[page];
    let linkScore = 0;

    links.forEach(link => {
      linkScore += basicScoreMap.get(link) / externalLinkCountMap.get(link);
    });

    scores.push(basicScore + linkScore);
  }

  return scores.indexOf(Math.max(...scores));
}
