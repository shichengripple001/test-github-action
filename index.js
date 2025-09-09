/**
 * A tiny module that says hello.
 * Usage:
 *   const { hello } = require('@your-scope/hello-world');
 *   console.log(hello('NPM')); // "Hello, NPM!"
 */
function hello(name = 'world') {
    return `Hello, ${name}!`;
  }
  
module.exports = { hello };
  