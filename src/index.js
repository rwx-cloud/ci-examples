// Calculate total price of items
function calculateTotal (items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    total += item.price * item.quantity;
  }

  return total;
}

function divide (a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
}

function add (a, b) {
  return a + b;
}

function multiply (a, b) {
  return a * b;
}

module.exports = {
  calculateTotal,
  divide,
  add,
  multiply
};
