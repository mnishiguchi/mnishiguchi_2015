/*
  The scripts for Masatoshi Nishiguchi's personal web site

  Filename: main.jp
  Author:   Masatoshi Nishiguchi
  Date:     October 25, 2015
*/


// Ensure that DOM has already been loaded
document.addEventListener('DOMContentLoaded', function() {
  /*
   * 1. Add click listener to all the menu items
   * 2. Toggle the class on click events
   * 3. Reset the scroll position to (0, 0)
   */
  [].forEach.call( document.querySelectorAll( '.sliderList div' ), function ( aDiv ) {
      aDiv.addEventListener( 'click', function () {
          aDiv.classList.toggle('show-description');
          aDiv.getElementsByTagName("P")[0].scrollTop = 0;
      }, false );
  });
});
// jQuery equivalent
// $(".sliderList div").on("click", function() {
//   $(this).toggleClass("show-description");
// });


/**
 * Opens the default email program with title, address and message prefilled.
 */
function sendEmail() {
  window.location.href = "mailto:nishiguchi.masa@gmail.com"
    + "?cc=masatoshi.nishiguchi@udc.edu"
    + "&subject=" + escape("Hello, Masa!")
    + "&body=" + escape(document.getElementById('message-to-masa').value)
  ; // end window.location.href
}

/**
 * Clear the text in the textarea.
 */
function clearMsg() {
  document.getElementById('message-to-masa').value = "";
}

// Ensure that DOM has already been loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add the click listener to send message button
  document.getElementById("btn-send-message").addEventListener("click", sendEmail, false);
  document.getElementById("btn-clear-message").addEventListener("click", clearMsg, false);
});
