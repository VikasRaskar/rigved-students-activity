class calci {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    addition() {
        return (this.x + this.y);
    }
    findMin(...i) {
        let temp = i[0];
        i.forEach((item) => {
            if (item < temp) {
                temp = item;
            }
        });
        return temp;
    }

}
let c1 = new calci(20,30);
let r = c1.addition();
console.log(`result = ${r}`);
let min = c1.findMin(20,-1,-2,-5,70);
console.log(`Min value is: ${min}`);