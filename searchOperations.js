'use strict';

const searchOperations = () => {
	
	const binarySearch = (valueToFind, array) =>{
	
	if(array == undefined){
		console.log("ERROR, the input array can't be empty.");
		return false;
	}

	let found 	= false;
	let lowerLimit = 0;
	let upperLimit = array.length - 1;
	while (found == false){
		let mid = lowerLimit + Math.trunc(( upperLimit - lowerLimit)/2);
		if( upperLimit < lowerLimit){
			break;
		}
		if(array[mid] == valueToFind){
			found = true;
			break;
		}
		if(array[mid]<valueToFind){
			lowerLimit = mid + 1;
		}
		if(array[mid]>valueToFind){
			upperLimit = mid - 1;
		}
	}
	return found;
	}

	return{binarySearch}	
};

module.exports = searchOperations;