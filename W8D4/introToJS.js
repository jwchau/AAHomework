const printCallback = function(el) {
    str = `Mx. ${el} Jingleheimer Schmidt`;
    console.log(str);
}

const titleize = function(arr, cb) {
    arr.forEach(printCallback);
}


// titleize(["Mary", "Brian", "Leo"], printCallback);

//elephant should have a name, height (in inches)

const Elephant = function(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = (trick) => {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    console.log(`${name} is ${tricks[Math.floor(Math.random() * tricks.length)]}`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
    elephant.play();
}

herd.forEach(paradeHelper);