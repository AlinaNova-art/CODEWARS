function barTriang(p1, p2, p3) {
    var x1 = p1[0];
    var y1 = p1[1];
    var x2 = p2[0];
    var y2 = p2[1];
    var x3 = p3[0];
    var y3 = p3[1];
    var x = (x1 + x2 + x3)/3;
    var y = (y1 + y2 + y3)/3;
    //console.log(x.toFixed(3)); 
    var c1 = +x.toFixed(4);
    var c2 = +y.toFixed(4); 
    return ([c1,c2]);
    
    //your code here
  }