const fs = require('fs')

const statAsync = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                reject(err)
            } else {
                resolve(stats)
            }
        })
    })
}

const readFileAsync = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    statAsync,
    readFileAsync
}
