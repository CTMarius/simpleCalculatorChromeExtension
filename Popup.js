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
    }else{
      theDiv.innerHTML= theDiv.innerHTML
    }  
  }, false);
}

eql.onclick = function(){  
  let content = theDiv.innerHTML;
  if(content.includes("x")){
    let elems = content.split("x");   
    theDiv.innerHTML = elems.reduce(function(a, b) { return parseInt(a) * parseInt(b); });      
  }else if(content.includes("+")){
    let elems = content.split("+")   
    theDiv.innerHTML = elems.reduce(function(a, b) { return parseInt(a) + parseInt(b); });     
  }else if(content.includes("-")){
    let elems = content.split("-");      
      theDiv.innerHTML =  elems.reduce(function(a, b) { return parseInt(a) - parseInt(b); });      
   }else if(content.includes("/")){
    let elems = content.split("/");      
      theDiv.innerHTML =  elems.reduce(function(a, b) { return parseInt(a) / parseInt(b); });       
   }
}

clearall.onclick = function(){
  theDiv.innerHTML="";
}

deleteone.onclick = function(){
  theDiv.innerHTML=theDiv.innerHTML.slice(0, -1);    
}
};
