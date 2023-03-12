function changeMe(moneyIn){
  if (moneyIn == '£5'){
    return printN(5*100/20);
  } else if (moneyIn == '£2'){
    return printN(2*100/20);
  } else if (moneyIn == '£1'){
    return printN(1*100/20);
  } else if (moneyIn == '50p'){
    return '20p 20p 10p';
  } else if (moneyIn == '20p'){
    return '10p 10p';
  } else {
    return moneyIn;
  }
}

function printN(n){
  var res= '';
  
  for (var i = 0; i < n; i++){
    res += '20p '
  }
  res = res.substring(0, res.length - 1);
  return res;
}