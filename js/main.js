// ************ SLIDER ***************
// var index = 0;
// var carousel = document.getElementsByClassName("images");
//
// setInterval(before,2700);
//
// function slider () {
// carousel[index].style.display = -1;
// if (index==3){
//   index=0;
//   carousel[index].style.zIndex = 1;
// }
// else {
//   index++;
//   carousel[index].style.zIndex = 1;
// }
// }
//
// function before() {
//   carousel[index].style.zIndex = -1;
//   if (index==0){
//     index=3;
//     carousel[index].style.zIndex = 1;
//   }
//   else {
//     index--;
//     carousel[index].style.zIndex = 1;
//   }
// }


// ************ CARDS REVEAL ***************

$(".info").click(function(){
  if (window.matchMedia("(max-width: 992px)").matches) {
      /* The viewport is less than, or equal to, 992 pixels wide */
        alert("test smartphone");
        if($(".a_masquer").css("display") == "none"){
          $(this).siblings(".a_masquer").css("display","block");
        }
        else{
          $(this).siblings(".a_masquer").css("display","none");
        }
  }
});


// if (window.matchMedia("(min-width: 993px)").matches) {
//     /* The viewport is greater than 992 pixels wide */
//
//     $(".info").mouseenter(function(){
//       $(this).siblings(".a_masquer").css("display","block");
//     });
//
//     $(".info").mouseleave(function(){
//       $(".screen").mouseleave(function(){
//         $(this).siblings(".a_masquer").css("display","none");
//       });
//     });
//
//     $(".a_masquer").mouseenter(function(){
//       $(".a_masquer").mouseleave(function(){
//         $(this).css("display","none");
//       });
//     });
// }


// if (screen.width < 768) {
//   $("#lien1").attr("data-toggle","collapse");
//   $("#lien1").attr("data-target",".navbar-collapse");
//   $("#lien2").attr("data-toggle","collapse");
//   $("#lien2").attr("data-target",".navbar-collapse");
//   $("#lien3").attr("data-toggle","collapse");
//   $("#lien3").attr("data-target",".navbar-collapse");
// }


// $(".info").hover(function(){
//     $(this).siblings(".screen").css("opacity", 1);
//     $(this).siblings(".screen").css("-webkit-filter", "none");
//     }
//
// $(".info").mouseleave(function(){
//       $(this).siblings(".screen").css("filter", "grayscale(100%)");
// });
