let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessage = new WeakMap();

readMessage.set(messages[0], new Date());
readMessage.set(messages[1], new Date());

if (readMessage.has(messages[0])) {
  console.log(`message 0은 ${readMessage.get(messages[0])}에 읽었습니다.`);
}
