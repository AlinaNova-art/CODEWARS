function convertMyDollars(usd, currency) {
    var rate = CONVERSION_RATES[currency];
    var a = currency[0].toLowerCase();
    if (a != "a" && 
        a != "e" && 
        a != "i" && 
        a != "o" && 
        a != "u"){
      rate = parseInt(rate, 2);
    }
    return "You now have " + rate*usd + " of "+ currency+ "."
    
  }