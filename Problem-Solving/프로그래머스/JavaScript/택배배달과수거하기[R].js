const solution = (cap, n, deliveries, pickups) => {
  let answer = 0;
  let remainDeliveryCap = 0;
  let remainPickupCap = 0;

  for (let distance = n - 1; distance >= 0; distance--) {
    // 남은 여유 배달량으로 처리
    remainDeliveryCap -= deliveries[distance];

    // 남은 여유 수거량으로 처리
    remainPickupCap -= pickups[distance];

    // 음수라면 배달/수거 중 더 많이 가야하는 곳 기록
    const count = Math.max(
      Math.ceil(-remainDeliveryCap / cap),
      Math.ceil(-remainPickupCap / cap),
    );

    // 들려야하는 count만큼 들리고 남은 여유량 기록
    remainDeliveryCap += cap * count;
    remainPickupCap += cap * count;

    // 거리 * 횟수 기록
    answer += (distance + 1) * 2 * count;
  }

  return answer;
};
