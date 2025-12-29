/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = []
  while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){
      if(!m.length) continue
      res.push(m.pop())
      m.reverse()   
    }
    matrix.reverse()
  }
  return res
};