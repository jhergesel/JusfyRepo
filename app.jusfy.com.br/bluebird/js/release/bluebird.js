"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;

function noConflict() {
    try {
        if (Promise === bluebird) Promise = old;
    } catch (e) {}
    return bluebird;
}
var bluebird = require("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;



/*****************
 ** WEBPACK FOOTER
 ** ../~/bluebird/js/release/bluebird.js
 ** module id = 49
 ** module chunks = 0
 **/