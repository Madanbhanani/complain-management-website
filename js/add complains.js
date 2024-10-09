

var complainGet = localStorage.getItem("complaints");
var getData=JSON.parse(localStorage.getItem("signUpData"));
var getU_Name=JSON.parse(localStorage.getItem("UserLoginName"));

if(complainGet){
    complainGet = JSON.parse(complainGet); 
}
else{
    complainGet =[]
}


function submitBtn(){

    var URL= document.getElementById("url").value 
    var title= document.getElementById("title").value
    var desc= document.getElementById("desc").value
    var date= document.getElementById("date").value

    if(date === ""){
        document.getElementById("error").innerHTML="Enter Date"
        setTim()
    }
    if(desc === ""){
        document.getElementById("error").innerHTML="Enter complaints Descprtion"
        setTim()
    }
    if(URL === ""){
        document.getElementById("error").innerHTML="Enter complaints Image URL!"
        setTim()
    }
    if(title === ""){
        document.getElementById("error").innerHTML="Enter complaints Title!"
        setTim()

    }
    if(date !== "" && desc !== "" && title !== "" && URL !== ""){

        var  Data= complainGet.unshift({
            complainBy:getU_Name,
            URL : URL,
            title : title,
            desc: desc,
            date:date
         })
           localStorage.setItem("complaints", JSON.stringify(complainGet));
           window.location.href="../pages/home.html"
    }
}

function back_Arrow(){
    window.location.href="../pages/home.html"
}

function setTim(){
    setTimeout(
        function(){
            document.getElementById("error").innerHTML="";
        },
        2000
    )
}