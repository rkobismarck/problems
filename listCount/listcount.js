'use strict'
const counter = () => {
  
  const getSize = (argument) =>  {return (argument.length == 1) ? 1 : getSize([argument.shift()]) + getSize(argument) }
  
  const maxNumber = (argument) => {
  	if(argument.length == 1){
  		return argument.pop()
  	}else{
  		let lower 		= maxNumber([argument.shift()])
  		let higher 		= maxNumber(argument)  
  		return lower < higher ? higher : lower  
  	}
  }

  return{
	getSize
	,maxNumber
}
}

module.exports = counter();