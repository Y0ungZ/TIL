const copySorted = (array) => {
  let temp = array.slice();

  return temp.sort();
};

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
