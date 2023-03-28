const tryCutOne = function (word1, word2) {
    for (let i = 0; i < word1.length; i++) {
      var a = word1.substring(0, i) + word1.substring(i + 1, word1.length);
      if (a == word2) {
        return true;
      }
    }
    return false;
  }
  
  var tryChangeOne = function (word1, word2) {
    var count = 0;
    
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] != word2[i]) {
        count += 1;
      }
    }
  
    return count == 1;
  }
  
  var mispelled = function (word1, word2) {
  
    if (word1 == word2) {
      return true;
    }
  
    if (word1.length == word2.length + 1) {
      return tryCutOne(word1, word2);
    }
  
    if (word2.length == word1.length + 1) {
      return tryCutOne(word2, word1);
    }
  
    if (word1.length == word2.length) {
      return tryChangeOne(word1, word2);
    }
    return false;
  }
  
  