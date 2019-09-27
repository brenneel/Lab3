//verifies the input from the two text boxes 1) is valid and 2) matches each other
function verifyInput(){
    let input1 = document.getElementById("passInput").value;
    let input2 = document.getElementById("verifyInput").value;
    
    if(input1.length <8){
        alert("Your password is too short!");
    }
    else if(input1 !== input2){
        alert("Your passwords do not match, type carefully!");
    }
    else{
        //do nothing, the passwords are valid
    }
    
}