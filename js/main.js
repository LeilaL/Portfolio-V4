// ************ CARDS REVEAL ***************

var clicked = false;

$(".info").click(function(){
  if (window.matchMedia("(max-width: 992px)").matches) {
            if($(this).siblings(".a_masquer").css("display") == "none"){
              $(this).siblings(".a_masquer").css("display","block");
            }
            else{
              $(this).siblings(".a_masquer").css("display","none");
            }
  }
});

  if (window.matchMedia("(min-width: 993px)").matches) {

    var onAmasquer = false;


    $(".info").mouseenter(function(){
      $(this).siblings(".a_masquer").css("display","block");
    });

    $(".screen").mouseleave(function(){

          $(".a_masquer").mouseleave(function(){
            $(this).css("display","none");
          });

        $(".a_masquer").mouseenter(function(){
          $(this).css("display","block");
        });


    });
  }
