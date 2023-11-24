 // Get the button and icon elements
 var btn = document.getElementById("like-btn");
 var icon = document.getElementById("like-icon");

 // Add a click event listener to the button
 btn.addEventListener("click", function() {
   // Toggle the liked class on the icon
   icon.classList.toggle("fa-liked");
    // Check if the icon has the liked class
    if (icon.classList.contains("fa-liked")) {
        // The icon is liked, perform the desired action
        // For example, send a request to the server to update the number of likes
        // Or, store the user's preference in the local storage
        console.log("You liked this page!");
      } else {
        // The icon is not liked, perform the desired action
        // For example, send a request to the server to undo the update of the number of likes
         // Or, remove the user's preference from the local storage
         console.log("You unliked this page!");
        }
      });

      var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}