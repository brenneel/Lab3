let arr;
let count = 0;

//advances the slide show forward
function next(){
    count = count +1;
   
    if(count == 4){
        document.getElementById("image").src = arr[4];
        count = -1;
    }
    else if(count >4){
        document.getElementById("image").src = arr[0];
        count = 0;
    }
    else{
        document.getElementById("image").src = arr[count];
       
    }
    
}

//goes back a slide
function previous(){
    count = count - 1;
    if(count == 0){
        document.getElementById("image").src = arr[0];
        count = 5;
    }
    else if(count <0){
        document.getElementById("image").src = arr[4];
        count = 4;
    }
    else{
        document.getElementById("image").src = arr[count];
    }
}
//handles direction switching
//forward = true means forward
//false means reverse
function switcher(forward){
    if(forward == true){
        
        next();
        
    }
    else{
        
        previous();
    }
}

//loads images into the array when the page loads in
function onPageLoad(){
    arr = [
    "./images/red.png",
    "./images/lightBlue.png",
    "./images/oceanBlue.png",
    "./images/orange.png",
    "./images/lightGreen.png"
    ];
}