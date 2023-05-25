/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc=init;
    let i=0;
    while(i<nums.length){
        acc=fn(acc,nums[i]);
        i++;
    }
    return acc;
};