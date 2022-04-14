$(document).ready(function(){
    // 클론코드 관련 안내
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function () {
        modal.stop().fadeOut(200);
    });

    // menu
    let nav = $('.nav');
    let submenu = $('.submenu');
    let submenu_h = submenu.height();
    let nav_bg = $('.nav-bg');
    submenu.css('height', 0);
    nav.mouseenter(function(){
        submenu.css('height', submenu_h);
        nav_bg.addClass('nav-bg-focus');
    });
    nav.mouseleave(function(){
        submenu.css('height', 0);
        nav_bg.removeClass('nav-bg-focus');
    });
});

window.onload = function () {
    // search focus 일 때
    let search_txt = $('.search-txt');
    let search_box = $('.search-box');
    let search_box_close = $('.search-box-close');
    
    search_txt.focus(function(){
        search_box.slideDown();
    });
    search_box_close.click(function(){
        search_box.slideUp();

    });
    


    // visual
    new Swiper('.sw-visual', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 58,
        speed: 1000,

        pagination: {
            el: ".sw-visual-pg",
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: ".sw-visual-next",
            prevEl: ".sw-visual-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    // best 
    let best_list = $('.best-list > li');
    $.each(best_list, function (index, item) {
        let col_three = (index + 1) % 3;
        let row_last = best_list.length - 3;
        if (col_three !== 0) {
            best_list.eq(index).addClass('mr-40');
        };
        if (index < row_last) {
            $(this).addClass('mb-40');
        };
    });

    // 취향존중 choose
    let choose_txt_list = $('.choose-txt-list > li');
    $.each(choose_txt_list, function (index, item) {
        let col_three = (index + 1) % 3;
        let row_last = choose_txt_list.length - 3;
        if (col_three !== 0) {
            $(this).addClass('mr-13');
        };
        if (index < row_last) {
            $(this).addClass('mb-13');
        };
    });
    let choose_cate = $('.choose-cate li');
    let choose_list = $('.choose-list > li');
    $.each(choose_cate, function (index, item) {
        $(this).click(function () {
            choose_list.removeClass('on');
            choose_list.eq(index).addClass('on');
        });
    });

    // brand
    let sw_brand = new Swiper('.sw-brand', {
        loop : true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 138,
        speed : 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on : {
            slideChange : function () {
                $('.brand-item-img').removeClass('img-scale-big');
                $('.sw-brand .swiper-slide').eq(this.activeIndex).find('.brand-item-img').addClass('img-scale-big');
            },
        },
    });

    let sns_list_name = ['facebook', 'insta', 'youtube', 'blog'];
    
    // footer-sns
    let sns_list_link = $('.f-sns-list li a');
    let sns_list_total = sns_list_link.length;
    $.each(sns_list_link, function(index, item){
        let temp = '<img src=\"images/mf_';
        temp += sns_list_name[index];
        temp += '.png\" alt=\"';
        temp += sns_list_name[index];
        temp += '\">';
        $(this).html(temp);
        if (index+1 < sns_list_total) {
            $(this).addClass('mr-10');
        }
    });
};