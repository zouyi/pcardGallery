var inpTo = document.getElementById("inpTo"),
    inpFrom = document.getElementById("inpFrom"),
    mymsg = document.getElementById("mymessage"),
    inpBg = document.getElementById("bgImg"),
    addToButton = document.getElementById("addToGallery"),
    saveButton = document.getElementById("saveArr"),
    loadButton = document.getElementById("loadArr"),
    postArr = [],
    bgURL,
    autoMode = 0,
    arrInd = 0;


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
        //console.log(event.keyCode);
                
       // console.log(this.value);

        
         if(this.value == "auto"){
           
           autoMode = 1;
           
             if(selection == 1){
                    document.getElementById("postcard").style.backgroundImage = 'url("imgs/auto1.jpg")';
                    bgURL = 'url("imgs/auto1.jpg")';
               
               
            selection++;

             } else if(selection ==2){
                   document.getElementById("postcard").style.backgroundImage = "url('imgs/auto2.jpg')";
                    bgURL = 'url("imgs/auto2.jpg")';


            selection++;
          } else if(selection ==3){

                     document.getElementById("postcard").style.backgroundImage = "url('imgs/auto3.jpg')";
                      bgURL = 'url("imgs/auto3.jpg")';
            selection = 1;
          }

        } else if(this.value==""){

              document.getElementById("postcard").style.backgroundImage = "url('imgs/default.png')";
                     autoMode =0;

        
        }else {
            postDiv.style.backgroundImage = "url("+inpBg.value+")";
          
              autoMode =0;


        }
    
    }
    
  })


addToButton.addEventListener("click", function(){
    
  //console.log(autoMode);
  var bgInput;
    if(autoMode == 1){
      bgInput = bgURL;
      
      
    } else {
      
      if(inpBg.value == ""){
        
        bgInput = "url('imgs/default.png')";
      } else {
        
        bgInput = inpBg.value;

      }
    }
    
    
  console.log("bginput"+bgInput);
  
    var obj = {
        
        bgimg :bgInput,
        to :inpTo.value, 
        message :mymsg.value,
        from :inpFrom.value
    }
    
    postArr.push(obj);
  console.log(postArr);
  
  
      createPostcard(inpTo.value, bgInput, inpFrom.value,mymsg.value);
                      
})

function createPostcard (to, bgImg, from, msg){
   var miniCard = document.createElement("div");
    var miniName = document.createElement("div");
  
    miniName.setAttribute("class", "miniName");
    miniName.innerHTML = to;
    miniCard.setAttribute("class", "miniDiv");
    
    miniCard.addEventListener("click", function(){
       dispTo.innerHTML = to;
  dispFrom.innerHTML =from;
  dispMsg.innerHTML = msg;
      
          if(bgImg.slice(0, 3)=="url"){
        
            postDiv.style.backgroundImage = bgImg;

      } else {

          postDiv.style.backgroundImage =  "url("+bgImg+")";

        
        
      }
    }); 
  
  //console.log("bgImg is"+bgImg);
      if(bgImg.slice(0, 3)=="url"){
        
            miniCard.style.backgroundImage = bgImg;

      } else {

          miniCard.style.backgroundImage =  "url("+bgImg+")";

        
        
      }


    miniCard.appendChild(miniName);
    previewDiv.appendChild(miniCard);
  
}

saveButton.addEventListener("click", function(){
      
      localStorage.setItem('postcards', JSON.stringify(postArr));

  
})


loadButton.addEventListener("click", function(){
  
    previewDiv.innerHTML = "";

    postArr = JSON.parse(localStorage.getItem("postcards"));
    
    for (var i=0; i<postArr.length; i++){
      console.log(postArr[i].to);
      createPostcard(postArr[i].to, postArr[i].bgimg,  postArr[i].from,postArr[i].message);
    }

  
})


