//스크롤파이
$(function () {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        before: function (i, panels) {
            $('html').attr('data-scrollify-index', i);
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});

$.scrollify({
    section: ".panel3",
    scrollbars: false,
    interstitialSection: "footer"
});

//panel1 슬라이드
$('.slider-2 .page-nav > div').click(function () {

    var $this = $(this);
    var $pagenav = $this.parent()
    var $current = $pagenav.find('.active');

    $current.removeClass('active');
    $this.addClass('active');

    var index = $this.index();
    var $slider = $this.closest('.business_part_cont');

    $slider.find('.left-part .slides > div.active').removeClass('active');
    $slider.find('.left-part .slides > div').eq(index).addClass('active');
    $slider.find('.right-part .slides-cont .slide_tit.on').removeClass('on');
    $slider.find('.right-part .slides-cont .slide_tit').eq(index).addClass('on');


});

$('.right-part .side-btns-box .pre').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.business_part_cont');

    var $current = $slider.find('.page-nav > div.active');
    var $post = $current.prev();

    if ($post.length == 0) {
        $post = $slider.find('.page-nav > div:last-child');
    }

    $post.click();
});

$('.right-part .side-btns-box .nex').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.business_part_cont');

    var $current = $slider.find('.page-nav > div.active');
    var $post = $current.next();

    if ($post.length == 0) {
        $post = $slider.find('.page-nav > div:first-child');
    }

    $post.click();
});

$('.main-grid .row .cell .grid-item1 .grid-item-base .slider-1 .pages li').click(function () {
    var $slider = $(this).closest('.slider-1');
    var $current = $slider.find('>.pages > li.active');

    $current.removeClass('active');
    $(this).addClass('active');

    var index = $(this).index();

    $slider.find('>.slides>div.active').removeClass('active');
    $slider.find('>.slides>div').eq(index).addClass('active');

});


function Slider1__moveNext() {
    var $slider = $('.main-grid .row .cell .grid-item1 .slider-1');
    var $current = $slider.find(' > .pages > li.active');

    var $next = $current.next();

    if ($next.length == 0) {
        $next = $slider.find('> .pages > li:first-child');
    }

    $next.click();
}

setInterval(Slider1__moveNext, 2000);


$(document).ready(function () {
    /*3depth 메뉴*/
    $(function () {
        // 태블릿, 모바일 토글메뉴효과
        function slideMenu() {
            var activeState = $("#m_header .allMenu").hasClass("active");
            $("#m_header .allMenu").animate({
                left: activeState ? "0%" : "-100%"
            }, 400);
        }
        $("#hamburger_wrapper").click(function (event) {
            event.stopPropagation();
            $("#hamburger_menu").toggleClass("open");
            $("#m_header .allMenu").toggleClass("active");
            slideMenu();

            $("body").toggleClass("overflow-hidden");
        });

        $(".allMenu").find(".accordion-toggle").click(function () {
            $(this).next().toggleClass("open").slideToggle("fast");
            $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

            $(".allMenu .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
            $(".allMenu .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
        });
        $("ul li:has(ul)").addClass("has-sub");
        $('.sideNav').find('li.has-sub>a').on('click', function (e) {
            // $(this).removeAttr('href');
            //e.preventDefault();
            var navlist = $(this).parent('li');
            if (navlist.hasClass('open')) {
                navlist.removeClass('open');
                navlist.find('li').removeClass('open');
                navlist.find('ul').slideUp(200);
            } else {
                navlist.addClass('open');
                navlist.children('ul').slideDown(200);
                navlist.siblings('li').children('ul').slideUp(200);
                navlist.siblings('li').removeClass('open');
                navlist.siblings('li').find('li').removeClass('open');
                navlist.siblings('li').find('ul').slideUp(200);
            }
        });

        $('.sideNav>ul>li.has-sub>a').append('<i class="fa fa-chevron-down right--icon"></i>');
        $('.sideNav>ul>li>ul>li.has-sub>a').append('<i class="fa fa-chevron-down right--icon-sub"></i>');
        $('.sideNav>ul>li>ul>li>ul>li.has-sub>a').prepend('<span class="plus-minus"></span>');
        // $('.sideNav>ul>li>ul>li>ul>li.has-sub>a').prepend('<i class="fa fa-plus left--icon"></i><i class="fa fa-minus left--icon"></i>'); // 아이콘 사용시
    });
});