function validatelogin(){
    var name = document.getElementById("mailid");
    var password = document.getElementById("pass");
    text="";
    if(password.value.indexOf(' ')>=0){
        text="Enter valid password...";
        document.getElementById("text2").innerHTML=text;
        return false;
    }
    if(name.value.indexOf(' ')>=0){
        text="Enter valid email...";
        document.getElementById("text1").innerHTML=text;
        return false;
    }
    if(name.value.trim()==null|| name.value.trim()==""){
        text="Enter valid mailid...";
        document.getElementById("text1").innerHTML=text;
        return false;
    }
    else if(password.value.trim()==null || password.value.trim()==""){
        text="Enter valid password...";
        document.getElementById("text2").innerHTML=text;
        return false;
    }
    else{
        return true;
    }
}
function hasWhiteSpace(s) {
    const whitespaceChars = [' ', '\t', '\n'];
    return whitespaceChars.some(char => s.includes(char));
  }
function showpassword(){
    var password =document.getElementById("pass");
    if(password.type=="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}