const nav = document.querySelector("nav");
const box = document.querySelector(".box");
const goTop = document.querySelector("#top");

box.addEventListener('click', () => {
    nav.classList.toggle('open');
});

window.onscroll = function(){
    if(window.scrollY > 20){
        goTop.classList.add("show");
    } else {
        goTop.classList.remove("show");
    }
}