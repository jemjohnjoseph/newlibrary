
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var mob = document.getElementById("mob");
var cnpwd=document.getElementById("cnpwd");
let name = document.getElementById("name");
let error = document.getElementById("error");
// let name = document.getElementById("name");
// let pass = document.getElementById("pass");

function validate()
{
    var checkmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var pswr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mobno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(name.value==""){
        alert("Enter your name :");
        return false;
    }
    if(checkmail.test(email.value)!="1")
    {
        error.innerHTML="  INVALID eg:jninndn23@gmail.com";
        error.style.color="red";
        // window.alert("Email Is Invalid");
        return false;
    }
    else if(mobno.test(mob.value)!="1")
    
    {
        console.log("mob no "+mob.value);
        window.alert("Please enter a valid phone number :");
        return false;
        
    }
    // else  if(pwd.value!=cnpwd.value)
    // {
    //     window.alert("Passwords Doesnt Match, Please Re-enter :");
    //     return false;
    // }
    else if(pswr.test(pwd.value)!="1")
    {
        console.log("pass check "+pwd.value);
        console.log("conform pass check "+cnpwd.value);
        // error.innerHTML="  INVALID eg:jninndn23@gmail.com";
        // error.style.color="red";
        window.alert("Password Is Invalid");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        
        return false;
    }
   
    else
    {
        // window.alert("validation Success");
        return true;
    }
    
}
function strengthcheck() {
    var pwdcolorbar=document.getElementById ('pwdstrengthbar');
    // var pwdbox=document.getElementById('signupinputPassword4');
    var pwd=document.getElementById('pwd').value;
    var specialchar='/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/';
    var score=0;
    for(var i=0;i<pwd.length;i++){
        if(specialchar.indexOf(pwd.charAt(i))>-1){
            score +=20;
            break;
        }
    }
    if(/([a-z])/.test(pwd)){
        score+=20;
    }
    if(/([A-Z])/.test(pwd)){
        score+=20;
    }
    if(/([\d])/.test(pwd)){
        score+=20;
    }
    if(pwd.length>=6){
        score+=20;
    }

    var strength='Minimum 6 characters';
    var bgcolor='';
    
    if(score>=100){
        strength="Strong";
        bgcolor='green';
    }
    else if(score>=80){
        strength="Medium";
        bgcolor='blue';
    }
    else if(score>=60){
        strength="Weak";
        bgcolor='orange';
    }    
    else{
        strength='Very Weak';
        bgcolor='red';
    }    
    pwdcolorbar.style.width='12em';
    pwdcolorbar.style.height='1.2em';
    pwdcolorbar.innerHTML=strength;
    pwdcolorbar.style.backgroundColor=bgcolor;
    pwdcolorbar.style.color="white";

    if(pwd.length==0){
        pwdcolorbar.innerHTML='Minimum 8 characters';
        pwdcolorbar.style.color='black';
        pwdcolorbar.style.background='transparent';
    }
  }
  