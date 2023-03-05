 function aliasGen(p1, p2){
    // Code Here
  var cap1 = p1[0].toUpperCase();
  var cap2 = p2[0].toUpperCase();
  if (!firstName.hasOwnProperty(cap1) ||
     !surname .hasOwnProperty(cap2)){
    return "Your name must start with a letter from A - Z."
  }
  return firstName[cap1] + " " + surname[cap2];
}