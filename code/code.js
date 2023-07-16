/* function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } */
  window.onload = function () {
    window.addEventListener('scroll', function (e) {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  
    const menu_btn = document.querySelector('.iconn22');
    const mobile_menu = document.querySelector('.mobielnav');
  
    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    })}