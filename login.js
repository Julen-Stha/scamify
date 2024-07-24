function myfunction(){
    var x=document.getElementById("password");
    var y=document.getElementById("hide1");
    var z=document.getElementById("hide2");

    if (x.type === 'password'){
        x.type = "text";
        y.style.display = "none"; //hiden text to normal text
        z.style.display ="block";//icon which is visible will be none
    }
    else{
        x.type = "password";
        y.style.display = "block";
        z.style.display ="none";
    }
}