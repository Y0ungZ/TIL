const formatDate = (date) => {
  let diff = new Date() - date;

  if (diff < 1000) {
    return '현재';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + '초 전';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + '분 전';
  }

  let d = date;

  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((el) => el.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
};

console.log(formatDate(new Date(new Date() - 1))); // "현재"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30초 전"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5분 전"

// 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
