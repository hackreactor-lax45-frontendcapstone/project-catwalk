module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/__tests__/setupTests.js',
    '<rootDir>/__tests__/createStore.js',
  ],
  setupFilesAfterEnv: ['<rootDir>__tests__/setupTests.js'],
  testEnvironment: 'jsdom',
};