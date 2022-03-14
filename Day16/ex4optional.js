function test1(a, b, c) {
    document.write("<p>a = ".concat(a, "<br> b = ").concat(b, "<br> c = ").concat(c));
}
test1(20);
test1(20, 30);
test1(20, 30, 40);
var user;
user = { firstName: "Alex", phone: 123456789 };
document.write("<p>Name: ".concat(user.firstName, "<br> phone No: ").concat(user.phone));
