function solution(record) {
  const answer = [];
  const enterMsg = (nickname) => `${nickname}님이 들어왔습니다.`;
  const leaveMsg = (nickname) => `${nickname}님이 나갔습니다.`;

  const userMap = new Map();

  for (let i = 0; i < record.length; i++) {
    const [type, id, nickname] = record[i].split(" ");
    type !== "Leave" && userMap.set(id, nickname);
  }

  for (let i = 0; i < record.length; i++) {
    const [type, id, nickname] = record[i].split(" ");
    switch (type) {
      case "Enter":
        answer.push(enterMsg(userMap.get(id)));
        break;
      case "Leave":
        answer.push(leaveMsg(userMap.get(id)));
        break;
      default:
        break;
    }
  }

  return answer;
}
