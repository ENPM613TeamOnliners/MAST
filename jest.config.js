// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,


  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'vue',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  // roots: [
  //   '<rootDir>',
  // ],
  // eslint-disable-next-line max-len
  // A map from regular expressions to module names that allow to stub out resources with a single module
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$l',
  },

  snapshotSerializers: [
    'jest-serializer-vue',
  ],


  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/tests/unit/**/*.(js|jsx|ts|tsx)',
  // ],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

  testURL: 'http://localhost',
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|wpff2)$': 'jest-transform-stub',
    '^.+\\jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/(?!vuetify)',

  ],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
