//
// .previousElementSibling
//

function myFunction() {
    var x = document.getElementById("item2").previousElementSibling.innerHTML; 
    document.getElementById("potato").innerHTML = x;
  }