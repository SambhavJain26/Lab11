function division(a, b) {
    if (b == 0) {
        return "Division by zero is not allowed";
    }
    return a / b;
}

module.exports = division;