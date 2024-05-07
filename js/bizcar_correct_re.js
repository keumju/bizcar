//메뉴 스크립트

let nav = document.querySelector('nav')
let gnbs = document.querySelectorAll('.gnb_main');
let subs = document.querySelectorAll('.submenu');
let bgsub = document.querySelector('.sub_bg');

gnbs.forEach(function(gnb,i){
    gnb.addEventListener('mouseover',function(){
        for(j=0; j<gnbs.length; j++){
            subs[j].classList.remove('over');
            bgsub.style.display = 'none'
        }
        subs[i].classList.add('over');
        bgsub.style.display = 'block'
    })
    nav.addEventListener('mouseleave',function(){
        subs[i].classList.remove('over');
        bgsub.style.display = 'none'
    })
})


//산업재렌탈 추천상품 스크립트

let lists = document.querySelectorAll('.list');
let contents = document.querySelectorAll('.sec7>article')

lists[0].classList.add('act');
contents[0].classList.add('view');

var swiper = new Swiper('.sec7 .swiper', {
    slidesPerView: 5,
    direction: getDirection(),
    navigation: {
        nextEl: '.sec7 .swiper-button-next',
        prevEl: '.sec7 .swiper-button-prev',
    },
    on: {
        resize: function (){
        swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}


lists.forEach(function(a,i){
    a.addEventListener('click',function(){
        for(let j=0; j<lists.length; j++){
            lists[j].classList.remove('act');
            contents[j].classList.remove('view');
        }
        a.classList.add('act');
        contents[i].classList.add('view');
    })
})


// search btn

let searchBtn = document.querySelector('.search>img')
let hidSearch = document.querySelector('.search_hide')
let closBtn = document.querySelector('.btn_close')

searchBtn.addEventListener('click',function(){
    hidSearch.style.display = 'block';
});
closBtn.addEventListener('click',function(){
    hidSearch.style.display = 'none';
});


// ham_btn

let ham = document.querySelector('.ham_btn');
let hamF = document.querySelector('.ham_btn>div:nth-child(1)');
let hamS = document.querySelector('.ham_btn>div:nth-child(2)');
let hamT = document.querySelector('.ham_btn>div:nth-child(3)');
let hamSubs = document.querySelector('.ham_subs');

ham.addEventListener('click',function(){
    if(hamSubs.style.display == 'block'){
        hamS.style.display = 'block';
        hamS.style.transition = '0.5s';
        hamF.style.transform = 'rotate(0)';
        hamF.classList.remove('closeclic');
        hamT.style.transform = 'rotate(0)';
        hamT.classList.remove('closeclic');
        hamSubs.style.display = 'none';
    }else{
        hamS.style.display = 'none';
        hamS.style.transition = '0.5s';
        hamF.style.transform = 'rotate(-45deg)';
        hamF.classList.add('closeclic');
        hamT.style.transform = 'rotate(45deg)';
        hamT.classList.add('closeclic');
        hamSubs.style.display = 'block';
    }
})
