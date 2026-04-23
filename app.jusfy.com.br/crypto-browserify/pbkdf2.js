var pbkdf2Export = require('pbkdf2-compat/pbkdf2')

module.exports = function(crypto, exports) {
    exports = exports || {}

    var exported = pbkdf2Export(crypto)

    exports.pbkdf2 = exported.pbkdf2
    exports.pbkdf2Sync = exported.pbkdf2Sync

    return exports
}



/*****************
 ** WEBPACK FOOTER
 ** ../~/crypto-browserify/pbkdf2.js
 ** module id = 192
 ** module chunks = 0
 **/