class Person {
    public name : string;
    protected age : number;
    constructor(name:string, age:number){
        this.name =name;
        this.age =age;
    }
}
class Employee extends Person{
    constructor(name, age){
        super(name, age);
    }
    printData(): void{
        document.write(`<p>Name: ${this.name}<br> Age: ${this.age} </p>`);
    }
}
let e = new Employee("Alex", 35);
e.printData();
e.name = "Alexandar";
e.printData();