var inpTo = document.getElementById("inpTo"),
    inpFrom = document.getElementById("inpFrom"),
    mymsg = document.getElementById("mymessage"),
    inpBg = document.getElementById("bgImg"),
    addToButton = document.getElementById("addToGallery"),
    saveButton = document.getElementById("saveArr"),
    loadButton = document.getElementById("loadArr"),
    postArr = [];


var dispTo = document.getElementById("to"),
    dispFrom = document.getElementById("from"),
    dispMsg = document.getElementById("message"),
    postDiv = document.getElementById("postcard"),
    previewDiv = document.getElementById("preview");

var selection = 1;


inpTo.addEventListener("keyup", function(){
    
    
    dispTo.innerHTML = "To "+inpTo.value;
})


inpFrom.addEventListener("keyup", function(){
    
    
    dispFrom.innerHTML = "From "+inpFrom.value;
})


mymsg.addEventListener("keyup", function(){
    
    
    dispMsg.innerHTML = mymsg.value;
})


inpBg.addEventListener("keyup", function(event){
    
    if(event.keyCode == 13){
        console.log(event.keyCode);
                
        console.log(this.value);

        
         if(this.value == "auto"){
           
                   console.log("i am in");
           
           
             if(selection == 1){
                    document.getElementById("postcard").style.backgroundImage = 'url("imgs/auto1.jpg")';
            selection++;

             } else if(selection ==2){
                   document.getElementById("postcard").style.backgroundImage = "url('imgs/auto2.jpg')";


            selection++;
          } else if(selection ==3){

                     document.getElementById("postcard").style.backgroundImage = "url('imgs/auto3.jpg')";


            selection = 1;
          } else if(this.value==""){

              document.getElementById("postcard").style.backgroundImage = "url('imgs/default.png')";

        } else {
                  postDiv.style.backgroundImage = "url("+inpBg.value+")";

        }
    
    }
    
  }
})


addToButton.addEventListener("click", function(){
    
      var obj = {
        
        bgimg :inpBg.value,
        to :inpTo.value, 
        message :mymsg.value,
        from :inpFrom.value
    }
    
    postArr.push(obj);
  console.log(postArr);
  
  
      createPostcard(inpTo.value, inpBg.value);
                      
})

function createPostcard (to, bgImg){
   var miniCard = document.createElement("div");
    var miniName = document.createElement("div");
    
    miniName.setAttribute("class", "miniName");
    miniName.innerHTML = to;
    miniCard.setAttribute("class", "miniDiv");
    miniCard.style.backgroundImage = "url("+bgImg+")";
  
  
  
    miniCard.appendChild(miniName);
    previewDiv.appendChild(miniCard);
  
}

saveButton.addEventListener("click", function(){
  
  
    var mypostcards = JSON.parse(localStorage.getItem("postcards"));
  

      for(var i=0; i<postArr.length; i++){
        
                var obj = {
        
        bgimg :postArr[i].bgimg,
to :postArr[i].to,
message :postArr[i].message,
from :ipostArr[i].from,
    }
    
            mypostcards.push(obj);

      }
  

    localStorage.setItem("postcards",  JSON.stringify(mypostcards));

  
})


loadButton.addEventListener("click", function(){
  
    previewDiv.innerHTML = "";

    var mypostcards = JSON.parse(localStorage.getItem("postcards"));
    
    for (var i=0; i<mypostcards.length; i++){
      
      createPostcard(mypostcards[i].to, mypostcards[i].bgimg);
    }

  
})


