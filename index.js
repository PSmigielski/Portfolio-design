const menuOpen = () => {
    document.querySelector('.nav-menu').classList.remove("close");
    document.querySelector('.nav-menu').classList.toggle("open");
    document.querySelectorAll(".nav-menu li").forEach(link => {
          link.classList.toggle("fade");
    });
}
const menuClose = ()=>{
    document.querySelector('.nav-menu').classList.remove("close");
    document.querySelector('.nav-menu').classList.toggle("open");
    document.querySelectorAll(".nav-menu li").forEach(link => {
        link.classList.remove("fade");
    });
}  
let current = 0;

const changePage = (pageNumber) =>{
    if(pageNumber == current) return false;
    const currentPage = document.querySelectorAll('.page')[current];
    const nextPage = document.querySelectorAll('.page')[pageNumber];
    const menuLinks = document.querySelectorAll('.menu-link');
    const tl = gsap.timeline({
        onStart: function(){
            menuLinks.forEach(link =>{
                link.style.pointerEvents="none";
            });
        },
        onComplete:function(){
            menuLinks.forEach(link =>{
                link.style.pointerEvents="all";
            });
        }
    });
    tl.fromTo(currentPage,0.3, {translateX: '0%'},{translateX:'-100%'},'-=0.3')
    .fromTo(nextPage,0.5, {translateX: '-100%'},{translateX:'0%'});
    current = pageNumber;
} 
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link, index) =>{
    link.addEventListener('click', () =>{
        menuClose();
        changePage(index);
    });
});