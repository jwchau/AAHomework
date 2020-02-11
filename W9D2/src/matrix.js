//Matrix stuff
function Matrix(size = 25, speed = 0.333) {
    this.size = size;
    this.drops = [];
    this.speed = speed;
    const columns = window.innerWidth / size;
    for (let x = 0; x < columns; x++) this.drops[x] = 1;
}

let code = "\uFB20,\uFB21,\uFB23,\uFB24,\uFB25,\uFB26,\uFB27,";
code += "\uFB28,\uFB29,\uFB2A,\uFB2B,\uFB2C,\uFB2D,";
code += "\u2327,\u2300,\u2299,\u2205,\u2206,\u2107,";
code += "\u210A,\u210B,\u210C,\u2110,\u2112,\u2111,";
code += "\u2130,\u2123,\u211B,\u211C,\u211D,\u211E,";
code += "\u30B7,\u30B9,\u30BB,\u30DD,\u30CF,\u30AB,";
code += "\u30A5,\u30C1,\u30D1,\u30E1,\u30E0,\u30C9,";

Matrix.SYMS = code.split(",");
//Matrix.SYMS = "사랑하게됐어한이방인어떻게나를이해시켜야할지저멀\
//리검은그림자널만난다면수천킬로나는달려가가슴에총소리가\
//출발해널향한커다란두눈에빠져온통신비로운감정그사람들은\
//내가바라보는너를그들은전혀보려하지않아말해언어난맘을열어"

const N = Matrix.SYMS.length;

//#0D0208 vampire black
//#003B00 darkest
//#008F11 mediumest
//#00FF41 lightest
Matrix.COLORS = ["#003B00", "#008F11", "#00FF41"];

Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
} 


//drawing the characters
Matrix.prototype.render = function(ctx) {
    
    ctx.fillStyle = Matrix.COLORS.sample(); //green text
    ctx.font = this.size + "px Arial";

    for (let i = 0; i < this.drops.length; i++) {

        let text = Matrix.SYMS[Math.floor(Math.random() * N)];
        ctx.fillText(text, i * this.size, this.drops[i] * this.size);

        if (this.drops[i] * this.size > window.innerHeight && Math.random() > 0.975)
            this.drops[i] = 0;

        this.drops[i] += this.speed;
    }
}

module.exports = Matrix;