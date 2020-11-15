let email=document.getElementById("email");
let label = document.getElementById("label");
function validate(){
    let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{5,7})+\.([A-Za-z]{2,4})$/;
       if(regexp.test(email.value))
       {
           label.innerText = "Email  is Valid";
           label.style.color = "green";
           return true;
    }
    else
    {
           label.innerText = "Email  is Invalid";
           label.style.color = "red";
           return false;
    }
}

   