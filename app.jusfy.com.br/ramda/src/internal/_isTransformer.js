module.exports = function _isTransformer(obj) {
    return typeof obj['@@transducer/step'] === 'function';
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_isTransformer.js
 ** module id = 20
 ** module chunks = 0
 **/