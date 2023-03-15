function cubeVolume(h, r) {
  var v;
  if (h > r * Math.sqrt(2)) {
    v = Math.pow(r, 3) * 2 * Math.sqrt(2);
  }
  else {
    v = Math.pow(h, 3);
  }
  return v;

}


function realNumbers(n) {
  var arr = [0];


  if (n % 2 == 0 && n % 3 == 0 && n % 5 == 0) {
    for (let i = 0; i <= n; i++) {
      arr.push[i];
    }
  }

var result = arr.lenght;


return result;

}

