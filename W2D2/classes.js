/*const lion ={
    legs: 4,
    color: "golden",
    diet: "Carnivores"
}
const zebra = {
    legs: 4,
    color: "black and white",
    diet: "Herbivores"
}
*/

class Animal {
    constructor(nameParam, legsParam, colorParam, dietParam){
        this.name = nameParam;
        this.legs = legsParam
        this.color = colorParam;
        this.diet = dietParam;
    }
}

let elephants = new Animal("Eleph", "4", "Gray", "Herb")
console.log(elephants)

let lion = new Animal("Lion", "4", "Gold", "Meat")
let zebra = new Animal("zebra", "4", "BW", "Plant")
console.log(lion, zebra)
console.log(Animal)

class Car{
    constructor(make, model, year, doors, location, price) {
        this.make = make;
        this.model = model;
        this. year = year;
        this. doors = doors;
        this.location = location
    }
}

let car1 = new Car("honda", "accord", "1999", "4", "Denver", "3,000")
console.log(car1)
let car2 = new Car("700", "bmw", "2002", "4", "Canada", "7,000")
console.log(car2)
let car3 = new Car("S10", "chevy", "1989", "2", "Blackson", "700")
console.log(car3)

const cohort = {
    id: 'Seir FM',
    students: ['Dina', 'Lina', 'Stan'],
    instructors: ['Arthur', 'Nando', 'Teo'],
    addStudent: function(name) {
        name = name[0].toUpperCase() + name.substr(1).toLowerCase();
        this.students.push(name);
    },
    pickRandomStudent: function() {
        const rndIdx = Math.floor(Math.random() * this.students.length);
        return this.students[rndIdx];
    }
};
console.log(cohort);

