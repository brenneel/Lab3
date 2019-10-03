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

    

    //background color section
    let tempBackgroundColor = "rgb(" + backgroundRed + ',' +backgroundGreen + ',' + backgroundBlue + ')';
        myParagraph.style.backgroundColor = tempBackgroundColor;
        console.log(tempBackgroundColor);
       // myParagraph.style.backgroundColor = "rgb(222,13,234)";
    
}