

function ComplaintsAdd(){
      window.location.href="../pages/add complains.html"
}

var SaveComplants=document.getElementById("SaveComplants");
var getComplaint=JSON.parse(localStorage.getItem("complaints"));
var getU_Name=JSON.parse(localStorage.getItem("UserLoginName"));


for(i=0; i < getComplaint.length; i++){

   var container= document.createElement("div");
       container.setAttribute("class","containerComplaints");
       
   var rowCon=document.createElement("div");
       rowCon.setAttribute("class", "rowCon");

   var left= document.createElement("div");
       left.setAttribute("class","left");
   var img= document.createElement("img");
       img.setAttribute("src", getComplaint[i].URL);
       img.setAttribute("class", "imgURL");

   var right= document.createElement("div");
       right.setAttribute("class","right");

       
       right.innerHTML=`<h4>Title: ${getComplaint[i].title} <h4> 
          <h6>complain By: ${getComplaint[i].complainBy} <h6>
          <h6>Date: ${getComplaint[i].date} <h6>  <h6>status: Active</h6>`

   var DescCon =document.createElement("div");
       DescCon.setAttribute("class","DescCon")
       DescCon.innerHTML= `<h6> ${getComplaint[i].desc}<h6>`

   var btnCon=document.createElement("div");
       btnCon.setAttribute("class","btnCon");

    var EditBtn= document.createElement("button");
        EditBtn.setAttribute("id","editBtn");
        EditBtn.innerHTML="Edit"
        EditBtn.setAttribute("onclick",` editfun(${i})`)

    var DeleteBtn= document.createElement("button");
        DeleteBtn.setAttribute("id","deleteBtn");
        DeleteBtn.innerHTML="Delete"
        DeleteBtn.setAttribute("onclick",`deletefun(${i})`);
        
        if(getU_Name === getComplaint[i].complainBy ){
            btnCon.append(EditBtn,DeleteBtn);
        }

        left.appendChild(img)
        rowCon.append(left,right)
        container.appendChild(rowCon)
        container.appendChild(DescCon);
        container.appendChild(btnCon)
        SaveComplants.appendChild(container);


        function deletefun(pera1){
           var win_Conform= window.confirm("do you want Delete!");
            if(win_Conform === true){
                getComplaint.splice(pera1,1);
                console.log(getComplaint)
                 localStorage.setItem("complaints", JSON.stringify(getComplaint));
                window.location.reload();
            }
            return;

        }

        function editfun(pera2){
           var editIndex= pera2;
           localStorage.setItem("editIndex", editIndex);
           window.location.href="../pages/edit comlains.html";
           return;
        }

    }







