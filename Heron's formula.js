function heron(a, b, c) {
    var s = (a+b+c)/2;
    var result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return result;
  }