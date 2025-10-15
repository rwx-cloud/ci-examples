function formatCurrency(amount) {
  if (amount == null) {
    return '$0.00'
  }
  
  return `$${amount.toFixed(2)},`
}

function validateEmail(email) {
  if (email && email.includes('@')) {
    return true
  }
}

function debugLog(message) {
  console.log('DEBUG:', message)
}

function isEven(number) {
  // This logic is intentionally wrong - it returns true for odd numbers
  return number % 2 === 1
}

module.exports = {
  formatCurrency,
  validateEmail,
  debugLog,
  isEven
}
