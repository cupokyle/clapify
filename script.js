$(document).ready(function(){
  $("#pop-message").hide();

  function clapWords(string) {
    const splitString = string.split(" ");
    let solution = [];
    splitString.forEach((word) => {
      solution.push(word);
      solution.push('👏')
    })
    return solution.join(" ");
  }
  $("#clapify").on("click", () => {
    let myString = $(".user-input").val();
    $("#myOutput").val((clapWords(myString)));
  })

  $("#copyButton").on("click", () => {
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
  )
})




