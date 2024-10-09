

var complainGet = localStorage.getItem("complaints");
var getData=JSON.parse(localStorage.getItem("signUpData"));
var editgetIndex = localStorage.getItem("editIndex")

    // get=JSON.parse(get)
if(complainGet){
    complainGet = JSON.parse(complainGet); 
}
else{
    complainGet =[]
}
  var URL= document.getElementById("url")
  var title= document.getElementById("title")
  var desc= document.getElementById("desc")
  var date= document.getElementById("date")

  for(i=0; i< complainGet.length; i++){

   URL.value = complainGet[editgetIndex].URL;
   title.value = complainGet[editgetIndex].title;
   desc.value =complainGet[editgetIndex].desc;
   date.value =complainGet[editgetIndex].date;


}

function submitBtn(){
        complainGet[editgetIndex].URL=URL.value;
        complainGet[editgetIndex].title=title.value;
        complainGet[editgetIndex].desc=desc.value;
        complainGet[editgetIndex].date=date.value;

        localStorage.setItem("complaints", JSON.stringify(complainGet));
           window.location.href="../pages/home.html"
    
}

function back_Arrow(){
    window.location.href="../pages/home.html"
}



