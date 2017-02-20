/*function closeFunc() {
        var close = document.getElementById('popup');
        close.style.display = "none";
}
 setTimeout(function() { 
        document.getElementById("popup").style.display = "block";}, 6000);
  
*/


function hide(evt) {
  var mainBlock = evt.closest(".product-item");
  mainBlock.children[0].style.display = "block";

  setTimeout(function() { 
    mainBlock.style.display = "none";}, 1000);
}





/*function dismiss(){
      var blocks = document.getElementsByClassName('checkbox');

for(var i = 0; i < blocks.length; i++){
  blocks[i].parentNode.style.display='none';
}
};*/

/*
function hide(e){
  e.currentTarget.style.display = "hidden";
  // When this function is used as an event handler: this === e.currentTarget
}

var blocks = document.getElementsByClassName("product-item");

for(var i = 0; i < blocks.length; i++){
  blocks[i].addEventListener('click', hide, false);
} */


/*function click() {
var cbs = document.querySelectorAll('input[type=checkbox]');
  for(var i = 0; i < cbs.length; i++) {
    cbs[i].addEventListener('change', function() {
      if(this.checked) {
        document.getElementsByClassName("cover-block").style.display = "block";
      } else {
        document.getElementsByClassName("cover-block").style.display = "none";
      }
    });
  }
}*/