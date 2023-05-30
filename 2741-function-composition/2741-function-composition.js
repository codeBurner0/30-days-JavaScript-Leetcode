/**
 * @param {Function[]} functions
 * @return {Function}
 */
// var compose = function(functions) {
// 	return function(x) {
//         let res=x;
//         let i=functions.length-1;
//         while(i>=0){
//             res=functions[i](res);
//             i--;
//         }
//         return res;
//     }
// };

var compose = function(functions) {
	return function(x) {
        function fun(acc,fn){return fn(acc)}
        return functions.reduceRight(fun,x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
 