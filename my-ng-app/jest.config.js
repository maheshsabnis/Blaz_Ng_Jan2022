// the jest configuration file will be used to define
// the integration between Jest and Angular so that when the Jest runs
// Angular Test files will be transpiled and if any rendering is needed
// it will be executed through the memory JSDOM

// Read all JS/TS modules with their paths and transpile them
const {pathsToModuleNameMapper} =  require('ts-jest/utils');
// use the compileOption to transpile
const {compilerOptions} = require('./tsconfig.spec.json');

// Lets write Configuration

module.exports ={
  preset: 'jest-preset-angular', // load the JEST and Angular Integration
  roots: ['<rootDir>/src'], // Start reading files from rootDir/src folder, this is an application folder
  testMatch: ['**/+(*.)+(spec).+(ts)'], // the test file name
  setupFilesAfterEnv:['<rootDir>/src/test.ts'] , // the file for test config
  collectionCoverage: true, // use the code coverage
  coverageReporters: ['html'], // html file showing coverage data
  coverageDirectory: 'coverage/my-ng-app', // directory where coverage file will be created
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: '<rootDir>/'
  }) // start the transpilation for all modules and its dependencies from the root
};
