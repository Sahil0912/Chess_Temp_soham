module.exports = {
  spec: 'test/**/*.test.js',
  timeout: 5000,
  exit: true,
  require: [
    '@babel/register',
    './test/setup.js'
  ]
};