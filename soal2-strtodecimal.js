var convertToDecimal = function convertToDecimal(number) {
    var result = []

    for(i=0; i<number.length; i++){
        var split = number[i].split('%')
        var temp = split[0]/100
        result.push(temp)
    }

    return result
}

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))