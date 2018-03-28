'use strict'

const operations = () => {
  const add      = (a,b) => (parseInt(a) + parseInt(b))
  const multiply = (a,b) => (parseInt(a) * parseInt(b))

  return{
    add,
    multiply
  }
}

module.exports = operations();