function validateregistration(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var password = document.getElementById("pwd");
    text="";
    if(password.value.indexOf(' ')>=0){
        text="Enter valid password...";
        document.getElementById("text2").innerHTML=text;
        return false;
    }
    if(email.value.indexOf(' ')>=0){
        text="Enter valid email...";
        document.getElementById("text1").innerHTML=text;
        return false;
    }
    if(fname.value.trim()==null|| fname.value.trim()==""){
        text="Enter valid first name...";
        document.getElementById("text1").innerHTML=text;
        return false;
    }
    else if(lname.value.trim()==null|| lname.value.trim()==""){
        text="Enter valid last name...";
        document.getElementById("text2").innerHTML=text;
        return false;
    }
    else if(email.value.trim()==null|| email.value.trim()==""){
        text="Enter valid mailid...";
        document.getElementById("text3").innerHTML=text;
        return false;   
    }
    else if(password.value.trim()==null || password.value.trim()==""){
        text="Enter valid password...";
        document.getElementById("text4").innerHTML=text;
        return false;
    }
    else{
        return true;
    }
}
function showpassword(){
    var password =document.getElementById("pwd");
    if(password.type=="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}