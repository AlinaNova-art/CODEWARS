function capitalize(s, arr) {
    var newstr = "";

    for (let i = 0; i < s.length; i++) {
        var isLetterAdded = false;
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                isLetterAdded =  true;

                newstr += s[i].toUpperCase();
            }
        }
        if (!isLetterAdded){
           newstr += s[i];
       }
    }


    return newstr;
};


function capitalize(s, arr) {
    var newstr = "";

    for (let i = 0; i < s.length; i++) {
        var a = false;
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                a =  true;

                newstr += s[i].toUpperCase();
            }
        }
        if (!a){
           newstr += s[i];
       }
    }


    return newstr;
};