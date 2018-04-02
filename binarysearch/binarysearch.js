'use strict';
const search = () => {
	const binary = (argument,key) => {		
		let size 		= argument.length;
		if(size == 1) {
			return (argument[0] == key) ? true : false ;
		}
		else{
			let tempArray 	= [];
			let medium 			= Math.ceil(size/2);	
			let lowerLimit 	= medium;
			let higherLimit = size;
			(argument[medium] > key) ? (lowerLimit = 0, higherLimit = medium) : null;
			tempArray = argument.splice(lowerLimit,higherLimit);
			return binary(tempArray,key);
		}
	}

	const quicksort = (argument) => {
		if(argument.length < 2){
			return argument
		}else{
			let pivot  = argument.shift();
			let higher = argument.filter(e => e>pivot)
			let lower  = argument.filter(e => e<=pivot)
			return quicksort(lower).concat(pivot,quicksort(higher))
		}
	}

	return{
		binary,
		quicksort
	}
}

var app = search();
	console.log(app.quicksort([10,5,2,3,24,45,12,45,341]))

//module.exports = search();

