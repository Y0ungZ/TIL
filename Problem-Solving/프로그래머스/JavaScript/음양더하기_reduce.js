function solution(absolutes, signs) {
    return absolutes.reduce((acc,cur,curIdx)=>
                            signs[curIdx]?acc+cur:acc+(cur*(-1))
                             ,0);
}