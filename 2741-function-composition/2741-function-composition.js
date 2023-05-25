/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(arr) {
	return function(x) {
        
        let i=arr.length-1;;
        while(i>=0){
           x=arr[i](x);
           i--;
        }
        return x;
    }
};


const a=()=>{}
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */