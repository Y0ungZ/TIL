/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let nums1Idx = m-1;
    let nums2Idx = n-1;
    let currIdx = m+n-1;
    
    while(nums2Idx >=0){
        if(nums1Idx >= 0 && nums1[nums1Idx] > nums2[nums2Idx]){
           nums1[currIdx--] = nums1[nums1Idx--];
           }else{
               nums1[currIdx--] = nums2[nums2Idx--];
           }
    }
    
};