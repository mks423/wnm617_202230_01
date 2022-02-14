

this.textPreview = function(){
  xOffset = 200;
  yOffset = 60;

  $('.txt').hover(function(e){
    this.t = this.title;
    this.title = "";
    // let c = (this.t != "")? "<br/>" + this.t:"";
    $("body").append("<p id="+$("#txt"+this.id).val()+">"+"</p>");
    $("#preview")
    // .css("top",(e.pageY - xOffset) + "px")
    // .css("left",(e.pageX - yOffset) + "px")
    // .fadeIn("fast");
  },
  function(){
    this.title = this.t;
    $("#preview").remove();
  });
  $(".txt").mousemove(function(e){
  // $("#preview")
  // .css("top",(e.pageY - xOffset) + "px")
  // .css("left",(e.pageX - yOffset) + "px")
  });
};



<!-- </div>    <div class="paragraph1">
<h1>Hello! <span id="0" class="preview wnm underline">WNM</span><span class="ixd gradation"> IxD </span> 617 class👋🏻, I am <span class="outline"">Kyung Seok</span>
    or <span id="1" class="preview">David</span>. I was born and raised in <a id="3" class="preview" href="https://en.wikipedia.org/wiki/Gyeonggi_Province" target="_blank">Gyeonggi</a>, South Korea🇰🇷, and currently living in <a href="https://en.wikipedia.org/wiki/Watsonville,_California" target="_blank" id="4" class="preview">Watsonville</a>, California. 
<div class="paragraph2">
<h6>I majored in visual/product design, and have worked in an <span id="2" class="preview">automobile UX</span> company in Korea.</h6>
</div>

<div class="paragraph3"><h6>I am excited to have this class. I am totally a <span id="5" class="preview">beginner🐣</span> at coding, but after I had two classes over the last two semesters, I really got into code. </h6></div>

<div class="paragraph4"> <h6>I am looking for making cool websites or kinds of stuff like hamilton's. I was impressed by his work. I am driven and inspired by big bold, clean designs. I'd like to go get inspired these cool website such as awwwards, cssdesignawards. I love music, especially Jazz, I have been playing electric guitar🎸 for 15years. I LOVE Jazz piano🎹 as well. Fortunately, I had a chance to play with the pianist I loved after I came here. it was such a blessing time for me. if I have more time, I would like to produce cool music, practice cool 3D design makes typefaces, learn more about photography. my recent interest is MBTI, I assume most of you already know, it was very popular in the past, but I am slow for this kind of stuff. Apparently, I am ISTJ, and check this website for fun, it is pretty precise, (just ignore that my type is unadaptable like every grand-grandfathers.) I am writing too much. Nice to meet you, everyone. I hope everyone achieves their goal through this course.👋🏻</h6></div> 

</div> -->
