/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function(fn, t) {
// 	return async function(...args) {
//         return new Promise((res,rej)=>{
//             const inter=setTimeout(()=>rej("Time Limit Exceeded"),t);
//             const data=fn(...args)
//             data.then((resp)=>{
//                 res(resp)
//             }).catch((err)=>{
//                 rej(err)
//             }).finally(()=>{
//                 clearTimeout(inter)
//             })
            
//         })
//     }
// };

var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise(async (res,rej)=>{
            const interval=setTimeout(()=>rej("Time Limit Exceeded"),t);
            try{
                let data = await fn(...args)
                res(data);

            }catch(err){
                rej(err)
            }
            
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */