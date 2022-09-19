const navbar = document.querySelector(".navbar");
const up_arrow = document.querySelector(".up-arrow");
const toggle = document.querySelector(".toggle i");
const navbarmenu = document.querySelector(".navbar-menu");

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 450){
        navbar.classList.add("fixed", "animate__fadeInDown");
    }else{
        navbar.classList.remove("fixed");
        navbar.classList.remove("animate__fadeInDown");
    }

    if(window.scrollY>=800){
        up_arrow.style.opacity = "1";
    }else{
        up_arrow.style.opacity = "0";
    }
})


up_arrow.addEventListener("click",()=>{
    window.scrollTo(0,0);
    // window.scrollTo({top:0, behavior: "smooth"});
})

toggle.addEventListener("click", ()=>{
    navbarmenu.classList.toggle("active");
    toggle.classList.toggle("fa-xmark");
})