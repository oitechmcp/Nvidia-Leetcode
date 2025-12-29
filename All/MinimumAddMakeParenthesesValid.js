/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let c = 0;
    let b = 0;
    for(o of s){
        o=='(' ? c++ : c > 0 ? c-- : b++;
    }
    return c+b
};