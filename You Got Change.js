function giveChange(amount) {
    var arr = [100, 50, 20, 10, 5, 1];
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(Math.floor(amount / arr[i]));
        amount = amount % arr[i];
    }
    result.reverse();

    /*var a = (amount % 100); 
    var a1 = (amount - (amount % 100)) / 100;//количество сотен
    var b = a % 50;
    var b1 = (a - (a % 50)) / 50;
    var c = b % 20;
    var c1 = (b - (b % 20)) / 20;
    var d = c % 10;
    var d1 = (c - (c % 10)) /10;
    var e = d % 5;
    var e1 = (d - (d % 5)) /5;
  
    
   var result = [e, e1, d1, c1, b1, a1];
    
    */
    return result;
}