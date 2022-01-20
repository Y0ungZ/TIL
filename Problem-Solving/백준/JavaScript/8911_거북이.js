'use strict';

(function () {
  const fs = require('fs');

  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const T = +input[0].trim();

  let result = '';

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < T; i++) {
    const command = input[1 + i].trim();

    let lobotX = 0,
      lobotY = 0;

    let maxX = 0,
      maxY = 0;
    let minX = 0,
      minY = 0;

    let currentIndex = 0;

    for (let j = 0; j < command.length; j++) {
      const currentOrder = command[j];

      switch (currentOrder) {
        case 'F':
          lobotX += dx[currentIndex];
          lobotY += dy[currentIndex];

          maxX = Math.max(lobotX, maxX);
          minX = Math.min(lobotX, minX);
          maxY = Math.max(lobotY, maxY);
          minY = Math.min(lobotY, minY);

          break;
        case 'L':
          currentIndex = parseInt((currentIndex + 3) % 4);
          break;
        case 'R':
          currentIndex = parseInt((currentIndex + 1) % 4);
          break;
        case 'B':
          lobotX -= dx[currentIndex];
          lobotY -= dy[currentIndex];

          maxX = Math.max(lobotX, maxX);
          minX = Math.min(lobotX, minX);
          maxY = Math.max(lobotY, maxY);
          minY = Math.min(lobotY, minY);

          break;
      }
    }

    result += `${Math.abs(maxX - minX) * Math.abs(maxY - minY)}\n`;
  }

  console.log(result);
})();
