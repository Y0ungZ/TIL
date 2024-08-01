function solution(players, callings) {
  const idxList = {};
  const playerList = {};

  players.forEach((player, idx) => {
    idxList[idx] = player;
    playerList[player] = idx;
  });

  callings.forEach(player => {
    const idx = playerList[player];
    const beforePlayer = idxList[idx - 1];
    [idxList[idx - 1], idxList[idx]] = [player, beforePlayer];
    [playerList[player], playerList[beforePlayer]] = [idx - 1, idx];
  });

  return Object.values(idxList);
}
