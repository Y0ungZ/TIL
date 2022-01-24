function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  const report_map = new Map();
  const user_idx = new Map();

  id_list.forEach((value, idx) => {
    report_map.set(value, new Set());
    user_idx.set(value, idx);
  });

  report.forEach((value, idx) => {
    const fromTo = value.split(' ');
    const from = fromTo[0]; //신고한 사람
    const to = fromTo[1]; //신고당한 사람

    if (report_map.has(to)) {
      const current = report_map.get(to);

      if (!current.has(from)) {
        current.add(from);
        report_map.set(to, current);
      }
    }
  });

  for (const [key, value] of report_map) {
    if (value.size >= k) {
      for (const user of value) {
        answer[user_idx.get(user)]++;
      }
    }
  }

  return answer;
}
