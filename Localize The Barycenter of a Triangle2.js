function barTriang(p1, p2, p3) {
    var x = (p1[0] + p2[0] + p3[0])/3;
    var y = (p1[1] + p2[1] + p3[1])/3;
    //console.log(x.toFixed(3)); 
    var c1 = +x.toFixed(4);
    var c2 = +y.toFixed(4); 
    return ([c1,c2]);
    
    
  }