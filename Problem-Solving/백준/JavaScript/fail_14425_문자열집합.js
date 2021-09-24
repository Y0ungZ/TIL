'use strict';

//17% 시간초과...
//채점현황을 보니 뭔가 내 코드가 엄청 길다...!!
//map으로 풀어서 해결했지만 트라이 익숙해지고 다시 도전해보기.

const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].trim().split(' ').map((num) => Number(num));
input = input.splice(1);

class Node{
    constructor(value = '') {
        this.value = value; //누적값
        this.end = false; //해당 노드에서 끝나는 문자열이 있는지
        this.child = {}; //자식노드들
    }
}

class Trie{
    constructor() {
        this.root = new Node(); //처음 생성시 
    }

    insert(string) {
        let currentNode = this.root; //루트로 시작

        for (let i = 0; i < string.length; i++){
            const insertChar = string[i]; //해당 문자를 넣는 시도를 한다.

            if (currentNode.child[insertChar] === undefined) {
                currentNode.child[insertChar] = new Node(currentNode.value + insertChar);
            }

            currentNode = currentNode.child[insertChar]; //자식 노드로 이동.
        }
        currentNode.end = true; //해당 문자로 끝나는 단어가 있다.
    }

    search(string) {
        let currentNode = this.root; //루트로 시작

        for (let i = 0; i < string.length; i++){
            const searchChar = string[i]; //해당 문자를 찾는 시도를 한다.

            if (currentNode.child[searchChar]) {
                //자식 노드가 존재
                currentNode = currentNode.child[searchChar]; //노드 이동
            } else {
                return false;
            }
        }

        //마지막까지 탐색 성공+그 단어로 끝난다면, 해당 문자열을 찾았다.
        if (currentNode.end) {
            return true;
        } else {
            return false;
        }
    }
}

const myTrie = new Trie();

for (let i = 0; i < N; i++){
    myTrie.insert(input[i].trim());
}

let result = 0;

for (let i = 0; i < M; i++){
    if (myTrie.search(input[N+i].trim())) {
        result++;
    } 
}

console.log(result);
