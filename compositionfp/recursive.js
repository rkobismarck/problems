
'use strict'

const recursive = (operations) => {
  const availableOperations = operations;  
  // Base case
  //  [1] --> No more items to pop.
  const performRecursiveOperation = ( argument, operation ) => {
    if(argument.length==1)
      return argument 
    else 
      return operation(argument.pop(), performRecursiveOperation(argument,operation));
  }

  const summarize = (argument) => performRecursiveOperation(argument,availableOperations.add)
  const multiplier = (argument) => performRecursiveOperation(argument,availableOperations.multiply)

  return {
    summarize
    ,multiplier
  }
}

module.exports = recursive;