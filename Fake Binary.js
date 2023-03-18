function fakeBin(x){
  var newstr = "";
for (let i = 0; i < x.length; i++){
  if (Number(x[i]) < 5){
    newstr = newstr + '0';
  }
  else newstr = newstr + '1';
}
  return newstr;
}