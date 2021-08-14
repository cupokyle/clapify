$(document).ready(function(){
  $("#pop-message").hide();

})

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("myOutput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  $("#pop-message").fadeIn( 400 ).delay( 800 ).fadeOut( 400 );

}
