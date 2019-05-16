const sizeOf = require('image-size')

module.exports = function (path) {
    return sizeOf(path)
}
