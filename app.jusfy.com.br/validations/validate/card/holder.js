import {
    pipe,
    replace,
    test,
    toString,
} from 'ramda'

export default pipe(
    toString,
    replace(/"/g, "'"),
    test(/^[a-zA-Z_' ]*$/)
)



/** WEBPACK FOOTER **
 ** ./validations/validate/card/holder.js
 **/