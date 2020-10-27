window.onload = function(){ 
var theDiv = document.getElementById("result");
var nums = document.getElementsByClassName("buttons");
var eql = document.getElementById("equals");
var clearall = document.getElementById('clearall');
var deleteone = document.getElementById('deleteone');

for (var i = 0; i < nums.length; i++) {
  let catchValue = nums[i].innerHTML;
  let type = nums[i].id;
  nums[i].addEventListener("click", function typechar() {
    if(catchValue.includes("=") === false){    
      theDiv.innerHTML= theDiv.innerHTML + catchValue;      
    }else if(catchValue.includes("null") === false){
      theDiv.innerHTML= theDiv.innerHTML + catchValue;      
    }else{
      theDiv.innerHTML= theDiv.innerHTML
    }  
  }, false);   
  
}

eql.onclick = function(){  
  let content = theDiv.innerHTML;
  if(content.includes("?")){
    let elems = content.split("?");     
    theDiv.innerHTML = elems.reduce(
      function(a, b) { 
      if(a===null || b===null|| a==="" || b==="" || a.match(/^[a-zA-Z]+$/) || b.match(/^[a-zA-Z]+$/)){
          return document.getElementById("result").innerHTML          
        }else{
          return parseFloat(a) * parseFloat(b);}
         });
  }else if(content.includes("+")){
    let elems = content.split("+")   
    theDiv.innerHTML = elems.reduce(
      function(a, b) { 
        if(a===null || b===null|| a==="" || b==="" || a.match(/^[a-zA-Z]+$/) || b.match(/^[a-zA-Z]+$/)){
          return document.getElementById("result").innerHTML          
        }else{
          return parseFloat(a) + parseFloat(b);}
         });    
  }else if(content.includes("-")){
    let elems = content.split("-");      
      theDiv.innerHTML =  elems.reduce(
        function(a, b) { 
          if(a===null || b===null|| a==="" || b==="" || a.match(/^[a-zA-Z]+$/) || b.match(/^[a-zA-Z]+$/)){
          return document.getElementById("result").innerHTML          
        }else{
          return parseFloat(a) - parseFloat(b);}
         });      
   }else if(content.includes("?")){
    let elems = content.split("?");      
      theDiv.innerHTML =  elems.reduce(
        function(a, b) {
          if(parseFloat(b) === 0){
            return document.getElementById("result").innerHTML = "Cannot divide by zero"
          }else{            
            if(a===null || b===null|| a==="" || b==="" || a.match(/^[a-zA-Z]+$/) || b.match(/^[a-zA-Z]+$/)){
          return document.getElementById("result").innerHTML          
        }else{
          return parseFloat(a) / parseFloat(b);}
          }
        
         });       
   }
}

clearall.onclick = function(){
  theDiv.innerHTML="";
}

deleteone.onclick = function(){
  theDiv.innerHTML=theDiv.innerHTML.slice(0, -1);   
}

};
