class Student {
    constructor (public name : string, public age : number){}
    display():void{
        document.write(`<p>Name: ${this.name}<br> Age: ${this.age}`);
    }
}
let s1 = new Student("Bruce", 30);
s1.display();