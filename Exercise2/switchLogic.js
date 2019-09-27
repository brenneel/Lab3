let arr;
let count = 0;
//advances the slide show forward
function next(){
    if(count == 4){
        document.getElementById("image").src = arr[count];
        count = 0;
    }
    else{
        document.getElementById("image").src = arr[count];
        count = count +1;
    }
    
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
    "./images/lightGreen.png"
    ];
}