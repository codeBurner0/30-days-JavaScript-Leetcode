/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let i=0;
    while(i<arr.length){
        arr[i]=fn(arr[i],i);
        i++;
    }
    return arr;
};