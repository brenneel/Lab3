//changes the css elements using js
function submitColors(){
    var myParagraph = document.getElementById("dummyText");
    var borderRed = document.getElementByI("redBorder").value;
    var borderGreen = document.getElementById("greenBorder").value;
    var borderBlue = document.getElementById("blueBorder").value;
    var borderWidth = document.getElementById("width").value;

    myParagraph.style.backgroundColor =rgb(borderRed,borderGreen,borderBlue);
    myParagraph.style.borderWidth = borderWidth; 
}