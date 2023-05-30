/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj===null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }
    

    let currpro=Object.getPrototypeOf(obj);
    while(currpro!==null){
        if(currpro === classFunction.prototype){
            return true;
        }
        currpro=Object.getPrototypeOf(currpro);
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */