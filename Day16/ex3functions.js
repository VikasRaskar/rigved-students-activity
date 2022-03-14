function test1(a, b) {
    document.write("test1() <br>a = ".concat(a, "<br> b = ").concat(b, "<br>"));
}
function test2(a, b) {
    document.write("test2() <br>a = ".concat(a, "<br> b = ").concat(b));
    return (a + b);
}
function test3(a, b) {
    if ((a + b) < 0) {
        return "Result is negative number:" + (a + b);
    }
    else {
        return (a + b);
    }
}
test1(30, 40);
var r = test2(20, 30);
document.write("<p> Result from test2 : ".concat(r, "</p>"));
var r2 = test3(r, -500);
document.write("<p> Result from test3 : ".concat(r2, "</p>"));
