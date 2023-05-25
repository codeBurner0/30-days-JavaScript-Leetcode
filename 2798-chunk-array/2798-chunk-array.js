/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    // var res=[];
    // let i=0;
    // while(i<arr.length){
    //     res.push(arr.slice(i,i+size));
    //     i+=size;
    // }
    // return res;

    let res=[];
    let ans=[];
    if(arr.length==0){
        return res;
    }
    arr.map((e)=>{
        if(ans.length==size){
            res.push(ans);
            ans=[];
            ans.push(e);
        }else{
            ans.push(e);
        }
    })
    res.push(ans);
    return res;
};