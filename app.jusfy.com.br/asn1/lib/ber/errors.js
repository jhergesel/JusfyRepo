// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.


module.exports = {

    newInvalidAsn1Error: function(msg) {
        var e = new Error();
        e.name = 'InvalidAsn1Error';
        e.message = msg || '';
        return e;
    }

};



/*****************
 ** WEBPACK FOOTER
 ** ../~/asn1/lib/ber/errors.js
 ** module id = 205
 ** module chunks = 0
 **/