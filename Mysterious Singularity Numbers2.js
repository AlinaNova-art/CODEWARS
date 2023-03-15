function realNumbers(n) {
    return Math.floor(n / 30) * 8 + [1, 7, 11, 13, 17, 19, 23 ,29].filter(x => x <= n % 30).length;
  
  }
  