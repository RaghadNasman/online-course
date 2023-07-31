let openIcon = document.querySelector(".open");
let closeIcon = document.querySelector(".close");
let res = document.querySelector(".res-nav")
openIcon.onclick = function () {
    res.classList.toggle("show")
    openIcon.classList.toggle("hide")
    closeIcon.classList.toggle("hide")
}
closeIcon.onclick = _ => {
    res.classList.toggle("show")
    openIcon.classList.toggle("hide")
    closeIcon.classList.toggle("hide")
}
// let aClick = document.querySelector("section");
// aClick.onclick = _ => {
//     res.classList.remove("show");
// }

// heart clk 
$(document).ready(function() {
    console.log(1)
    $(".header .nav .nav-icons li a i.heart").click( function(){
        console.log(1)
        $(".h-container").fadeToggle();
    });
    $(".header .nav .nav-icons li a i.search").click( function(){
        console.log(1)
        $(".search-bar").fadeToggle();
    });
});

// swiper 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },

    }
});


// course dropdown
let tabs = document.querySelectorAll(".filter-sec .tabs li");
let tabsArray = Array.from(tabs);
let content = document.querySelectorAll(".courses-sec .all .right .filter-sec .content > div");
let contentArray = Array.from(content);

tabsArray.forEach((element) => {
    element.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cat).style.display = "block";
    });
});

// weeks
let btns= document.querySelectorAll(".courses-sec .all .left .drop .drop-btn");
let btnsArray =Array.from(btns);
let uls= document.querySelectorAll(".courses-sec .all .left .drop > div");
let ulsArray =Array.from(uls);

btnsArray.forEach((element) => {
    element.addEventListener("click", function(e){
        btnsArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        ulsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});


const dropSelect =document.querySelector(".drop-select");
    //get inner elements
    const select = document.querySelector(".select");
    const caret =document.querySelector(".caret");
    const menue =document.querySelector(".select-menue");
    const options =document.querySelectorAll(".select-menue li");
    const selected =document.querySelector(".selected");
    //add click event to the select element
    select.addEventListener("click", () =>{
        // add the clicked style to the select element 
        select.classList.toggle("select-clicked");
        //add the rotate style to the caret element 
        caret.classList.toggle("caret-rotate");
        menue.classList.toggle("select-menue-open");

    });
    //loop thriugh all option elements
    options.forEach(option =>{
        //add a click event to the options element 
        option.addEventListener("click", () =>{
            //cjange selected inner text to the selected option inner text
            selected.innerText =option.innerText;
            //add the clicked select style to the select element
            select.classList.remove("select-clicked");
            //add the rotate style to the caret element
            caret.classList.remove("caret-rotate");
            //add the open style to the menue element
            menue.classList.remove("select-menue-open");
            //remove active class from all option elements
            options.forEach(option => {
                //add active class to clicked option element
                option.classList.remove("select-active")
            });
        });
    });
