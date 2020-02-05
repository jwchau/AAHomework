function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }

  //in block
  //out of block xxxxxxxxxxxxxxxxxxxxxxxx
  
  function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  //in block
  //out of block oooooooooooooooooooo

  function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }

  //in block
  //in block
  
  function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }


  //inbblock
  //out of block

  
  function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
  } 

  //in block
  //ooba


// madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(){
    let i = 0
    process.stdout.write("We shall ")
    process.stdout.write(arguments[i++].toUpperCase())
    process.stdout.write(" the ")
    process.stdout.write(arguments[i++].toUpperCase())
    process.stdout.write(" ")
    process.stdout.write(arguments[i++].toUpperCase())
}



// > isSubstring("time to program", "time")
// true

// > isSubstring("Jump for joy", "joys")
// false

function isSubstring(str, sub) {
    for (let i = 0; i + sub.length < str.length; i++) {
        let w = str.substring(i, i + sub.length)
        if (w == sub) return true
    }
    return false
}

//fizz buzz
//fizzBuzz(array)



// > isPrime(2)
// true

// > isPrime(10)
// false

// > isPrime(15485863)
// true

// > isPrime(3548563)
// false


// > sumOfNPrimes(0)
// 0

// > sumOfNPrimes(1)
// 2

// > sumOfNPrimes(4)
// 17