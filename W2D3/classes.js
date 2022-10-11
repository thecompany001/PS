

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newEnemy
  }
  const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newPlayer
  }

  const ivana = createEnemy('Ivana', 10000, 'Freeze smile', 1000)

  console.log(ivana)

  class Character {
      sayGreeting() {
          console.log('Hello, world.')

      }

  }


  const mina = new Character()
  const priya = new Character()
  console.log(mina)
  console.log(priya)

  class SuperHero extends Character {
      
  }