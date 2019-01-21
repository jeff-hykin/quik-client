// get the quik symbol
let quikUniqueKey = Symbol.for("quik")
// if the quik-window doesnt exist, then create it
window[quikUniqueKey] || (window[quikUniqueKey] = {})
// return the window-quik object
module.exports = window[quikUniqueKey]
