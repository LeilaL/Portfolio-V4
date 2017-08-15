var index = 0;
var carousel = document.getElementsByClassName("images");

setInterval(before,2500);

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
