/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

 //var filter=function(arr,fn){
//     return arr.filter(fn);
// }
var filter = function(arr, fn) {
    let res=[];
    let i=0;
    while(i<arr.length){
        if(fn(arr[i],i)){
            res.push(arr[i]);
        }
        i++;
    }
    return res;
};