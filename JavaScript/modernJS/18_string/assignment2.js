const checkSpam = (string) => {
  string = string.toLowerCase();
  if (string.includes('viagra') || string.includes('xxx')) {
    return true;
  }
  return false;
};

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam('innocent rabbit') == false);
