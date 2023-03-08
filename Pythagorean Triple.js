function isPythagoreanTriple(integers) {
   var [a, b, c] = integers.sort((a,b) => a - b)
   return Math.pow(a , 2) + Math.pow(b , 2) == Math.pow(c , 2)
  }