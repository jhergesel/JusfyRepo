module.exports = {
    init: function() {
        return this.xf['@@transducer/init']();
    },
    result: function(result) {
        return this.xf['@@transducer/result'](result);
    }
};



/*****************
 ** WEBPACK FOOTER
 ** ../~/ramda/src/internal/_xfBase.js
 ** module id = 28
 ** module chunks = 0
 **/