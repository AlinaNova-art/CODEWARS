var min = function (list) {

    var min = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
       
    }
   return min;
}


    var max = function (list) {
        var max = list[0];

        for (let i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
            } 
        }
      return max;
    }