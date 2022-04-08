function solution(fees, records) {
  //fee : 기본, 단위
  //records : 주차장 상황기록
  let answer = [];
  const resultMap = new Map(); // 결과 Map
  const carMap = new Map(); // 기록 Map
  const LAST_TIME = 23 * 60 * 60 + 59 * 60; //23:59 -> convert seconds

  for (let i = 0; i < records.length; i++) {
    const [time, car, type] = records[i].split(' ');
    let [hour, minute] = time.split(':');
    let convertSeconds = +hour * 60 * 60 + +minute * 60; //convert seconds

    switch (type) {
      case 'IN':
        carMap.set(car, convertSeconds);
        break;
      case 'OUT':
        let calcSeconds = convertSeconds - carMap.get(car);

        if (resultMap.has(car)) {
          //이미 기록된 적이 있으면 누적
          let sumSeconds = resultMap.get(car);
          resultMap.set(car, sumSeconds + calcSeconds);
        } else {
          resultMap.set(car, calcSeconds);
        }
        //처리가 완료된 것들은 다시 계산을 위해 기록Map(carMap)에서 삭제해준다.
        carMap.delete(car);
        break;
      default:
        break;
    }
  }

  //기록 Map에 남아있는 것들은 23:59에 출차된다.
  for (let car of carMap) {
    let [number, time] = car;
    if (resultMap.has(number)) {
      let calcSeconds = LAST_TIME - time;
      let sumSeconds = resultMap.get(number);
      resultMap.set(number, sumSeconds + calcSeconds);
    } else {
      resultMap.set(number, LAST_TIME - time);
    }
    carMap.delete(number);
  }

  //차량번호가 작은 자동차부터 청구해야한다. MaptoArray and sorting.
  const resultArray = [...resultMap].sort((a, b) => +a[0] - +b[0]);

  for (let result of resultArray) {
    const [number, time] = result;
    const minute = Math.floor(time / 60);

    if (minute <= fees[0]) {
      answer.push(fees[1]);
    } else {
      let calcTime = minute - fees[0];
      //단위시간으로 나누어 떨어지지 않으면, 올림한다.
      let overTime = Math.ceil(calcTime / fees[2]);

      answer.push(fees[1] + overTime * fees[3]);
    }
  }

  return answer;
}
