const truncate = (string, length) => {
  if (string.length > length) {
    return string.slice(0, length - 1) + '...';
  }
  return string;
};

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate('Hi everyone!', 20));
