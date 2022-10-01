// function validation(){
//     var fname = document.getElementById('fname').value;
//     if(fname==""){
//         document.getElementById('ferr').innerHTML="minimum length is 3";
//     }
// }
function validateForm(){
    var first = document.myForm.fname.value;
    
    if(first==""){
        document.getElementById("ferr").innerHTML = "enter your first name";
        return false;
    }
    if(first.length<3){
        document.getElementById("ferr").innerHTML = "enter valid first name";
        return false;
    }
    var last = document.myForm.lname.value;
    if(last==""){
        document.getElementById("ferr1").innerHTML = "enter your last name";
        return false;
    }
    if(last.length<3){
        document.getElementById("ferr1").innerHTML = "enter valid last name";
        return false;
    }
    var x=document.myForm.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        document.getElementById("ferr2").innerHTML = "enter valid email";
      return false;  
    } 
    var pass = document.myForm.password.value;
    if(pass==""){  
        document.getElementById("ferr3").innerHTML= "enter your password" ;
        return false; 
    }
    if(pass.length<8){  
        document.getElementById("ferr3").innerHTML= "password length sholud be 8" ;
        return false; 
    }
    var pass1 = document.myForm.password.value;
    var cpass = document.myForm.Cpassword.value;
    if(cpass!=pass1){  
        document.getElementById("ferr4").innerHTML= "password didn't match" ;
        return false; 
    }
    
    

}