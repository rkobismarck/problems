'use strict'

const stringAnalizer = () =>{
    let dictionary = {};

    const stringToArray = (e) => e.split("");

    const validateUniquenessInString = (argumentStr) => {
        var isUnique = true;
        stringToArray(argumentStr).forEach( e => {
            (dictionary[e] == undefined) ? dictionary[e] = true : (isUnique = false);
        });
        return isUnique; 
    }
    return {validateUniquenessInString}
};
module.exports = stringAnalizer();


