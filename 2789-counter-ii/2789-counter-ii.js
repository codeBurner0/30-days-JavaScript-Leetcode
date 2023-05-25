/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val=init;
    function increment(){
        return ++val;
    }
    function reset(){
        val=init;
        return val;
    }
    function decrement(){
        return --val;
    }
    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */