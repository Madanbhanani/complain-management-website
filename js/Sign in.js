


var cretData = localStorage.getItem("signUpData");
if(cretData){
    cretData = JSON.parse(cretData);
}
else{
    var cretData=[];
}

function signin(){
    var name=document.getElementById("name").value
    var password=document.getElementById("password").value;
    var checkedname = cretData.find((user) => user.username === name);
    var checkedpass = cretData.find((user) => user.password === password);

    if(name === ""){
        document.getElementById("error").innerText="Enter User Name"
        setTim()
        return;
    }

    if(password === ""){
       document.getElementById("error").innerText="Enter User Password"
       setTim()
       return;
    }
    if(checkedpass){
        document.getElementById("error").innerText="";
     }
     else{
        document.getElementById("error").innerText="Enter User password not Matched!";
        setTim()
     }
     if(checkedname){
        if(checkedpass){
            alert("Login Succses full");
            window.location.href="../pages/home.html"
         }
         else{
            document.getElementById("error").innerText="Enter User password not Matched!"
            setTim()
         }
    }
    else{
        document.getElementById("error").innerText="User Name not Matched!";
        setTim()
    }
}


function signup(){
    window.location.href="../index.html"
}

function locked(){
    var password =document.getElementById("password");
    var lockIcon =document.getElementById("lockIcon");
    var openLock =document.getElementById("openLock");
    openLock.style.display="block";
    lockIcon.style.display="none"
    password.setAttribute("type","text");
}

function unlocked(){
    var password =document.getElementById("password");
    var lockIcon =document.getElementById("lockIcon");
    var openLock =document.getElementById("openLock");
    openLock.style.display="none";
    lockIcon.style.display="block"
    password.setAttribute("type","password");

}

function setTim(){
    setTimeout(
        function(){
            document.getElementById("error").innerHTML="";
        },
        3000
    )
}