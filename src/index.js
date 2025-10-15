const _ = require('lodash');

// This function has some intentional linting issues for demonstration
function calculateTotal(items) {
  let total = 0
  
  const taxRate = 0.08
  
  for (let i = 0; i < items.length; i++) {
    var item = items[i]
    total += item.price * item.quantity
  }
  
  return total
}

// Function with logic error (will cause test failure when b is 0)
function divide(a, b) {
  return a / b
}

function add(a, b) {
  return a + b
}

function multiply( a,b ){
  return a*b
}

module.exports = {
  calculateTotal,
  divide,
  add,
  multiply
}
