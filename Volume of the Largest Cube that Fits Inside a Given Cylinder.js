function cubeVolume(h, r) {
    var v;
    if (h > r * Math.sqrt(2)){
      v = Math.pow(r, 3) * 2 * Math.sqrt(2);  
    }
  else {
    v = Math.pow(h, 3);
    }
  return v;

}