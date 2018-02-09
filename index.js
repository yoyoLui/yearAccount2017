$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: false,
       
        pagination : '.swiper-pagination',
        paginationType : 'fraction',

    });


    loadingTimer = setInterval(function () {
        addRate(0.5)
       
    }, 5);
    var rate = 0;
    addRate(20)
    function addRate(value) { //loading 进度函数
        rate += value;
        $('.progress-yellow').css('width', rate + '%');
        $('.car_img').css('left', rate + '%');
        if (rate >= 100) {
            clearInterval(loadingTimer);
            $('.loading-bg').hide();
            $('.pages').show();
     
        }
    }
});