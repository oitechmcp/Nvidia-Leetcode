/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    let sign=1,out=0;
    const MAX = 2147483647, MIN = -2147483648;
    //let reg=/[a-zA-Z]/; // i had idea about usage of regex but then i found out there is another proper solution with some search..
    let i=0;
    while(i<s.length&&s[i]==" "){i++;}
    if(s[i]=="-"||s[i]=="+"){
        sign = s[i]=="-"?-1:1;
        i++;
    }
    while(i<s.length&&s[i] >= '0' && s[i] <= '9'){
        out=out*10+(s[i].charCodeAt(0)-'0'.charCodeAt(0));
        i++;

        if(sign*out>MAX) return MAX;
        if(sign*out<MIN) return MIN;
    }

    return sign*out;


    
};