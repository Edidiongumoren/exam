const menuBar = document.querySelector(".menu-bar");
const sideBar = document.querySelector(".side-bar");
const closeSideBar = document.querySelector(".close-side-bar");

menuBar.addEventListener('click', ()=> {
  sideBar.style.display = "flex";
})

closeSideBar.addEventListener('click', ()=> {
  sideBar.style.display = "none";
})

