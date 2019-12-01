module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [ 'src/**/*.{js,jsx}' ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: [ 'js', 'json', 'jsx' ],
  setupFiles: [ '<rootDir>/enzyme.config.js' ],
  testEnvironment: 'jsdom',
  testMatch: [ '**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)' ],
  testPathIgnorePatterns: [ '\\\\node_modules\\\\' ],
  testURL: 'http://localhost',
  transformIgnorePatterns: [ '<rootDir>/node_modules/' ],
  verbose: true,
}
