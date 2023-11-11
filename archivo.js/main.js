// menu desplegable

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click" , function (){
    menu.classList.toggle("mostrar")
})

//submenu desplegable

const submenuBtn = document.querySelectorAll(".submenu-btn");
for (let i=0; i < submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;
            
            if (submenu.classList.contains("desplegar")) {
                submenu.classList.remove("desplegar");
                submenu.removeAttribute("style");                

            }else{
                submenu.classList.add("desplegar");
            submenu.style.height = height + "px"
            }

        }
    })
}


// slider de noticas y sobre nosotros 

(function(){
    const sliders = [...document.querySelectorAll(".slider__body")];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector(".slider__body.slider__body--show").dataset.id);

        value = currentElement;
        value += change;
        if(value === 0 || value === sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders.forEach((slider) => {
            slider.classList.remove('slider__body--show');
        });
        sliders[value-1].classList.add('slider__body--show');
    }
})();

// slider chicos //


document.getElementById('sig').onclick = function (){
    let lists = document.getElementsByClassName('item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function (){
    let lists = document.getElementsByClassName('item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}




//scroll reveal

let animado = document.querySelectorAll(".animado");
let previousScrollTop = 0; 

function mostraScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;

        
        let isInViewport = alturaAnimado - 600 < scrollTop && scrollTop < alturaAnimado + animado[i].offsetHeight;

       
        if (scrollTop > previousScrollTop && isInViewport) {
            animado[i].classList.add("mostrarLados");
        } else {
            animado[i].classList.remove("mostrarLados");
        }
    }

   
    previousScrollTop = scrollTop;
}

window.addEventListener("scroll", mostraScroll);


let animado2 = document.querySelectorAll(".animado2");
let previousScrollTop2 = 0; 

function mostraScroll2() {
    let scrollTop2 = document.documentElement.scrollTop;

    for (let i = 0; i < animado2.length; i++) {
        let alturaAnimado2 = animado2[i].offsetTop;

        let isInViewport = alturaAnimado2 - 800 < scrollTop2 && scrollTop2 < alturaAnimado2 + animado2[i].offsetHeight;

        if (scrollTop2 > previousScrollTop2 && isInViewport) {
            animado2[i].classList.add("mostrarLados1");
        } else {
            animado2[i].classList.remove("mostrarLados1");
        }
    }

    previousScrollTop2 = scrollTop2;
}

window.addEventListener("scroll", mostraScroll2);
