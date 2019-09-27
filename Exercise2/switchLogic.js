let arr;
//advances the slide show forward
function next(){
    document.getElementById("image").src = arr[1];
}

//goes back a slide
function previous(){

}

function onPageLoad(){
    arr = [
    "./images/red.png",
    "./images/lightBlue.png",
    "./images/oceanBlue.png",
    "./images/orange.png",
    "./images/lightGreen"
    ];
}