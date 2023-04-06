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

ALINA ART, [05.04.2023 18:25]
function capitalize(s, arr) {
    var newstr = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {

                newstr += s[i].toUpperCase();
            }
        }
        newstr += s[i];
    }


    return newstr;
};

ALINA ART, [05.04.2023 18:36]
function capitalize(s, arr) {
    var newstr = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j]) {

            var a = s[i].toUpperCase();
            newstr += a;
            }
        }
        if (s[i] != s[i].toUpperCase()){
            newstr += s[i];
            }
          
    }


    return newstr;
};


function capitalize(s, arr) {
    var newstr = "";

    for (let i = 0; i < s.length; i++) {
        newstr += arr.indexOf(i) >= 0 ? s[i].toUpperCase() : s[i];
    }

    return newstr;
};