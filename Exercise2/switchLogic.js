let arr;
let count = 0;
//advances the slide show forward
function next(){
    if(count == 4){
        document.getElementById("image").src = arr[4];
        count = -1;
    }
    else{
        document.getElementById("image").src = arr[count];
       
    }
    
}

//goes back a slide
function previous(){
    if(count == 0){
        document.getElementById("image").src = arr[0];
        count = 4;
    }
    else
    {
        document.getElementById("image").src = arr[count];
        
        
    }
}
//handles direction switching
//forward = true means forward
//false means reverse
function switcher(forward){
    if(forward == true){
            next();
            count = count + 1;
    }
    else{
        count = count - 1;
        previous();
    }
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