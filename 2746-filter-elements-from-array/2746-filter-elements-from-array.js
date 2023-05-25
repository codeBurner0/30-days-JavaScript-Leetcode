/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let res=[];
    let i=0;
    while(i<arr.length){
        (fn(arr[i]))?res.push(arr[i]):null;
        i++;
    }
    return arr.filter(fn)
};

// var filter=function(arr,fn){
//     return arr.filter(fn);
// }