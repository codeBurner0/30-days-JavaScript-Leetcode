/**
 * @param {number} millis
 */
// async function sleep(millis) {
//     function callback(res,rej){
//         return setTimeout(res,millis)
//     }
//     return new Promise(callback)
// }
async function sleep(millis) {
    return await new Promise((res,rej)=>{
        setTimeout(res,millis)
    })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */