/*
function checkPalidrome(str){
	let len=str.length;
	
	for(let i=0;i<len/2;i++){
		if(str[i]!==str[len-1-i]){
			return "the given string is not a palindrome";
		}
	}
	return "The given string is a palindrome";
}

const string=prompt("Enter the String");

const results=checkPalidrome(string);

console.log(results);
*/

// checking palindrome using built in functions

function checkPalidrome(str){
	let reverseString = str.split('').reverse().join('');
	console.log('The reversed String is: ',reverseString);
	
	if(reverseString===str){
		return "the given string is a palindrome";
	}else{
	return "The given string is not a palindrome";
	}
}

const string=prompt("enter the string to check palindrome or not");
const result=checkPalidrome(string);
console.log(result);