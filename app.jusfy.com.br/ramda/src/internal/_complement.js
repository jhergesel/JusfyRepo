module.exports = function _complement(f) {
    return function() {
        return !f.apply(this, arguments);
    };
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_complement.js
 ** module id = 164
 ** module chunks = 0
 **/