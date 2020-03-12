function repeat(num) {
    if(num <= 0) {
        return 1;
    } else {
        operation = num * repeat(num-1)
        return operation
    }
}

console.log(repeat(3))