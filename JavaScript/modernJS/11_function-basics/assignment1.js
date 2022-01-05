function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

//1.

function checkAge(age) {
  return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}

//2.
function checkAge(age) {
  return age > 18 || confirm('보호자의 동의를...');
}
