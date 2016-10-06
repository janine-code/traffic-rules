//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;

body.onkeydown = function(e) {

    //right arrow : 39//
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40
    if (e.keyCode === 39) {

      var blah = calculateTaxiLocation(taxiPositionCounter);
      taxiPositionCounter++;
      var blah2 = calculateTaxiLocation(taxiPositionCounter);
      moveTaxi(blah, blah2);

    }
    if (e.keyCode === 37) {

      var blah = calculateTaxiLocation(taxiPositionCounter);
      taxiPositionCounter--;
      var blah2 = calculateTaxiLocation(taxiPositionCounter);
      moveTaxi(blah, blah2);

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
    var tl = new TrafficLight(taxiPositionCounter);



          if (e.keyCode === 38) {
        tl.red();
      }
      else if (e.keyCode === 40) {
        tl.green();
        displayMessage("green");
      }
      else{tl.orange();}

      if (tl.state() === "green") {
      moveTaxi(blah,blah2);}
  else if (tl.state()==="red"){taxiPositionCounter=moveTaxi(blah,blah);}
  else{moveTaxi(blah,blah2)}

}
