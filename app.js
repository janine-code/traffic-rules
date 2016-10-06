//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;

body.onkeydown = function(e) {

  //right arrow : 39//
  //left arrow  : 37
  //up arrow    : 38
  //down arrow  : 40
  var tl = new TrafficLight(taxiPositionCounter);

  if (e.keyCode === 38) {
    tl.red();
  }

  if (e.keyCode === 40) {
    tl.green();
    displayMessage("green");
  }

var currentState = tl.state();

if (e.keyCode === 39) {if(currentState === "red"){}
else{
          var position = calculateTaxiLocation(taxiPositionCounter);
          taxiPositionCounter++;
          var nextPosition = calculateTaxiLocation(taxiPositionCounter);
          moveTaxi(position, nextPosition);}

}
  if (e.keyCode === 37) {


    var position = calculateTaxiLocation(taxiPositionCounter);
    taxiPositionCounter--;
    var nextPosition = calculateTaxiLocation(taxiPositionCounter);
    moveTaxi(position, nextPosition);

  }

  displayMessage(e.keyCode);



  //alert(taxiPositionCounter);
  // to move the taxi forward...
  // when the right arrow is pressed
  //work with `taxiPositionCounter`

  // call `calculateTaxiLocation` to get a taxi location className store it in a variable.
  // increment the `taxiPositionCounter`
  // call `calculateTaxiLocation` to the new a taxi location className store it in another variable.

  //pass both to the `moveTaxi( firstClassName, secondClassName)` function
  //



}
