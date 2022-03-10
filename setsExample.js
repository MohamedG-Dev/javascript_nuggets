//Set Object - stores a collection of unique values of any type

// new Set() => creation of set
// add(value) => used to add values into the set
// delete(value) => used to delete values from the set
// clear() => removes all the items from the set
// has(value)

// iterators
// entries(),keys(),values(),forEach()

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add(4);

//const result = unique.delete(random);
//console.log(result);

const result1= unique.delete(6);
console.log(result1);


const hasValue = unique.has(4);
console.log(hasValue);

console.log(unique);

const products = [
{
	title: 'high-back bench',
	company: 'ikea'
},{
	title: 'albany table',
	company: 'marcos'
},{
	title: 'accent chair',
	company: 'caressa'
},{
	title: 'wooden table',
	company: 'ikea'
}
];

const companies = products.map((item)=> item.company );
console.log('Companies are: ',companies);

const uniqueCompanies = new Set(companies);
console.log('Unique companies are: ',uniqueCompanies);

//converting unique companies object into array and also adding All as a new element
const finalCompanies = ['All',...uniqueCompanies];
console.log('Final Companies are: ',finalCompanies);

// using one line of code to print unique value using set
const output = ['All companies',...new Set(products.map(item => item.company))];
console.log(output);