function myFun(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }

    console.log(sum)
}

module.exports = {
    myFun()
}