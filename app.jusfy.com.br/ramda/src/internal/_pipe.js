module.exports = function _pipe(f, g) {
    return function() {
        return g.call(this, f.apply(this, arguments));
    };
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_pipe.js
 ** module id = 138
 ** module chunks = 0
 **/