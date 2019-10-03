//changes the css elements using js
function submitColors(){
    var myParagraph = document.getElementById("dummyText");
    var borderRed = document.getElementById("redBorder").value;
    var borderGreen = document.getElementById("greenBorder").value;
    var borderBlue = document.getElementById("blueBorder").value;
    var width = document.getElementById("width").value;
    var backgroundRed = document.getElementById("redBackground").value;
    var backgroundGreen = document.getElementById("greenBackground").value;
    var backgroundBlue = document.getElementById("blueBackground").value;

    var radius = width + "px";
    var tempBorderColor = "rgb(" + borderRed + ',' + borderGreen + ',' + borderBlue + ')';
    console.log(tempBorderColor);
    console.log(borderRed, borderGreen, borderBlue);
    var border = (radius + " solid " + tempBorderColor);
    console.log(border);
    myParagraph.style.border= border;
    //myParagraph.style.border = "2px solid rgb(2,250,250)";

    //background color section
    let tempBackgroundColor = "rgb(" + backgroundRed + ',' +backgroundGreen + ',' + backgroundBlue + ')';
        myParagraph.style.backgroundColor = tempBackgroundColor;
        console.log(tempBackgroundColor);
       // myParagraph.style.backgroundColor = "rgb(222,13,234)";
    
}