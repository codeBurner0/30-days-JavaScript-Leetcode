/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let call=false;
    return function(...args){
        if(call){
            return undefined;
        }
        call=true;
            const a=fn(...args)
            return a;  
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */