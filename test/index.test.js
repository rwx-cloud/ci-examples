const { calculateTotal, divide, add, multiply } = require('../src/index');

describe('Index functions', () => {
  describe('calculateTotal', () => {
    test('should calculate total for valid items', () => {
      const items = [
        { price: 10, quantity: 2 },
        { price: 5, quantity: 3 }
      ];
      expect(calculateTotal(items)).toBe(35);
    });

    test('should return 0 for empty array', () => {
      expect(calculateTotal([])).toBe(0);
    });
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    // This test will fail because we're not handling division by zero
    test('should handle division by zero', () => {
      expect(divide(10, 0)).toBe(0);
    });

    // This test will also fail due to the logic error
    test('should divide negative numbers', () => {
      expect(divide(-10, 2)).toBe(5);
    });
  });
});
