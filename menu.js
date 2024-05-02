document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul.menu li a");
    const menu = document.querySelector("nav ul.menu");
  
   
    menuItems.forEach(item => {
      item.addEventListener("click", function() {
        
        menu.classList.remove("active");
      });
    });
  
    const menuBtn = document.querySelector(".menu-btn");
  
    menuBtn.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
  });
  