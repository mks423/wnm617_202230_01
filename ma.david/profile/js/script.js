// https://blog.naver.com/sanmandii/220839280039

this.imagePreview = function(){
  xOffset = 200;
  yOffset = 60;

  $('.preview').hover(function(e){
    this.t = this.title;
    this.title = "";
    // let c = (this.t != "")? "<br/>" + this.t:"";
    $("body").append("<p id='preview'><img src='"+$("#pics"+this.id).val() +"'alt='image preview' width=400px;' />"+"</p>");
    $("#preview")
    // .css("top",(e.pageY - xOffset) + "px")
    // .css("left",(e.pageX - yOffset) + "px")
    // .fadeIn("fast");
  },
  function(){
    this.title = this.t;
    $("#preview").remove();
  });
  $(".preview").mousemove(function(e){
  // $("#preview")
  // .css("top",(e.pageY - xOffset) + "px")
  // .css("left",(e.pageX - yOffset) + "px")
  });
};

$(document).ready(function(){
  imagePreview();
});

