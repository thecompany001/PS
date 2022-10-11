class Govenor {
    static party () {
        return ['State', 'Party'];
    }
}

class Person {
    constructor(first, last, job) {
        this.first = first,
        this.last = last,
        this.job = job
    }
    clockin() {
        console.log(this.job + `has  to clock in at ${clockin}!`);

    }
    clockout() {
        console.log(this.job + `has to clock out at ${clockout}!`);
    }

}

class PostalWorker extends Person {
    sort() {
        console.log(`${this.first}, please sort out the mail.`);
    }
    deliver() {
        console.log(`${this.first}, please deliver the mail`);
    }
}

class Chef extends Person {
    train() {
        console.log(`${this.first} time to train.`)
    }
    flame() {
        console.log(`${this.first} time to flame.`)
    }
}

const PostalWork1 = new PostalWorker('Tom', 'Jon', 'Postal worker');
const PostalWork2 = new PostalWorker('Jon', 'Tom', 'Postal worker');

const Chef1 = new Chef('Ben', 'Cooks', 'Chef');
const Chef2 = new Chef('Fred', 'Fries', 'Chef');

console.log(PostalWork1);
console.log(PostalWork2);
console.log(Chef1);
console.log(Chef2);

PostalWork1.sort();
PostalWork2.deliver();

Chef1.train();
Chef2.flame();