function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0;i<absolutes.length;i++){
        let num = Number(absolutes[i]);
        if(!signs[i]){
            num = num*(-1);
        }
        answer+=num;
    }
    return answer;
}