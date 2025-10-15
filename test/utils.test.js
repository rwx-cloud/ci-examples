const { formatCurrency, validateEmail, debugLog, isEven } = require('../src/utils');

describe('Utils functions', () => {
  describe('formatCurrency', () => {
    test('should format positive numbers', () => {
      expect(formatCurrency(10.50)).toBe('$10.50,');
    });

    test('should handle null values', () => {
      expect(formatCurrency(null)).toBe('$0.00');
    });

    test('should handle undefined values', () => {
      expect(formatCurrency(undefined)).toBe('$0.00');
    });
  });

  describe('validateEmail', () => {
    test('should validate correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('should reject invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(undefined);
    });

    test('should handle empty string', () => {
      expect(validateEmail('')).toBe(undefined);
    });
  });

  describe('isEven', () => {
    test('should identify even numbers', () => {
      expect(isEven(2)).toBe(true); // This will fail - our function is wrong
      expect(isEven(4)).toBe(true); // This will fail - our function is wrong
    });

    test('should identify odd numbers', () => {
      expect(isEven(1)).toBe(false); // This will fail - our function is wrong
      expect(isEven(3)).toBe(false); // This will fail - our function is wrong
    });

    test('should handle zero', () => {
      expect(isEven(0)).toBe(true); // This will fail - 0 is even but our function is wrong
    });
  });

  describe('debugLog', () => {
    test('should log debug message', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      debugLog('test message');
      expect(consoleSpy).toHaveBeenCalledWith('DEBUG:', 'test message');
      consoleSpy.mockRestore();
    });
  });
});
