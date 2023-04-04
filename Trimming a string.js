function trim(str, size) {
    if (str.length <= size) {
        return str;
    }

    var a = size <= 3 ? size : size - 3;
    return str.substring(0, a) + "..."
}