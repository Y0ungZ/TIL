function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let currentWeight = 0;
  let currentCnt = 0;
  const queue = Array(bridge_length).fill(0);
  let idx = 0;
  let i = 0;

  while (true) {
    if (idx === truck_weights.length && currentWeight === 0) {
      //모든 트럭이 지나갔다.
      break;
    }

    const pop = queue.shift();
    if (pop != 0) {
      currentCnt--;
      currentWeight -= pop;
      idx++;
    }
    answer++;

    if (currentWeight + truck_weights[i] <= weight) {
      if (currentCnt + 1 <= bridge_length) {
        //다리 공간 여유있다.
        queue.push(truck_weights[i]);
        currentCnt++;
        currentWeight += truck_weights[i];
        i++;
      } else {
        //더이상 올라가지 못함.
        queue.push(0);
      }
    } else {
      //더이상 올라가지 못함.
      queue.push(0);
    }
  }

  return answer;
}
