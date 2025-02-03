const nav = document.querySelector("nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const goTop = document.querySelector("#top");
const navs = document.querySelectorAll(".nav");

navs.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.add("hidden");
  });
})

open.addEventListener('click', () => {
  nav.classList.remove("hidden");
});

close.addEventListener('click', () => {
  nav.classList.add("hidden");
});

window.onscroll = function() {
  if (window.scrollY > 20) {
    goTop.classList.add("show");
  } else {
    goTop.classList.remove("show");
  }
}

window.addEventListener("resize", function() {
  if (document.body.clientWidth > 780) {
    nav.classList.remove('open');
  }
});
