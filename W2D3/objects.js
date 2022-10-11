

const adventurer = {
    name: "Tim",
    hitpoints: 10,
    belongings: ["sword", "potion", "tums"]
}

console.log(adventurer.hitpoints);
console.log(`My name is ${adventurer.name}. I have 99 ${adventurer.belongings[2]} in my bag.` )

for (let i=0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}

// ===== USE AN OBJECT WITHIN AN OBJECT =====
const newAdventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}

console.log(newAdventurer.companion);

console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type);

// Array of objects
const movies = [
    { title: "Tokyo"},
    { title: "Paul"},
    { title: "L'A"}
]

console.log(movies[2].title)

for (let i=0; i < movies.length; i++) {
    console.log(movies[i].title);
}

const foo = {
    someObject: {
        someProperty: 'Oh, hey'
    }
}
console.log(foo.someObject.someProperty);

const bar = {
    someMethod () => {
        console.log('Oh bye')
    }
}