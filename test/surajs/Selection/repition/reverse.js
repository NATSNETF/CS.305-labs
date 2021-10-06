function reverseDigits(num){

	let strg = num.toString();
	let result = strg.split("").reverse().join("");
	let final = parseInt(result);
	return final;

}
console.log(reverseDigits(3564));
