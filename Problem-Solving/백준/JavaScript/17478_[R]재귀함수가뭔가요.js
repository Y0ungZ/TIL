// main
(() => {
    const fs = require('fs');
    const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
    const N = +fs.readFileSync(filePath).toString().trim();
    
    const ANSWER1 = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.';
    const ANSWER2 = '"재귀함수가 뭔가요?"';
    const ANSWER3 = '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.';
    const ANSWER4 = '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.';
    const ANSWER5 = '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."';
    const ANSWER6 = '"재귀함수는 자기 자신을 호출하는 함수라네"';
    const ANSWER7 = '라고 답변하였지.';
    const SPLIT = '____';

    const getChatbotResponse = (count) => {
        const response = [];

        response.push(ANSWER1);

        const getSplitAnswer = (depth, answer) => {
            return `${SPLIT.repeat(depth)}${answer}`;
        };

        const run = (depth) => {
            if (depth === count) {
                response.push(getSplitAnswer(depth, ANSWER2));
                response.push(getSplitAnswer(depth, ANSWER6));
                response.push(getSplitAnswer(depth, ANSWER7));
                return;
            }
            response.push(getSplitAnswer(depth, ANSWER2));
            response.push(getSplitAnswer(depth, ANSWER3));
            response.push(getSplitAnswer(depth, ANSWER4));
            response.push(getSplitAnswer(depth, ANSWER5));
            run(depth + 1);
            response.push(getSplitAnswer(depth, ANSWER7));
        }

        run(0);
        return response;
    }
    
    console.log(getChatbotResponse(N).join('\n'));
})();