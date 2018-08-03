function Person(value) {
}
Person.prototype.value = undefined;
Person.prototype.printValue = ()=>{
    console.log(this.prototype.value);
}
console.log(Person.prototype)

function Node(value) {
    this.next = null;
    this.val = value; 
}
console.log(Node.prototype.constructor.prototype.constructor)
