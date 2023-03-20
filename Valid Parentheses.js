
function validParentheses(parenStr) {
    var count = 0;
    for (let i = 0; i < parenStr.length; i++) {
        if (parenStr[i] == "(") {
            count++;
        }
        if (parenStr[i] == ")") {
            count--;
        }
        if (count < 0)
            return false;
    }

    if (count === 0) {
        return true;
    }
    return false;
}