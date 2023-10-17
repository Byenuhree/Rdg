const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const arrowUp = document.querySelector(".arrow-up");


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-links").forEach(n => {
  return n.
    addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
})

window.addEventListener("scroll", ()=> {
  if(window.pageYOffset > 100){
    arrowUp.classList.add("active")
  } else {
    arrowUp.classList.remove("active");
  }
})