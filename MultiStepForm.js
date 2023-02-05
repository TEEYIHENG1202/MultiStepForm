var x = document.querySelectorAll("[type='button'],[type='submit']");
var f = document.querySelector("form");
var input = document.querySelectorAll("input");
var page = document.querySelectorAll(".page");
var progress = document.querySelectorAll("span");

var i =0;
while(i<x.length)
{
    x[i].addEventListener("click",function(event){
      process(event);
    }
    )
    i++;
}

function valueChange(event)
{
   if(document.querySelector(".fname").value!="" && document.querySelector(".lname").value!="")
   {
      document.querySelector(".next1").disabled=false;
   }
   else
   {
      document.querySelector(".next1").disabled=true;
   }

   if(document.querySelector(".email").value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && document.querySelector(".phone").value.match(/^\d{3}[-]{1}\d{7}$/))
   {
      document.querySelector(".next2").disabled=false;
   }
   else
   {
      document.querySelector(".next2").disabled=true;
   }
   
   if(document.querySelector(".accountEmail").value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && document.querySelector(".password").value.match(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/))
   {
      document.querySelector(".submit").disabled=false;
   }
   else
   {
      document.querySelector(".submit").disabled=true;
   }
}

function process(event)
{
   if(event.target.classList.contains("next1"))
      {
         f.style.marginLeft=-100+"%";
         progress[1].style.border="red solid 3px";
      }
      else if(event.target.classList.contains("next2"))
      {
         f.style.marginLeft=-200+"%";
         progress[2].style.border="red solid 3px";
      }
      else if(event.target.classList.contains("prev1"))
      {
         f.style.marginLeft=0+"%";
         progress[1].style.border="black solid 3px";
      }
      else if(event.target.classList.contains("prev2"))
      {
         f.style.marginLeft=-100+"%";
         progress[2].style.border="black solid 3px";
      }
}