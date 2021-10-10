function solution(record) {
  var answer = [];
  const map = new Map();

  for (let i = 0; i < record.length; i++) {
    const [com, id, nic] = record[i].split(" ");
    if (com === "Leave") {
      continue;
    }
    map.set(id, nic);
  }

  for (let i = 0; i < record.length; i++) {
    const [com, id, nic] = record[i].split(" ");
    if (com === "Enter") {
      answer.push(`${map.get(id)}님이 들어왔습니다.`);
    } else if (com === "Leave") {
      answer.push(`${map.get(id)}님이 나갔습니다.`);
    }
  }

  return answer;
}
