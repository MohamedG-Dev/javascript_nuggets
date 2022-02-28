//Three methods to convert objects into array
//1. Object.keys() -  converts property names into array
//2. Object.values() - converts property values into array
//3. Object.entries() - converts both

const person = {
	name: 'Pearson',
	age: 25,
	status: 'Student'
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const keyAndValues = Object.entries(person);
console.log(keyAndValues);

//map method
// iterating over keyAndValues Array using map method
const result = keyAndValues.map((item)=>{
	// console.log(item);
	const [keys,values] = item;
	//console.log(keys, values);
	return keys;
})

console.log(result);


// using for off loop
for(const [keys, values] of keyAndValues){
	// for(const item of keyAndValues){
	//const [keys, values] = item;
	console.log(keys, values);
}