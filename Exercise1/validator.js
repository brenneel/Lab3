//verifies the input from the two text boxes 1) is valid and 2) matches each other
function verifyInput(){
    let input1 = document.getElementById("passInput");
    let input2 = document.getElementById("verifyInput");
    
    if(input1.length <8){
        alert("Your password is too short!");
    }
    if(input1 == input2){
        //do nothing
    }
    else{
        alert("Your passwords do not match, type carefully!");
    }
    
}