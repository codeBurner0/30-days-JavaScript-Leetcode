/**
 * @param {Function} fn
 * @return {Function}
 */
// var once = function(fn) {
//     let call=false;
//     return function(...args){
//         if(call){
//             return undefined;
//         }
//         call=true;
//             const a=fn(...args)
//             return a;  
//     }
// };

// var once = function(fn) {
//     let call=false;
//     return function(...args){
//         if(call){
//             return undefined;
//         }
//         call=true;
//             const a=fn.apply(this,args)
//             return a;  
//     }
// };

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// var once = function(fn) {
//     let call=false;
//     return function(...args){
//          if(call){
//              return undefined;
//          }else{
//              call=true;
//              return fn(...args);
//          }
//     }
// };
var once = function(fn) {
    let call=false;
    return function(...args){
         if(!call){
             call=true;
             return fn(...args);
         }
    }
};






















