/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    let nums=[];
    return function curried(...args) {
        nums=[...nums,...args];
        let res=[];
        if(fn.length===nums.length){
            res=nums;
            nums=[];
            return fn(...res)
        }else{
            return curried;
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */