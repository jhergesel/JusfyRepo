module.exports = function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
        list.push(next.value);
    }
    return list;
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_arrayFromIterator.js
 ** module id = 121
 ** module chunks = 0
 **/