function arithmeticSequenceElements(a, d, n) {
  var result = [a];

  for (let i = 0; i < n - 1; i++) {
    a += d;
    result.push(a);
  }
  return result.join(", ");
}

