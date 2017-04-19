var docFragment = document.createDocumentFragment();
var soccerField = document.createElement("section");
var touchline = document.createElement("section");
var penaltyBoxLeft = document.createElement("Section");
var penaltyBoxRight = document.createElement("section");
var centerCircle = document.createElement("section");
var smallCircle = document.createElement("section");

window.addEventListener("load", function(){
    centerCircle.classList.add("center-circle", "centered-element");
    touchline.classList.add("touch-line", "centered-element");
    penaltyBoxLeft.classList.add("penalty-box", "penalty-box-left");
    penaltyBoxRight.classList.add("penalty-box", "penalty-box-right");
    soccerField.classList.add("soccer-field", "centered-element");
    smallCircle.classList.add("small-circle");

    var circleClone1 = smallCircle.cloneNode();
    circleClone1.classList.add("small-circle-2");
    var circleClone2 = smallCircle.cloneNode();
    circleClone2.classList.add("small-circle-3");
    console.log(circleClone2);

    touchline.append(penaltyBoxLeft, smallCircle, circleClone1, centerCircle, circleClone2, penaltyBoxRight);
    soccerField.append(touchline);
    docFragment.append(soccerField);
    document.body.prepend(docFragment);
});
