let obj = {
	name: 'abc',
	age: 25,
}

obj = {
	...obj,
	city: 'chennai',
	experience: 25
}

//console.log(obj);

const result = obj.experience ? true : false;
console.log(result)