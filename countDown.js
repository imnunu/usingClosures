/*
Implement a function countdownGenerator()
that takes in a number x and returns a function
that counts down when it is called
(see starter code below).
*/


var countdownGenerator = function (x) {
  /* your code here */
  var radio = ['Rockets already gone, bub!','Blast Off!','T-minus 1...','T-minus 2...','T-minus 3...'];
  var timer = x + 2 ;

  // console.log(timer); //3
  return function () {
    timer -= 1 ;
    if (timer >= 0) {
      console.log(radio[timer]);
    } else {
      console.log(radio[0]);
    }

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!