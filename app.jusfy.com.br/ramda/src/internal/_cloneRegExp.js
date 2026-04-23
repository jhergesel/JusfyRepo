module.exports = function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? 'g' : '') +
        (pattern.ignoreCase ? 'i' : '') +
        (pattern.multiline ? 'm' : '') +
        (pattern.sticky ? 'y' : '') +
        (pattern.unicode ? 'u' : ''));
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_cloneRegExp.js
 ** module id = 250
 ** module chunks = 0
 **/