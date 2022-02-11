const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');

burger.addEventListener('click' , ()=>{
    nav.classList.toggle('nav-active');

    navLink.forEach((link, index) =>{ 
        if(link.style.animation){
            link.style.animation = ''
        }
        else{
        link.style.animation = `navAppear 0.5s ease forwards ${index / 7 + 1}s`; 
    }
    
    });

    burger.classList.toggle('toggle');

});
document.onclick = function(e){
    if(e.target.id == navLink){
        nav.classList.remove('nav-active');
    }

};

}

navSlide();

var lastscrollTop = 0;
navbar = document.getElementById("header");
window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
        if(scrollTop > lastscrollTop){
            header.style.top = "-100px";
        }
        else{
            header.style.top = "0";
        }
        lastscrollTop = scrollTop
})

document.getElementById("header").style.transition = "all 0.7s";


