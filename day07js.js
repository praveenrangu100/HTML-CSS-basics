function myfunction1(){
    alert("External js is working");
}
function validateform(){
    var name = document.getElementById("name");
    var password = document.getElementById("pass");

    if(name.value.trim()==null|| name.value.trim()==""){
        alert("Enter valid username...");
        return false;
    }
    else if(password.value.trim()==null || password.value.trim()==""){
        alert("Enter valid password...");
        return false;
    }
    else{
        alert("login successful...");
        return true;
    }
}
function validateage(){
    var age= document.getElementById("age");
    text=""
    if(age.value>0 && age.value<=100){
        text="valid age";
    }else{
        text="invalid age";
    }
    document.getElementById("para").innerHTML=text;
}
function increment(){
    document.getElementById("number").stepUp();
}
function decrement(){
    document.getElementById("number").stepDown();
}
function changepic(){
    var  myimage = document.getElementById("image");

    if(myimage.src.match("images/athadu.jpeg")){
        myimage.src="images/1.jpeg";
    }else{
        myimage.src="images/athadu.jpeg";
    }
}