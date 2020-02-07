function Cat() {
    this.name = 'Markov';
    this.age = 3;
}

function Dog() {
    this.name = 'Noodles';
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog();

Noodles.chase(Markov); //this = noodles, cat = markov;
Noodles.chase.call(Markov, Markov); //this = markov, cat = markov;
Noodles.chase.apply(Markov, [Noodles]); //this = noodles, cat = markov;

console.log("\neof");