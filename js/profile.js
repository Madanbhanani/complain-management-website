

var getData= JSON.parse(localStorage.getItem("signUpData"));
 
if(getData){
    for(i=0; i < getData.length; i++){
        var idName =document.getElementById("idName");
            idName.innerHTML = getData[i].username;  
        var idEmail =document.getElementById("idEmail");
            idEmail.innerHTML= getData[i].useremail;
        var Name =document.getElementById("Name");
            Name.innerHTML= getData[i].username;
        var Email =document.getElementById("Email");
            Email.innerHTML=getData[i].useremail;
        var Password =document.getElementById("password");
            Password.value= getData[i].password;

        var gender=document.getElementById("Gender");
        var addresLocat =document.getElementById("addresLocat")
        var mobile= document.getElementById("mobile")
       
        if(getData[i].gender === undefined ){
                gender.innerHTML=""
            }
        if(getData[i].mobile === undefined ){
                mobile.innerHTML=""
            } 
        if(getData[i].location === undefined){
                addresLocat.innerHTML=""
            }   
        
            else{
                gender.innerHTML= getData[i].gender;
                addresLocat.innerHTML= getData[i].location
                mobile.innerHTML= getData[i].Mobile
            }
            var x= getData[i].username;
            var d= x.charAt(0);
            var profileImg =document.getElementById("profileImg")
                profileImg.innerHTML=d
    }

 

function lock(){
    document.getElementById("lockOpen").style.display="block"
    document.getElementById("locked").style.display="none"
    var Password =document.getElementById("password");
    Password.setAttribute("type","text");

}
function lockOpen(){
   var open= document.getElementById("lockOpen");
      open.style.display="none";
      Password.setAttribute("type","password");

    document.getElementById("locked").style.display="block"
}
}

function editProfile(){
    window.location.href="../pages/edit Profile.html"
}
