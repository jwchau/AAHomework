const hammerTime = function(time) {
    this.setTimeout(() => {
        alert(`${time} is HAMMERTIME!`)},
        time
    );
}

//
const time = 3000;
hammerTime(time);

console.log("end of file");