$(function(){
    var delay = 3000
    var curIndex = 0
    var qnt

    initSlider()
    autoPlay()

    function initSlider(){
        var qnt = $('.sobre-autor').length
        var sizeContainer = 100 * qnt
        var sizeBoxSingle = 100 / qnt
        $('.sobre-autor').css('width', sizeBoxSingle+'%')
        $('.scroll-wraper').css('width', sizeContainer+'%')
    }

    for(var i = 0; i < qnt; i++){
        if(i == 0){
            $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>')
        }
        else{
            $('.slider-bullets').append('<span></span>')
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++
            if(curIndex == qnt){
                curIndex = 0
            }
            goToSlider(curIndex)
        }, delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left
        $('.slider-bullets span').css('background-color', '#c8c8c8')
        $('.slider-bullets span').eq(curIndex).css('background-color', '#aaaaaa')
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'})
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0})
    })
})
