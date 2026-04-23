module.exports = function _reduced(x) {
    return x && x['@@transducer/reduced'] ? x : {
        '@@transducer/value': x,
        '@@transducer/reduced': true
    };
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_reduced.js
 ** module id = 242
 ** module chunks = 0
 **/