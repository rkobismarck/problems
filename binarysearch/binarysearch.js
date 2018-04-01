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
	return{
		binary
	}
}

module.exports = search();

