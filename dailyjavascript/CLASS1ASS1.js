//completing the code
const foo = {
    color : "red",
    getColor : function(){
      //make this function return foo.color
      //without using the word: "foo"
      return color;
    }
  }
  console.log(foo['color']);


//bracket notation
    let arr = ['a', 'b', 'c','d'];
    let letter = arr[3];
    console.log(letter);

//dot notation
    let obj = {
        cat:'meow',
        dog :'woof'
    };
    let sound = obj.cat;
    console.log(sound)


//calculator prototype
let Calculator = function(xX,yY){
    this.xX = xX;
    this.yY = yY;

};
Calculator.prototype.addition = function (){
    console.log(this.xX + this.yY);

};
Calculator.prototype.subtraction = function(){
    console.log(this.xX - this.yY);
};
Calculator.prototype.division = function(){
    console.log(this.xX/this.yY);
};
Calculator.prototype.multiplication = function(){
    console.log(this.xX * this.yY);
};

var allow = new Calculator (50,10);
allow.addition();
allow.subtraction();
allow.division();
allow.multiplication();


//callback
function RawWrestler(name, gender) {
    console.log(name + " is fierce and very competitive.");
    console.log("Articulate in speaking and swift in the ring.");
    console.log("Engages his opponents with different styles back to back.");
    console.log("A " + gender + " of several injuries and accidents but never gives up, always comes back to the ring");
}
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;
    
    callback(fullName, gender);
    }

getUserInput("Roman", "Reigns", "Man", RawWrestler);