
let email = document.getElementById("email");
let error = document.getElementById("error");
function validate(){
       let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{5,7})+\.([A-Za-z]{2,4})$/;
       if(regexp.test(email.value))
       {
           error.innerText = "Email is Valid";
           error.style.color = "green";
           return true;
    }
    else
    {
           error.innerText = "Email is Invalid";
           error.style.color = "red";
           return false;
    }
}
   
    










// if(email.value.trim()==""||pwd.value.trim()==""){
    //     alert("Fields cannot be empty");
    //     return false;
    // }
    // else{
    //     return true;
        // alert("Validation is proper");
       
    // if(email.value==""){
    // alert("Email cannot be empty");
    // return false;
    // }
    // else if(pwd.value==""){
    //     alert("Password cannot be blank");
    //     return false;
    // }
    // else if(pwd.value.length<=5){
    //     alert("Password is too short")
    //     pwd.style.border="2px solid red";
    //     return false;
        
    // }
    // else{
    //     return true;
    // }

