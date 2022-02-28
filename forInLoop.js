// "for in" loop - iterate over object properties
// not advised to use it on arrays, expecially if the order is important
// on arrays use "for of" loop instead

const person = {
name: 'john',
age:  25,
status: 'student'
}

console.log('For in loop example');
for(const propertyName in person){
console.log(`${propertyName} : ${person[propertyName]}`);
}