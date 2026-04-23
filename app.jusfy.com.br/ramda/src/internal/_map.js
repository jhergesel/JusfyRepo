module.exports = function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
        result[idx] = fn(functor[idx]);
        idx += 1;
    }
    return result;
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_map.js
 ** module id = 21
 ** module chunks = 0
 **/