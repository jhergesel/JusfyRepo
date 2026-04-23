module.exports = function _isPlaceholder(a) {
    return a != null &&
        typeof a === 'object' &&
        a['@@functional/placeholder'] === true;
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_isPlaceholder.js
 ** module id = 7
 ** module chunks = 0
 **/