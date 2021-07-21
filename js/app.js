let animate = new Typed('#ani', {
    strings: ["Front End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

let animate2 = new Typed('#ani2', {
    strings: ["Front End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

const sidenav = document.getElementById("sidenav");
const menubar = document.getElementById("menubar");
sidenav.style.width = 0;
menubar.onclick = function () {
    if(sidenav.style.width == '0px') {
        sidenav.style.width = '150px';
    } else {
        sidenav.style.width = '0px';
    }
};

