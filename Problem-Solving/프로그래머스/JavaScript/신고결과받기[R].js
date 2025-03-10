function solution(id_list, report, k) {
  const logRecord = {};
  const banUserMap = new Map();

  const isAlreadyReportedUser = (user, reportedUser) => {
    const record = logRecord[user];
    if (record.includes(reportedUser)) {
      return true;
    }
    return false;
  };

  report.forEach(log => {
    const [user, reportedUser] = log.split(' ');
    if (!logRecord[user]) {
      logRecord[user] = [];
    }
    if (isAlreadyReportedUser(user, reportedUser)) return;

    const banCount = banUserMap.get(reportedUser) || 0;
    banUserMap.set(reportedUser, banCount + 1);

    logRecord[user].push(reportedUser);
  });

  return id_list.map(id => {
    const reportedRecord = logRecord[id];
    if (!reportedRecord) {
      return 0;
    }
    return reportedRecord.filter(user => banUserMap.get(user) >= k).length;
  });
}
