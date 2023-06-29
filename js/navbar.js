window.addEventListener('scroll', function() {
    var navbar = document.getElementById('myNavbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar');
    } else {
      navbar.classList.remove('navbar');
    }
  });
  
  