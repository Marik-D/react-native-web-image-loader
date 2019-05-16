const createImageWrapper = (classPath) => (size, images) => {
    const uri = `${images['@1x']}`

    delete images['@1x']

    let scalings = []

    for (let scaling in images) {
        scalings.push(`"uri${scaling}": ${images[scaling]},`)
    }

    return `
var AdaptiveImage = require( ${classPath} );

module.exports = new AdaptiveImage({
    uri: ${uri},${scalings.join('')}
    width: ${size.width},
    height: ${size.height}
});
`
}

module.exports = {
    createImageWrapper
}
