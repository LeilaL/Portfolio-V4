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
// var click = document.getElementsByClassName("screen");
//
// function cardReveal(img) {
// img.style.opacity = 0;
// var carte = img.parentNode;
//   carte.append("<div><h4>??</h4><br><br><p>???</p></div>");
// }

// $(".info").click(function() {
//   cardReveal();
// })
//
// function cardReveal() {
//   $(".cardImage").append("<div><h4>Reproduction page d'accueuil LeBonCoin</h4><br><br><p>Le site est responsive et mobile first. Avec un effet cliquable sur la map. Utilisation de bootstrap.</p></div>");
// }

//
// function masquer_div(a_masquer)
// {
//   if (document.getElementById("a_masquer").style.display == 'none') {
//        document.getElementById("a_masquer").style.display = 'block';
//   }
//   else {
//        document.getElementById("a_masquer").style.display = 'none';
//   }
// }

$(".info").mouseenter(function(){
  $(this).siblings(".a_masquer").css("display","block");
});
$(".info").mouseleave(function(){
  $(this).siblings(".a_masquer").css("display","none");
});
