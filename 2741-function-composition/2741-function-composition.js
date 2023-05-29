/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        functions.reduceRight(function(acc,e){
            acc=e(x);
            x=acc;
        },x)
        return x;
    }
};


// var compose = function(functions) {
// 	return function(x) {
//         let i=functions.length-1;
//         let res=x;
//         while(i>=0){
//             res=functions[i](res);
//             i--;
//         }
//         return res;
//     }
// };
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */