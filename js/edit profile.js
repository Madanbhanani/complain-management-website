

var getData=JSON.parse(localStorage.getItem("signUpData"));
console.log(getData);

var idName =document.getElementById("idName");
var idEmail =document.getElementById("idEmail");
var Email =document.getElementById("Email");
var Name =document.getElementById("Name");
var mobile =document.getElementById("mobile");
var inputField =document.getElementById("inputField");
var Gender =document.getElementById("Gender");

for(i=0; i <getData.length; i++){
    mobile.value =getData[i].Mobile;
    inputField.value =getData[i].location

    idName.innerHTML= getData[i].username
    idEmail.innerHTML= getData[i].useremail;
    Email.innerHTML=getData[i].useremail;
    Name.innerHTML=getData[i].username;
    var x1 = getData[i].location
    var x2 = getData[i].gender

    var x= getData[i].username;
    var d= x.charAt(0);
    var profileImg =document.getElementById("profile_Name")
        profileImg.innerHTML=d

function submitBtn(){
    
        getData[i-1].Mobile = mobile.value;
        getData[i-1].location= inputField.value
        getData[i-1].gender= Gender.value;
    
  
    localStorage.setItem("signUpData", JSON.stringify(getData));
       window.location.href="../pages/profile.html"
return;
}

}

function profileBtn(){
    window.location.href="../pages/profile.html"
}