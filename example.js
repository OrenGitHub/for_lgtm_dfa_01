const utils = require('utils')
const url = 'http://www.github.com/?foo=шеллы'
var encoded = utils.escapeHtml(url);
var decoded = decodeURI(encoded)
