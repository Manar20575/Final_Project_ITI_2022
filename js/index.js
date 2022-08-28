
// Close the dropdown menu if the user clicks outside of it
function myFunction() {
  document.getElementById("nav-dis").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('#nav-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('nav-display')) {
        openDropdown.classList.remove('nav-display');
      }
    }
  }
}
//change navbar color when scroll
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 1000) {
          $(".navbar").css("background" , "");
          $(".navbar-logo").css("color" , "rgba(255, 255, 255, 0.7)");
          $(".nav a").css("color" , "black");
        }
        else{
          $(".navbar").css("background" , " black");
          $(".nav a").css("color" , " white");
        }
    })
  })
  // nt work
  $(document).ready(function() {
    'use strict';
    window.addEventListener('load', function() {
      
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          var inp = sdocument.getElementById("username")
          if (form.checkValidity() === false && inp.length < 3  ) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })
  // if char < 3 then ask to input more than it
  // and this idk why *-* 
  var str = document.getElementById('invalid-feedback')
  var inp = document.getElementById("username")
  document.getElementById("submit").addEventListener("click",
    function validate(){
      console.log(inp.length);
      if(inp.length < 3){
        str.classList.add('nav-display')
      }
    });
