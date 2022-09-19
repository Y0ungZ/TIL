function solution(fees, records) {
  const LAST_TIME = 23 * 60 + 59;
  const parkingMap = new Map();
  const feeMap = new Map();

  function convertTime(str) {
    const [hours, minutes] = str.split(":");

    return +hours * 60 + +minutes;
  }

  records.forEach((record) => {
    const [time, number, type] = record.split(" ");
    const minutes = convertTime(time);

    if (parkingMap.has(number)) {
      const calcMinutes = minutes - parkingMap.get(number);
      parkingMap.delete(number);

      feeMap.has(number)
        ? feeMap.set(number, feeMap.get(number) + calcMinutes)
        : feeMap.set(number, calcMinutes);
    } else {
      parkingMap.set(number, minutes);
    }
  });

  for (const [number, minutes] of parkingMap) {
    const calcMinutes = LAST_TIME - minutes;
    feeMap.has(number)
      ? feeMap.set(number, feeMap.get(number) + calcMinutes)
      : feeMap.set(number, calcMinutes);
  }

  for (const [number, minutes] of feeMap) {
    if (minutes <= fees[0]) {
      feeMap.set(number, fees[1]);
      continue;
    }
    feeMap.set(number, fees[1] + Math.ceil((minutes - fees[0]) / fees[2]) * fees[3]);
  }

  return Array.from(feeMap)
    .sort((a, b) => +a[0] - +b[0])
    .map((el) => el[1]);
}
