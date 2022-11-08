/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
  
    // jsdom is used for testing frontend, will need to use 'node' for backend server side testing
    testEnvironment: 'jsdom',
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*\\.(test|spec))\\.tsx?$",

    testTimeout: 15000,

  };