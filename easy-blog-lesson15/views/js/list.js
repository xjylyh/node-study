$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        autoplayDisableOnInteraction:false,
        loop:true
    })
    $('.list_main').on('click',function(){
        window.location.href = '/context?id='+$(this).data('id');
    })
})