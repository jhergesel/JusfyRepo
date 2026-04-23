module.exports = function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];

    while (idx < len) {
        if (fn(list[idx])) {
            result[result.length] = list[idx];
        }
        idx += 1;
    }
    return result;
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_filter.js
 ** module id = 166
 ** module chunks = 0
 **/