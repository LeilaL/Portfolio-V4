// ************ SLIDER ***************
var index = 0;
var carousel = document.getElementsByClassName("images");

setInterval(before,2700);

function slider () {
carousel[index].style.display = -1;
if (index==3){
  index=0;
  carousel[index].style.zIndex = 1;
}
else {
  index++;
  carousel[index].style.zIndex = 1;
}
}

function before() {
  carousel[index].style.zIndex = -1;
  if (index==0){
    index=3;
    carousel[index].style.zIndex = 1;
  }
  else {
    index--;
    carousel[index].style.zIndex = 1;
  }
}


// ************ CARDS ***************

$(".info").mouseenter(function(){
  $(this).siblings(".a_masquer").css("display","block");
  // $(".a_masquer").css("display","block");
});
$(".screen").mouseleave(function(){
  $(this).siblings(".a_masquer").css("display","none");
});
