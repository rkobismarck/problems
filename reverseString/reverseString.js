'use strict';
const reverseString = () =>{
    const performReverse = (argument) => {
        let arrayString = argument.split("");
        return arrayString.reduce((acc,element) => {acc.unshift(element); return acc},[]).join("");
    };
     
    return {performReverse}
};

module.exports = reverseString();
