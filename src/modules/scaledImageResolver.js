const path = require('path')
const { statAsync } = require('./asyncFs')

const resolver = async function (resource, scalings) {
    const fileData = path.parse(resource)
    const suffixes = Object.keys(scalings)
    const result = {}
    for (let i = 0; i < suffixes.length; i++) {
        let suffix = suffixes[i]
        try {
            const filePath = path.join(fileData.dir, `${fileData.name}${suffix}${fileData.ext}`)
            const stats = await statAsync(filePath)

            if (stats.isFile()) {
                result[suffix] = filePath
            }
        } catch (e) {
            // Do nothing
        }
    }

    return result
}

module.exports = resolver
