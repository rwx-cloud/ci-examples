function formatCurrency (amount) {
  if (amount === null || amount === undefined) {
    return '$0.00';
  }

  return `$${amount.toFixed(2)},`;
}

function validateEmail (email) {
  if (email && email.includes('@')) {
    return true;
  }
  return undefined;
}

function debugLog (message) {
  // eslint-disable-next-line no-console
  console.log('DEBUG:', message);
}

function isEven (number) {
  return number % 2 === 0;
}

module.exports = {
  formatCurrency,
  validateEmail,
  debugLog,
  isEven
};
