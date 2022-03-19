
$(() => {
   checkUserId();

   // EVENT DELEGATION
   $(document)

   // FORM SUBMISSIONS
   .on("submit", "#signin-form", function(e) {
      e.preventDefault();
      checkLoginForm();
   })


   // CLICKS
   .on("click", ".js-logout", function() {
      sessionStorage.removeItem("userId");
      checkUserId();
   })


   // ACTIVATE TOOLS
   .on("click", "[data-activate]", function() {
      let target = $(this).data("activate");
      $(target).addClass("active")
   })
   .on("click", "[data-deactivate]", function() {
      let target = $(this).data("deactivate");
      $(target).removeClass("active")
   })
   .on("click", "[data-toggle]", function() {
      let target = $(this).data("toggle");
      $(target).toggleClass("active")
   })
   .on("click", "[data-activateone]", function() {
      let target = $(this).data("activateone");
      $(target).addClass("active")
         .siblings().removeClass("active")
   })

   ;

   $("[data-template]").each(function(){
      let target = $(this).data("template");
      $(this).html($(target).html())
   });

   [,"#home-page","#step-page","#analysis-page"].forEach((p,i)=>{
      if(window.location.hash === p) {
         console.log($(".nav-icon-set li"))
         $(`.nav-icon-set li:nth-child(${i})`).addClass("active");
      }
   });

});

//  Signup - Birthday

 $(document).ready(function(){            
   var now = new Date();
   var year = now.getFullYear();
   var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1); 
   var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());           
   //Year
   for(var i = 1900 ; i <= year ; i++) {
       $('#year').append('<option value="' + i + '">' + i + '</option>');    
   }

   //Month           
   for(var i=1; i <= 12; i++) {
       var mm = i > 9 ? i : "0"+i ;            
       $('#month').append('<option value="' + mm + '">' + mm + '</option>');    
   }
   
   //Day
   for(var i=1; i <= 31; i++) {
       var dd = i > 9 ? i : "0"+i ;            
       $('#day').append('<option value="' + dd + '">' + dd+ '</option>');    
   }
   $("#year  > option[value="+year+"]").attr("selected", "true");        
   $("#month  > option[value="+mon+"]").attr("selected", "true");    
   $("#day  > option[value="+day+"]").attr("selected", "true");       
 
})

//Birthday dropdown Code Reference: https://jh91.tistory.com


