const fs = require('fs')
const file = 'README.md'

fs.readFile(file, 'ascii', function(err, contents) {
    if(err) {
        return console.log(err)
    }

    var newLine = contents.split('\n')
    console.log(newLine.length)
})