function test1(a:number, b?: number, c? : number){
    document.write(`<p>a = ${a}<br> b = ${b}<br> c = ${c}`);

}
test1(20);
test1(20,30);
test1(20,30,40);
let user : {firstName: string, lastName?: string, phone: number};

user ={firstName: "Alex", phone : 123456789}
document.write(`<p>Name: ${user.firstName}<br> phone No: ${user.phone}`);