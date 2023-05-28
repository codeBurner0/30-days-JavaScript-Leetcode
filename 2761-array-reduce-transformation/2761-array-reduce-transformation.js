/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc=init;
    for(let val of nums){
        acc=fn(acc,val);
    }
    return acc;
    
};