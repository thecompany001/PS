

class Car {
    constructor (makerParam, serialNumberParam) {
        this.maker = makerParam
        this.serialNumber = serialNumberParam
    }
    drive () {
        console.log("vroom")
    }
}

let newMaker = 'honda'
const testCar = new Car(newMaker, '1234')
console.log(testCar)

testCar.year = 2022
console.log(testCar)

testCar.drive()

const car2 = new Car('Honda', 'asdfas', 2019)
console.log(car2)