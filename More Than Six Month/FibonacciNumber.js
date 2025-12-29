var fib = function(n) {

    let prev1 = 1;
    let prev2 = 0;

    if(n < 2 ) return n

    for(let i = 2; i <= n; i++){
        let next = prev1 + prev2;
        prev2 = prev1;
        prev1 = next
    }

    return prev1 

};