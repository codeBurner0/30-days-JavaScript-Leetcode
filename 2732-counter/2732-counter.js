/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12




 class Counter{
     constructor(n){
         this.n=n;
     }
     increment(){
         return ++this.n;
     }
 }
var add=new Counter(10);
console.log(add.increment(10));
 */

