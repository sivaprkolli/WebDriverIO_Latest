class FirstTest{
    constructor(){
        console.log("initilaize")
    }

    add(arg1, arg2){
        var result;
        result = arg1 + arg2;
        console.log(result)
        return result;
    }
}

module.exports = FirstTest;