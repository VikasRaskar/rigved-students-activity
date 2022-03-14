interface A{
    name : string;
}
interface B{
    phone : number;
}

let obj1 : A & B;
obj1 ={ name : "Alex", phone :123456789};
document.write(`Name: ${obj1.name}<br> Age: ${obj1.phone}`);