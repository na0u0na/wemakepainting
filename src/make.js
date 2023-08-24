$(function () {

    // 페이지 페이드인
    $(window).scroll(function () {
        var toTop = $('#Slide1').prev().offset().top; //Slide1 높이
        var toScroll = $(window).scrollTop(); // 윈도우 스크롤탑

        // Top버튼 페이드인아웃
        if (toScroll > toTop) {
            $(".Topbtn").fadeIn(1000);

        } else {
            $(".Topbtn").fadeOut(1000);
        }

        // Top버튼 클릭시 스크롤탑
        $(".Topbtn").click(function () {
            $('html, body').stop().animate({ 'scrollTop': 0 }, 600, function () {
                // location.reload(true);
            });

        });

        // 스크롤 페이지 페이드인
        for (var i = 1; i < 7; i++) {
            var Fprev = $("#Slide" + i).prev().offset().top;
            if (toScroll >= (Fprev + 200)) {
                $("#Slide" + i).animate({ 'opacity': 1 }, 1000);
            }
        }
    });
    // 탑 슬라이드

    $('.backboard ul li').each(function (idx) {
        $(this).css('left', 1100 * (idx - 1));
    });

    var imgP = 2;
    var thSlide = $(".backboard ul");
    var rightP = 1;
    var rightSlide = $(".rightboard ul");

    // 슬라이드 setinterval
    var timerSlide = setInterval(callback, 4000);

    function callback() {
        imgP++;
        rightP++;
        $(thSlide).stop().animate({ 'left': '-=1100px' }, 600, function () {
            if (imgP > 4) {
                $(thSlide).css('left', 1100);
                imgP = 1;
            }
        });
        $(rightSlide).stop().animate({ 'left': '-=700px' }, 600, function () {
            if (rightP == 5) {
                $(rightSlide).css('left', 0);
                rightP = 1;
            }
        });
    };

    // 슬라이드 버튼 클릭

    $("#topSlide .btn").click(function () {
        imgP++;
        rightP++;
        $(thSlide).stop(true, true).animate({ 'left': '-=1100px' }, 600, function () {
            if (imgP > 4) {
                $(thSlide).css('left', 1100);
                imgP = 1;
            }
        });
        $(rightSlide).stop(true, true).animate({ 'left': '-=700px' }, 600, function () {
            if (rightP == 5) {
                $(rightSlide).css('left', 0);
                rightP = 1;
            }
        });
        clearInterval(timerSlide);
        timerSlide = setInterval(callback, 8000);
    });


    // 베스트 상품 hover

    $('.productbox').each(function () {
        $(this).hover(function () {
            $(this).children('p, a, .pricebar').stop().animate({ 'opacity': '1' }, 200);
            $(this).css('cursor', 'pointer');
        }, function () {
            $(this).children('p, a,.pricebar').stop().animate({ 'opacity': '0' }, 200);
        });
    });

    // 베스트 상품 2페이지

    var box1img = $('.productbox1 img').attr('src');
    var box2img = $('.productbox2 img').attr('src');
    var box3img = $('.productbox3 img').attr('src');
    var box4img = $('.productbox4 img').attr('src');

    var box1p = $('.productbox1 p').html();
    var box2p = $('.productbox2 p').html();
    var box3p = $('.productbox3 p').html();
    var box4p = $('.productbox4 p').html();

    var box1span = $('.productbox1 span').html();
    var box2span = $('.productbox2 span').html();
    var box3span = $('.productbox3 span').html();
    var box4span = $('.productbox4 span').html();

    var box1css = $('.productbox1 span').css('left');
    var box2css = $('.productbox2 span').css('left');
    var box3css = $('.productbox3 span').css('left');
    var box4css = $('.productbox4 span').css('left');

    $('.slidebox2').click(slide2);

    function slide2() {
        $('.slidebox2 img').css('border-bottom', '1px solid');
        $('.slidebox1 img').css('border-bottom', '0');

        $('.products').css('opacity', '0.6').animate({ 'opacity': '1' }, 500);

        $('.productbox1').children('img').attr('src', 'img/product/18.png');
        $('.productbox1').children('p').html('문득 새벽에 깨어났을 때<br />#창문 밖의 풍경이었으면<br />#아름다운');
        $('#Slide1 .productbox1 span').css('left', '15%');
        $('.productbox1 span').html('핑크빛 에펠탑');

        $('.productbox2').children('img').attr('src', 'img/product/15.png');
        $('.productbox2').children('p').html('반짝 반짝 눈이부셔 No no no no no<br />#수줍게 #맹세하는<br />#열렬한 사랑');
        $('#Slide1 .productbox2 p').css('margin-top', '25px');
        $('.productbox2 span').html('장미 [프리미엄]');
        $('#Slide1 .productbox2 span').css('left', '14%');


        $('.productbox3').children('img').attr('src', 'img/product/17.png');
        $('.productbox3').children('p').html('We are just<br />gonna wait and see<br />#흘러가는대로 지켜봐요<br />#좋은 상상만을 하며');
        $('#Slide1 .productbox3 p').css('margin-top', '30px');
        $('.productbox3 span').html('라라랜드 [프리미엄]');

        $('.productbox4').children('img').attr('src', 'img/product/13.png');
        $('.productbox4').children('p').html('모두가 잠든 도시에서<br />#나란히 걸으며<br />#고백하고 싶네요');
        $('.productbox4 span').html('체코 나잇뷰 [프리미엄]');
        $('#Slide1 .productbox4 span').css('left', '15%');
    }


    // 베스트 상품 1페이지

    $('.slidebox1').click(slide1);

    function slide1() {
        $('.slidebox1 img').css('border-bottom', '1px solid');
        $('.slidebox2 img').css('border-bottom', '0');
        $('.products').css('opacity', '0.6').animate({ 'opacity': '1' }, 500);

        $('.productbox1').children('img').attr('src', box1img);
        $('.productbox2').children('img').attr('src', box2img);
        $('.productbox3').children('img').attr('src', box3img);
        $('.productbox4').children('img').attr('src', box4img);

        $('.productbox1 p').html(box1p);
        $('.productbox2 p').html(box2p);
        $('.productbox3 p').html(box3p);
        $('.productbox4 p').html(box4p);

        $('.productbox1 span').html(box1span).css('left', box1css);
        $('.productbox2 span').html(box2span).css('left', box2css);
        $('.productbox3 span').html(box3span).css('left', box3css);
        $('.productbox4 span').html(box4span).css('left', box4css);
    }

    // 베스트 상품 setInterval

    //var box1interval = setInterval(slide1, 12001);
    //var box2interval = setInterval(slide2, 6000);
    //var box2time = setTimeout(box2interval, 6000);



    // 새로운 상품 hover

    $('#Slide2 ul li div').each(function () {
        $(this).hover(function () {
            $(this).children('p, .showbox').stop().animate({ 'opacity': '1' }, 200);
            $(this).css('cursor', 'pointer');
        }, function () {
            $(this).children('p, .showbox').stop().animate({ 'opacity': '0' }, 200);
        });
    });


    // 새로운 상품 버튼 슬라이드

    $('.fbtn').click(function () {
        $(this).css('backgroundColor', 'pink');
        $('.sbtn').css('backgroundColor', '#716660');
        $('#Slide2 ul').stop().animate({
            'left': '-990px'
        }, 500);
    });

    $('.sbtn').click(function () {
        $(this).css('backgroundColor', 'pink');
        $('.fbtn').css('backgroundColor', '#716660');
        $('#Slide2 ul').stop().animate({
            'left': '0px'
        }, 500);
    });



    // 추천 키워드 이미지 변경

    $('#Slide6 a').each(function (idx) {
        $(this).mouseover(function () {
            $('.poster2 img').css({ 'opacity': '0.5', 'left': '-40px', 'width': '310px' }).attr('src', 'img/bs' + ((idx + 1) * 2 - 1) + '.png').stop().animate({ opacity: 1, left: 0, width: '300px' }, 1000);
            $('.poster1 img').css({ 'opacity': '0.5', 'right': '-40px', 'width': '310px' }).attr('src', 'img/bs' + ((idx + 1) * 2) + '.png').stop().animate({ opacity: 1, right: 0, width: '300px' }, 1000);
        });
    });
});