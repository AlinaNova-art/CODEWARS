// return the interval between the two provided notes as a positive integer.
function getInterval(note1, note2) {
    var map = {
      C: 0,
      D: 1,
      E: 2,
      F: 3,
      G: 4,
      A: 5,
      B: 6,
    }
    
    var n1 = Number(note1[1]) * 7 + map[note1[0]];
    var n2 = Number(note2[1]) * 7 + map[note2[0]];
    
    return Math.abs(n1 - n2) + 1;
    
  }
  
  