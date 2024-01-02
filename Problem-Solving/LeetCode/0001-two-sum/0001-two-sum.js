/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const numsHasIdx = nums.map((el, idx)=> [el,idx]);
    numsHasIdx.sort((a,b)=>a[0]-b[0]);

    let left =0, right=nums.length-1;

    while(left < right){
        const result = numsHasIdx[left][0] + numsHasIdx[right][0];

        if(result === target){
            return [numsHasIdx[left][1], numsHasIdx[right][1]];
        }

        if(result > target){
            right--;
        }

        if(result < target){
            left++;
        }
    }
};