function nerdify(txt){
    var str = txt.replaceAll('a' , '4')
    .replaceAll('e', '3')
    .replaceAll('l', '1')
    .replaceAll('A', '4')
    .replaceAll('E', '3');
    
    return str;
  }