function mango(quantity, price){
  var a = quantity/3;
  var b = quantity - Math.floor(quantity / 3);
  var total = b * price;
  return total;
}