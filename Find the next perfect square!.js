function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  
  var a = Math.sqrt(sq);
  
 if (a != Math.floor(a)){
      return -1; 
      }
  return  Math.pow(Math.sqrt(sq) + 1, 2);
}