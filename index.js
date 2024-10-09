

var cretData = localStorage.getItem("signUpData");
if(cretData){
    cretData = JSON.parse(cretData);
}
else{
    var cretData=[];
}

function signup(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var conf_Password=document.getElementById("conformpassword").value; 
    var checkedUser = cretData.find((user) => user.username === name && user.useremail === email);
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(name === ""){
        document.getElementById("error").innerText="Enter User Name"
        setTim()
        return;
    }
    if(email === ""){
       document.getElementById("error").innerText="Enter User Email"
       setTim() 
       return;
    }
    if(password === ""){
       document.getElementById("error").innerText="Enter User Password"
       setTim()
       return;
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
       document.getElementById("error").innerText="Invalid Email formet!"
       setTim() 
       return;
    }
    if(password.length  < 8){
       document.getElementById("error").innerText="password must be more then 8 Characters!"
       setTim()
       return;
    }
    if(conf_Password  === ""){
        document.getElementById("error").innerText="Conform password!"
        setTim()
        return;
     }
    if(conf_Password  !== password){
        document.getElementById("error").innerText="Conform password not matched!"
        setTim()
        return;
     }
    if(checkedUser){
       alert('Username already exists');
       return;
    }
    else{

        document.getElementById("error").innerText=""
        var  Data= cretData.push({
            password : password,
            username : name,
            useremail: email
         })
       var U_Name =name;
       localStorage.setItem("UserLoginName", JSON.stringify(U_Name));
       localStorage.setItem("signUpData", JSON.stringify(cretData));
       alert('Sign up successful');
       window.location.href="./pages/Sign in.html"
}
}

function signin(){
    window.location.href="./pages/Sign in.html"
}


// View password
function locked(){
    var password =document.getElementById("password");
    var lockIcon =document.getElementById("lockIcon");
    var openLock =document.getElementById("openLock");
    openLock.style.display="block";
    lockIcon.style.display="none"
    password.setAttribute("type","text");

}
function locked2(){
    var conformpassword =document.getElementById("conformpassword");
    var lockIcon2 =document.getElementById("lockIcon2");
    var openLock2 =document.getElementById("openLock2");
    openLock2.style.display="block";
    lockIcon2.style.display="none"
    conformpassword.setAttribute("type","text");
}

function unlocked(){
    var password =document.getElementById("password");
    var lockIcon =document.getElementById("lockIcon");
    var openLock =document.getElementById("openLock");
    openLock.style.display="none";
    lockIcon.style.display="block"
    password.setAttribute("type","password");
}

function unlocked2(){
    var conformpassword =document.getElementById("conformpassword");
    var lockIcon2 =document.getElementById("lockIcon2");
    var openLock2 =document.getElementById("openLock2");
    openLock2.style.display="none";
    lockIcon2.style.display="block"
    conformpassword.setAttribute("type","password");
}

// Error Time set
function setTim(){
    setTimeout(
        function(){
            document.getElementById("error").innerText="";
        },
        3000
    )
}