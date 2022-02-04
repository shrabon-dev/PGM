var in__putName = document.querySelector(".nm")
var in__putAge = document.querySelector(".ag")
var buton = document.querySelector(".btn")
var txt = document.querySelector(".h1")
var outPut__age = 16
var named = ['Shrabon','Shahin','Shamim','Tipti','Tota']


buton.addEventListener("click",function(){
   for(var i = 0; i<named.length; i++){
      if((in__putName.value) && in__putAge.value>=outPut__age){
          txt.innerHTML="Yes you can take vaccine for Covid19 " + in__putName.value;
          txt.style.color= "#e45b01"
          break;
       }else{
         txt.innerHTML="Sorry, you can't take vaccine for Covid19 " + in__putName.value;
         txt.style.color= "#d30000"
          
       }
  }
})


