{
    // normal function 
function add(num1: number, num2: number = 3) {
    return num1 + num2
}

// arrow function 
const add1 = (num1: number, num2: number) => num1 + num2 

// method function 
const poorUser = {
    name : 'rana',
    balance :0,
    addBalance (balance : number):number{
        return this.balance + balance
    }
}
}