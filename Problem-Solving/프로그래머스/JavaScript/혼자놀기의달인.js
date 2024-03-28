function solution(cards) {
    const visited = Array(cards.length).fill(false);
    const results = [];
    
    const makeGroups = (idx, group) => {
        if(visited[idx]){
            results.push(group.length);
            return;
        }
        
        visited[idx] = true;
        group.push(idx);
        makeGroups(cards[idx]-1, group);
    }
    
    cards.forEach((_, idx)=>{
       if(!visited[idx]){
           makeGroups(idx, []);
       }
    });
    
    results.sort((a,b)=>b-a);
    return results[0] * (results[1] || 0);
}