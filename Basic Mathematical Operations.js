function basicOp(operation, value1, value2) {
  var result;
  if (operation == '+') {
    result = value1 + value2;
  }
  else if (operation == '-') {
    result = value1 - value2;
  }
  else if (operation == '*') {
    result = value1 * value2;
  }
  else if (operation == '/') {
    result = value1 / value2;
  }
  return result;
}


