function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  const CACHE_MISS = 5;
  const CACHE_HIT = 1;

  if (cacheSize === 0) {
    return cities.length * CACHE_MISS;
  }

  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();
    if (cache.includes(lowerCity)) {
      //cache hit
      answer += CACHE_HIT;
      cache.splice(cache.indexOf(lowerCity), 1);
      cache.push(lowerCity);
    } else {
      //cache miss
      answer += CACHE_MISS;
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(lowerCity);
    }
  });

  return answer;
}
