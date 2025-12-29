
var MedianFinder = function() {
    this.item = []
};

MedianFinder.prototype.addNum = function(num) {
        const  addItem = number =>{
        let start = 0;
        let end = this.item.length;
        while (start < end){
            let mid = Math.floor((start+end)/2);
            if (number > this.item[mid]) start = mid+1;
            else end = mid;
        }
        this.item.splice(start,0,number);
         }
        if (this.item.length === 0) this.item.push(num);
        else addItem(num);
 
};

MedianFinder.prototype.findMedian = function() {
    let len = this.item.length
     
    if(len%2 === 0) {
        const index1 = len/2 - 1
        const index2 = index1 + 1
        return (this.item[index1] + this.item[index2])/2
    }
    else{
       const index = (len +1)/2 - 1
        return this.item[index]
    }
};