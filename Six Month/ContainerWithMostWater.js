/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0;
    let j=height.length-1
    let  volume=0  //initializing value to 0 
    while(j>i){
        let hei=Math.min(height[i],height[j]) //calulating min height among to get the volume 
        if(volume<(hei*(j-i))){ //here (j-i)=width so height*width is the formula here to get the volume
            volume=hei*(j-i)
        }
        if(height[i]>height[j]){ //incrementing the pointer of smaller value 
            j--
        }else{
            i++
        }
     
    }
    return volume
};