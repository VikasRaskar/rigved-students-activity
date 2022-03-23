interface Point{
    x : number;
    y : number;
}
interface Point3D extends Point{
    z: number;
}
let coord: Point ={ x:10, y: 20};
let axis3d : Point3D ={x:10, y: 20, z: 30};
 function printCoord(pt : Point){
     document.write(`x = ${pt.x}<br> y =${pt.y}<br>`);
    }
    function print3DCoord(pt3: Point3D){
     document.write(`x = ${pt3.x}<br> y =${pt3.y},<br> z = ${pt3.z}`);

 }
 printCoord(coord)
 print3DCoord(axis3d);