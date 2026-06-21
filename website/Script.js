
//JavaScript for footer scrollbar
window.addEventListener("scroll", function() {
 var footer = document.querySelector(".footer");
var scrollPosition = window.pageYOffset;
  
if (scrollPosition > 0) {
  footer.classList.remove("slide-down");
  } else {
  footer.classList.add("slide-down");
}
});


// JavaScript for popup msg

let popup = document.getElementById("popup");
function openPopup()
{ popup.classList.add("open-popup");}

function closePopup()
{ popup.classList.remove("open-popup");}
