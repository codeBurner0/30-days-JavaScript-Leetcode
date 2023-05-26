/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
// var flat = function (arr, n) {
//     return arr.flat(n)
// };

var flat = function (arr, n) {
    let res=[];
    function helper(arr,depth){
        for(var val of arr){
            if(typeof(val)==='object' && depth<n){
                helper(val,depth+1);
            }else{
                res.push(val);
            }
        }
        return res;
    }


    return helper(arr,0)
};