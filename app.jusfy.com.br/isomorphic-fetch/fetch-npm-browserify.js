// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);



/*****************
 ** WEBPACK FOOTER
 ** ../~/isomorphic-fetch/fetch-npm-browserify.js
 ** module id = 100
 ** module chunks = 0
 **/