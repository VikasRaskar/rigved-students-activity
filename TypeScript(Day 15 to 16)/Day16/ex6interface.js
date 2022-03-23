var coord = { x: 10, y: 20 };
var axis3d = { x: 10, y: 20, z: 30 };
function printCoord(pt) {
    document.write("x = ".concat(pt.x, "<br> y =").concat(pt.y, "<br>"));
}
function print3DCoord(pt3) {
    document.write("x = ".concat(pt3.x, "<br> y =").concat(pt3.y, ",<br> z = ").concat(pt3.z));
}
printCoord(coord);
print3DCoord(axis3d);
