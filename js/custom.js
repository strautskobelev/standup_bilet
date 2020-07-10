(function ($) {
	'use strict';
    $(document).ready(function(){
        $(window).resize(function(){
            //setIframeSize();
        });

        if($('.videobanner').length > 0) {
            $('.videobanner').each(function () {
                vid($(this));
            })
        }

        //select style
        $('.js-select').selectric({
            maxHeight: 400
        });
        //open close intro for all
        $('.js-close-link').click(function () {
            $(this).closest('.js-toggle-block').toggleClass('open');
            return false;
        });
        //menu hidden content
        $('.menu-btn').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('o-h');
        });
        $('.mobile-content-menu ul li').click(function () {
            $(this).closest('.js-toggle-block').removeClass('open');
            $('body').removeClass('o-h');
        });
        //mask
        $(".masked").mask("+7 (999) 999-9999");
        //sticky
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 1) {
                $('.header').addClass('header-stick');
            }
            else {
                $('.header').removeClass('header-stick');
            }
        });
        //youtdata
        if ($('.yot').length > 0) {
            let yot = $('.youtdata').text();
            yot = $.parseJSON(yot);
            let params = {
                width: "auto",
                lang: "ru",
                cacheTime: "3600",
                header: {
                    visible: false
                },
                content: {
                    search: false,
                    columns: "4",
                    rows: "6",
                    gutter: "15",
                    arrowsControl: false,
                    responsive: {
                        "990": { "columns": 3, "rows": 10},
                        "768": { "columns": 2, "rows": 10},
                        "540": { "columns": 1, "rows": 20}
                    }
                },
                video: {
                    layout: "classic",
                    info: ["playIcon", "duration", "title", "viewsCounter", "likesCounter", "commentsCounter"]
                },
            };
            for (var key in yot) {
                params[key] = yot[key];
            }
            $('.youtview').yottie(params);
        }
        //video
        if ($('.youtube').length> 0) {
            $(".youtube").each(function() {
                $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
                $(this).append($('<div/>', {'class': 'play'}));
                $(document).delegate('#'+this.id, 'click', function() {
                    var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&rel=0";
                    if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
                    var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url });
                    $(this).wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
                    $(this).replaceWith(iframe);
                });
            });
        }

        //menu-hov
        var lastId,
            topMenu = $("#top-menu"),
            topMenuHeight = topMenu.outerHeight() + 94,
            menuItems = topMenu.find("a");
        menuItems.each(function () {
            let link = $(this).attr('href');
            link = link.replace('/#', '#');
            $(this).attr('data-href', link);
        });
        var scrollItems = menuItems.map(function () {
            let link = $(this).attr("data-href");
            if (link.includes('#')) {
                var item = $(link);
                if (item.length) {
                    return item;
                }
            }
        });
        menuItems.click(function (e) {
            var href = $(this).attr("data-href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });
        $(window).scroll(function () {
            var fromTop = $(this).scrollTop() + topMenuHeight;
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            if (cur) {
                var positTop = cur[0].offsetTop;
                var positBot = cur[0].offsetTop + cur[0].offsetHeight;
                if(fromTop >= positTop && fromTop <= positBot){
                    menuItems
                        .parent().removeClass("active")
                        .end().filter("[data-href='#" + id + "']").parent().addClass("active");
                } else {
                    menuItems
                        .parent().removeClass("active");
                }
            } else {
                menuItems
                    .parent().removeClass("active");
            }
        });
        //anchor
        $('.anchor-link').click(function() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 400);
            return false;
        });

        initSliderFor();

        initSliderNav();

        setIframeSize();

        //bblb-var
        var qInset = {
            dataprefix: 'bblb-',
            trigger: 'click',
            theme: 'standard',
            contentclose: true,
            backgroundclose: true,
            removeonclose: true,
            fullscreen: false,
            openfullscreen: false,
            inline: false,
            title: true,
            pager: true,
            pagergallery: false,
            loop: true,
            closekeys: [27],
            prevkeys: [33,37,65,74],
            nextkeys: [34,39,68,76],
            enableswipe: true,
            maxswipeduration: 250,
            minswipex: 200,
            maxswipey: 100,
            transition: {
                open: 'growin',
                close: 'shrinkout',
                slide: 'slideslide'
            },
            image: {
                zoom: false,
                zoomfactor: 2
            },
            copyevents: true,
            loadcss: true,
            loadjs: true
        };
        document.qInset=qInset;
        //bblb
        $('.bblb').bbLightbox(qInset);
        //quickview
        $('.bblb-quick').bbLightbox({
            dataprefix: 'bblb-',
            trigger: 'click',
            theme: 'standard',
            contentclose: true,
            backgroundclose: true,
            removeonclose: true,
            fullscreen: false,
            openfullscreen: false,
            inline: false,
            loop: true,
            closekeys: [27],
            prevkeys: [33,37,65,74],
            nextkeys: [34,39,68,76],
            enableswipe: true,
            maxswipeduration: 250,
            minswipex: 200,
            maxswipey: 100,
            pager: false,
            transition: {
                open: 'growin',
                close: 'shrinkout',
                slide: 'slideslide'
            },
            image: {
                zoom: false,
                zoomfactor: 2
            },
            copyevents: true,
            loadcss: true,
            loadjs: true,
            onafteropen: function() {
                $('.bblb').bbLightbox(qInset);
                initSliderFor();
                initSliderNav();
            },
            onafterclose: function() {
                $('.bblb').bbLightbox(qInset);
            }
        });

        /**
         * bblb-quick-ajax
         */
        $(document).on('click','.bblb-quick-ajax',function(e){
            e.preventDefault();
            $.bbLightbox({
                    type: $(this).attr('data-type'),
                    src: $(this).attr('data-src'),
                    options: {
                        dataprefix: 'bblb-',
                        trigger: 'click',
                        theme: 'standard',
                        contentclose: true,
                        backgroundclose: true,
                        removeonclose: true,
                        fullscreen: false,
                        openfullscreen: false,
                        inline: false,
                        loop: true,
                        closekeys: [27],
                        prevkeys: [33,37,65,74],
                        nextkeys: [34,39,68,76],
                        enableswipe: true,
                        maxswipeduration: 250,
                        minswipex: 200,
                        maxswipey: 100,
                        pager: false,
                        transition: {
                            open: 'growin',
                            close: 'shrinkout',
                            slide: 'slideslide'
                        },
                        image: {
                            zoom: false,
                            zoomfactor: 2
                        },
                        copyevents: true,
                        loadcss: true,
                        loadjs: true,
                        onbeforeopen:function(){
                            $('.bb-lightbox-fullscreen').remove();
                        },
                        onafteropen: function() {
                            $('.bblb').bbLightbox(document.qInset);
                            initSliderFor();
                            initSliderNav();
                        },
                        onafterclose: function() {
                            $('.bblb').bbLightbox(document.qInset);
                        }
                    },
                }
            ).open();
        });

        /**
         * jsPopupTeamOpen
         */
        $(document).on('click','.jsPopupTeamOpen',function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log('gggg');
            let eventId     =   $(this).attr('data-id'),
                obName      =   ($(this).attr('data-ob')!==''?$(this).attr('data-ob'):'events'),
                event       =   document[obName][eventId],
                popupWrap   =   $('.jsTeamPopup'),
                popupType   =   $(this).attr('data-type'),
                popupItems  =   popupWrap.find('.jsTeamPopupItems'),
                popupTitle  =   popupWrap.find('.jsTeamPopupTitle');
            popupItems.html('');
            if(event.members.length>0){
                popupTitle.text('Состав '+event.name);
                event.members.forEach(function(arItem){
                    popupItems.append('<div class="popteam-item"><img src="'+arItem['AVATAR']+'" alt="'+arItem['NAME']+'"></div>');
                });
                $.bbLightbox({
                        type: 'html',
                        content: popupWrap,
                        options: {
                            dataprefix: 'bblb-',
                            trigger: 'click',
                            theme: (popupType==='m'?'bblb-full':'standard'),
                            contentclose: true,
                            backgroundclose: true,
                            removeonclose: true,
                            fullscreen: popupType==='m',
                            openfullscreen: popupType==='m',
                            inline: false,
                            loop: true,
                            closekeys: [27],
                            prevkeys: [33,37,65,74],
                            nextkeys: [34,39,68,76],
                            enableswipe: true,
                            maxswipeduration: 250,
                            minswipex: 200,
                            maxswipey: 100,
                            pager: false,
                            transition: {
                                open: 'growin',
                                close: 'shrinkout',
                                slide: 'slideslide'
                            },
                            image: {
                                zoom: false,
                                zoomfactor: 2
                            },
                            copyevents: true,
                            loadcss: true,
                            loadjs: true,
                            onbeforeopen:function(){
                                if(popupType==='m'){
                                    $('.bb-lightbox').removeClass('standard').addClass('bblb-full');
                                }
                                $('.bb-lightbox-fullscreen').remove();
                            }
                        },
                    }
                ).open();
            }
        });

        /**
         * bblb-full-ajax
         */
        $(document).on('click','.bblb-full-ajax',function(e){
            let btn = $(this),
                isIntickets = btn.hasClass('jsOpenInticketsPopupWidget');
            e.preventDefault();
            $.bbLightbox({
                    type: btn.attr('data-type'),
                    src: btn.attr('data-src'),
                    options: {
                        dataprefix: 'bblb-',
                        trigger: 'click',
                        theme: 'bblb-full',
                        contentclose: true,
                        backgroundclose: true,
                        removeonclose: true,
                        fullscreen: true,
                        openfullscreen: true,
                        inline: false,
                        title: true,
                        pager: true,
                        pagergallery: false,
                        maxswipeduration: 250,
                        minswipex: 200,
                        maxswipey: 100,
                        transition: {
                            open: 'growin',
                            close: 'shrinkout',
                            slide: 'slideslide'
                        },
                        image: {
                            zoom: false,
                            zoomfactor: 2
                        },
                        copyevents: true,
                        loadcss: true,
                        loadjs: true,
                        onbeforeopen:function(){
                            $('.bb-lightbox-fullscreen').remove();
                            $('.bb-lightbox').removeClass('standard').addClass('bblb-full');
                            if(isIntickets){
                                $('.bb-lightbox-slide-content').addClass('bb-lightbox-content-black-bg');
                            }
                        },
                        onafteropen: function() {
                            initFullScreenPopup($('.bblb-map'));
                            initSliderFor();
                            initSliderNav();
                        }
                    },
                }
            ).open();
        });

        //bblb-full
        initFullScreenPopup($('.bblb-full'));

        $(document).on('click','.jsHeaderCityTriggerCloseButton',function(e){
            e.preventDefault();
            $(this).closest('.header-city-change').hide();
        });

        $(document).on('change keyup input','.jsCityChangerInput',function(){
            let wrap    =   $(this).closest('.jsCityChangerWrap'),
                val     =   this.value,
                noResult=   wrap.find('.jsCityChangerNoResult');
            if(val.length>=2){
                wrap.find('.popup-change-list li').each(function(){
                    if($(this).attr('data-search').toLowerCase().includes(val.toLowerCase())){
                        $(this).show().addClass('c');
                    }else{
                        $(this).hide().removeClass('c');
                    }
                });
                if(!wrap.find('.popup-change-list li.c').length){
                    noResult.show();
                }else{
                    noResult.hide();
                }
            }else{
                wrap.find('.popup-change-list li').show();
                noResult.hide();
            }
            if(val.length==0){
                wrap.find('.popup-change-list li').show();
                noResult.hide();
            }
        });
        $('.btn-mobile-buy').insertBefore($('footer'));
        //flip banners
        if($(window).width()>=768){
            setInterval(function(){
                $('.bgrid-flip-wrap').toggleClass('flips');
            }, 5000);
        }
        //new banner slide
        if($('.nb-date').length > 0) {
            let bannerNav = $('.js-nban-nav'),
                slidesToShow = bannerNav.data('slides-show') || 1;

            $('.js-nban-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                adaptiveHeight: true,
                asNavFor: '.js-nban-nav',
            });
            bannerNav.slick({
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                asNavFor: '.js-nban-for',
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: 0,
                focusOnSelect: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: (slidesToShow >= 4) ? 4 : slidesToShow
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: (slidesToShow >= 3) ? 3 : slidesToShow
                        }
                    }
                ]
            });
            setTimeout(function () {
                $('.nbanner-wrap').removeClass('n-preload');
            }, 1000);
            let eventId = getEventId();
            if (eventId) {
                let initialSlide = 0;
                $('.js-nban-nav .item').each(function(index) {
                    if ($(this).data('event') == eventId) {
                        initialSlide = index;
                    }
                });
                if (initialSlide) {
                    $('.js-nban-for').slick('slickGoTo', initialSlide, true);
                }
            }
        }
        if(('.js-height').length > 0 || ('.js-height2').length > 0) {
            $.fn.equivalent = function () {
                let $blocks = $(this),
                    maxH = $blocks.eq(0).height();
                $blocks.each(function () {
                    maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
                });
                $blocks.height(maxH);
            };
            $('.js-height .item .ch-item, .js-height2 .item').equivalent();
        }
        /*let navLength = $('#nbanner-nav .item').length;
        if(navLength == 6 || navLength == 11 || navLength == 21) {
            $('#nbanner-nav .item:nth-last-child(1), #nbanner-nav .item:nth-last-child(2)').addClass('nav-half');
        }*/
        if ($('.js-composite-artist-concert-tabs').length) {
            $('section.tabs .pagetitle').hide();
            $('section.tabs .z-tabs-nav').hide();
            $('.js-composite-artist-concert-tabs:visible').parents('section').removeClass('mb-5').addClass('mb-0');
            $('.js-composite-artist-concert-tabs').on('click', '.item', function() {
                let item = $(this);
                $('.z-tab[data-link='+item.data('link')+']').click();
                history.pushState(null, null, '?event='+item.data('event'));
                //$("#tabs").data('zozoTabs').select(4);
            });
        }
        if ($('.nbanner-date-nav-static').length) {
            $('section.concert .pagetitle').hide();
        }
	});

    $(document).on('click','.jsOpenPromoForm',function(e){
        e.preventDefault();
        let container   =   $(this).closest('.jsPromoFormWrap'),
            preloadFunc =   $(this).attr('data-beforeLoad');
        if(preloadFunc!==''){
            window[preloadFunc](container.find('.jsHiddenOpenPromoForm.'+$(this).attr('data-class')));
        }else{
            container.find('.jsHiddenOpenPromoForm.'+$(this).attr('data-class')).click();
        }
    });



    //video banner
    function vid (elem) {
        var videoline = '';
        var videodata = $.parseJSON(elem.find('#videoContent').text());
        var windowSize = $('html')[0].offsetWidth;
        var sizes = Object.keys(videodata);
        sizes.indexOf('0') !== -1 && sizes.splice(sizes.indexOf('0'), 1);
        for(var i = 0;i < sizes.length;i++) {
            if(sizes[i] < windowSize) {
                videoline = '<video loop muted autoplay playsinline poster="' + videodata[sizes[i]].poster + '"><source src="'+  videodata[sizes[i]].video + '" type="'+ videodata[sizes[i]].type + '"></video>';
            }
        }
        if(!videoline&&videodata[0]!==undefined){
            videoline = '<video loop muted autoplay playsinline poster="' + videodata["0"].poster + '"><source src="' + videodata["0"].video + '" type="' + videodata["0"].type + '"></video>';
        }
        if(elem.find('video').length > 0) {
            elem.find('video').remove();
        }
        elem.closest('.videobanner').append(videoline);
    }

    $(document).on('click', '.mobile-content-menu a', function() {
        $(this).closest('.js-toggle-block').toggleClass('open');
        $('body').toggleClass('o-h');
    });

    //Хак для блокировки баннера
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            $(mutation.target).removeAttr('style');
        });
    });

    if($('.banner').length){
        observer.observe($('.banner')[0], {
            attributeFilter: ['style']
        });
    }
}(jQuery));
$('body').on('DOMNodeInserted', function(e) {
    if($('.yottie-widget-feed-section-pagination').length > 0){
        $('.yottie-widget-feed-section-pagination .swiper-pagination-bullet').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        })
    }
});

/**
 * модифицирует промо форму перед открытием (artistGroup for part artist)
 * @param button
 */
function onBeforeArtistGroupPromoFormLoadForArtist(button){
    let form    =   $('#order'),
        formData=   document.promoFormData;
    if(formData['title']){
        form.find('.popup-title').text(formData['title']);
    }
    if(formData['artist']['ID']){
        form.find('input[name="form_hidden_14"]').val(formData['artist']['ID']);
    }
    button.click();
}

/**
 * модифицирует промо форму перед открытием (artistGroup for main artist)
 * @param button
 */
function onBeforeArtistGroupPromoFormLoadForGroup(button){
    let form    =   $('#order'),
        formData=   document.promoFormData;
    if(formData['title']){
        form.find('.popup-title').text(formData['title']);
    }
    if(formData['artists'].length>0){
        let field   =   '<div class="col-12 col-sm-6 popup-form-row"><label class="requir">'+formData['artistFieldTitle']+'</label><select name="form_hidden_14" class="js-select-pop form-select">';
        formData['artists'].forEach(function(arItem){
            field   +=  '<option value="'+arItem['ID']+'">'+arItem['NAME']+'</option>';
        });
        field       +=  '</select></div>';
        form.find('.popup-form-row.col-md-4:first').before(field);
        form.find('.popup-form-row.col-md-4').removeClass('col-md-4');
        form.find('input[name="form_hidden_14"]').remove();
    }
    button.click();
}

/**
 * модифицирует промо форму перед открытием (agency for artist group)
 * @param button
 */
function onBeforeAgencyPromoFormLoadForGroup(button){
    let form    =   $('#order'),
        formData=   document.promoFormData;
    if(formData['title']){
        form.find('.popup-title').text(formData['title']);
    }
    if(formData['artists'].length>0){
        let field   =   '<div class="col-12 col-sm-6 popup-form-row"><label class="requir">'+formData['artistFieldTitle']+'</label><select name="form_hidden_14" class="js-select-pop form-select">';
        formData['artists'].forEach(function(arItem){
            field   +=  '<option value="'+arItem['ID']+'">'+arItem['NAME']+'</option>';
        });
        field       +=  '</select></div>';
        form.find('.popup-form-row.col-md-4:first').before(field);
        form.find('.popup-form-row.col-md-4').removeClass('col-md-4');
        form.find('input[name="form_hidden_14"]').remove();
    }
    button.click();
}

/**
 * модифицирует промо форму перед открытием (agency for artist)
 * @param button
 */
function onBeforeAgencyPromoFormLoadForArtist(button){
    let form    =   $('#order'),
        formData=   document.promoFormData;
    if(formData['title']){
        form.find('.popup-title').text(formData['title']);
    }
    if(formData['artist']['ID']){
        form.find('input[name="form_hidden_14"]').val(formData['artist']['ID']);
    }
    button.click();
}

function setIframeSize(){
    let h = document.documentElement.clientHeight,
        w = document.documentElement.clientWidth;
    $('.jsOpenInticketsPopupWidget').each(function(){
        let dataHref=   $(this).attr('data-href'),
            href    =   $(this).attr('href');
        if(dataHref!==undefined){
            $(this).attr('data-src',dataHref+'&h='+h+'&w='+w);
        }else{
            $(this).attr('href',href+'&h='+h+'&w='+w);
        }
    });
}

/**
 * аналог php in_array
 * @param p_val
 * @returns {boolean}
 */
Array.prototype.in_array=   function(p_val){
    for(var i=0,l=this.length;i<l;i++){
        if(this[i]==p_val){
            return true;
        }
    }
    return false;
};

/**
 * возвращает склонение слов в зависимости от стоящих рядом с ними циф
 * также имеет php аналог - \Klondike\Main\Tools::getNumWorld();
 * @param num
 * @param arWord
 * @return string
 */
function getNumWorld(num,arWord){
    let numX=   0;
    num     =   Math.abs(num)%100;  // берем число по модулю и сбрасываем сотни (делим на 100, а остаток присваиваем переменной $num)
    numX    =   num%10;             // сбрасываем десятки и записываем в новую переменную
    if(num>10&&num<20)              // если число принадлежит отрезку [11;19]
        return  arWord[2];
    if(numX>1&&numX<5)              // иначе если число оканчивается на 2,3,4
        return  arWord[1];
    if(numX===1)                    // иначе если оканчивается на 1
        return  arWord[0];
    return arWord[2];
}

function initSliderFor(){
    var slideFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        cssEase: 'linear',
        prevArrow: '<span class="slick-prev"><i class="icon icon-arr-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="icon icon-arr-right"></i></span>'
    };
    $('.slider-for:not(.slick-initialized)').slick(slideFor);
}

function initSliderNav(){
    var sliderNav = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        arrows: false,
        centerMode: false,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    vertical: false,
                    centerMode: false,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };
    $('.slider-nav:not(.slick-initialized)').slick(sliderNav);
}

function initFullScreenPopup(elem){
    let fullSet = {
        dataprefix: 'bblb-',
        trigger: 'click',
        theme: 'bblb-full',
        contentclose: true,
        backgroundclose: true,
        removeonclose: true,
        fullscreen: true,
        openfullscreen: true,
        inline: false,
        title: true,
        pager: true,
        pagergallery: false,
        maxswipeduration: 250,
        minswipex: 200,
        maxswipey: 100,
        transition: {
            open: 'growin',
            close: 'shrinkout',
            slide: 'slideslide'
        },
        image: {
            zoom: false,
            zoomfactor: 2
        },
        copyevents: true,
        loadcss: true,
        loadjs: true,
        onafteropen: function() {
            initFullScreenPopup($('.bblb-map'));
            initSliderFor();
            initSliderNav();
        },
    };
    elem.bbLightbox(fullSet);
}

function initInticketsWidget(){
    function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj
            }
            : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
            ,
            _typeof(obj)
    }
    (function(window, document) {
            'use strict';
            var containers = [];
            google_analytics_setup_listener("parent"),
                window.addEventListener("message", function(e) {
                    e.data.hasOwnProperty("intickets_scroll") && containers.forEach(function(el) {
                        el.querySelector("iframe").setAttribute("scrolling", e.data.intickets_scroll ? "yes" : "no")
                    })
                });
            function show() {
                num >= containers.length ? document.body.removeChild($form) : showel(containers[num], num).then(function() {
                    num++,
                        show()
                })
            }

            function showel(el, idx) {
                return new Promise(function(resolve) {
                        var target = "inticket_frame_" + idx;
                        $form.target = target,
                            $form.action = el.dataset.url,
                            document.getElementById(target).onload = function() {
                                return resolve(!0)
                            }
                            ,
                            $form.submit()
                    }
                )
            }
            function setValue(name, value) {
                document.getElementById(name).value = value
            }
            var match = location.search.match(/(?:utm_campaign=([\w-]+))/i);
            match && (document.cookie = "intickets_utm_campaign=" + match[1] + "; path=/;"),
                match = location.search.match(/(?:utm_source=([\w-]+))/i),
            match && (document.cookie = "intickets_utm_source=" + match[1] + "; path=/;"),
                match = location.search.match(/(?:utm_medium=([\w-]+))/i),
            match && (document.cookie = "intickets_utm_medium=" + match[1] + "; path=/;"),
                document.body.insertAdjacentHTML("beforeend", function() {
                    return "\n      <form id=\"intickets_form\" style=\"display:none\" method=\"POST\" target=\"intickets_frame\">\n        <input type=\"hidden\" id=\"intickets_utm_campaign\" name=\"utm_campaign\" value=\"\"/>\n        <input type=\"hidden\" id=\"intickets_utm_source\" name=\"utm_source\" value=\"\"/>\n        <input type=\"hidden\" id=\"intickets_utm_medium\" name=\"utm_medium\" value=\"\"/>\n        <input type=\"hidden\" id=\"intickets_roistat\" name=\"roistat\" value=\"\"/>\n      </form>"
                }());
            var $form = document.getElementById("intickets_form");
            match = document.cookie.match(/(?:intickets_utm_campaign=([\w-]+))/i),
            match && setValue("intickets_utm_campaign", match[1]),
                match = document.cookie.match(/(?:intickets_utm_source=([\w-]+))/i),
            match && setValue("intickets_utm_source", match[1]),
                match = document.cookie.match(/(?:intickets_utm_medium=([\w-]+))/i),
            match && setValue("intickets_utm_medium", match[1]),
                match = document.cookie.match(/(?:roistat_visit=(\w+))/i),
            match && setValue("intickets_roistat", match[1]),
                containers = [].slice.call(document.querySelectorAll(".intickets-frame-container")),
                containers.forEach(function(el, idx) {
                    var target = "inticket_frame_" + idx;
                    el.innerHTML = "<div class=\"intickets-frame-wrapper\"><iframe height=\""+document.documentElement.clientHeight+"px\" id=\"".concat(target, "\" name=\"").concat(target, "\" scrolling=\"no\" frameborder=\"0\" width=\"100%\"></iframe></div>"),
                        el.style.display = "block"
                });
            var num = 0;
            show()

        }
    )(window, document),
    "object" === ("undefined" == typeof Raven ? "undefined" : _typeof(Raven)) && (Raven.config("https://634b9d211fde4923a8fffc2a0f6e9c34@sentry.io/1237826").install(),
        void 0);
    function google_analytics_sender(data, source) {
        'use strict';
        return new Promise(function(resolve, reject) {
                function getTracker(data) {
                    if (data.hasOwnProperty("tid") && "function" == typeof ga && ga.hasOwnProperty("getAll") && "function" == typeof ga.getAll) {
                        var trks = ga.getAll().filter(function(x) {
                            return x.get("trackingId") === data.tid
                        });
                        if (0 < trks.length)
                            return trks[0].get("name")
                    }
                    return errors.push({
                        msg: "No exact tracker in " + source,
                        data: data,
                        typeOfGa: "undefined" == typeof ga ? "undefined" : _typeof(ga),
                        hasGetAll: "function" == typeof ga && ga.hasOwnProperty("getAll"),
                        typeOfGaGetAll: !!("function" == typeof ga && ga.hasOwnProperty("getAll")) && _typeof(ga.getAll)
                    }),
                        !1
                }
                function send() {
                    function sendEvent(data) {
                        if (data._sended)
                            return !0;
                        var tracker = getTracker(data);
                        if (tracker) {
                            if (data.hasOwnProperty("require")) {
                                var _iteratorNormalCompletion = !0
                                    , _didIteratorError = !1
                                    , _iteratorError = void 0;
                                try {
                                    for (var _step, k, _iterator = data.require[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0)
                                        k = _step.value,
                                            ga("".concat(tracker, ".require"), k)
                                } catch (err) {
                                    _didIteratorError = !0,
                                        _iteratorError = err
                                } finally {
                                    try {
                                        _iteratorNormalCompletion || null == _iterator.return || _iterator.return()
                                    } finally {
                                        if (_didIteratorError)
                                            throw _iteratorError
                                    }
                                }
                            }
                            if (data.hasOwnProperty("set"))
                                for (var _k in data.set)
                                    if ("referrer" != _k || "parent" !== source) {
                                        if ("location" == _k && "parent" !== source) {
                                            if (data.set.hasOwnProperty(_k)) {
                                                var url = location.href;
                                                ga("".concat(tracker, ".set"), _k, url + (-1 < url.indexOf("?") ? "&" : "?") + data.set[_k])
                                            }
                                            continue
                                        }
                                        data.set.hasOwnProperty(_k) && ga("".concat(tracker, ".set"), _k, data.set[_k])
                                    }
                            if (data.hasOwnProperty("ec")) {
                                if (data.ec.hasOwnProperty("addProduct")) {
                                    var _iteratorNormalCompletion2 = !0
                                        , _didIteratorError2 = !1
                                        , _iteratorError2 = void 0;
                                    try {
                                        for (var _step2, _k2, _iterator2 = data.ec.addProduct[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0)
                                            _k2 = _step2.value,
                                                ga("".concat(tracker, ".ec:addProduct"), _k2)
                                    } catch (err) {
                                        _didIteratorError2 = !0,
                                            _iteratorError2 = err
                                    } finally {
                                        try {
                                            _iteratorNormalCompletion2 || null == _iterator2.return || _iterator2.return()
                                        } finally {
                                            if (_didIteratorError2)
                                                throw _iteratorError2
                                        }
                                    }
                                }
                                if (data.ec.hasOwnProperty("setAction"))
                                    if (Array.isArray(data.ec.setAction)) {
                                        var _iteratorNormalCompletion3 = !0
                                            , _didIteratorError3 = !1
                                            , _iteratorError3 = void 0;
                                        try {
                                            for (var _step3, _k3, _iterator3 = data.ec.setAction[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0)
                                                _k3 = _step3.value,
                                                    ga("".concat(tracker, ".ec:setAction"), _k3)
                                        } catch (err) {
                                            _didIteratorError3 = !0,
                                                _iteratorError3 = err
                                        } finally {
                                            try {
                                                _iteratorNormalCompletion3 || null == _iterator3.return || _iterator3.return()
                                            } finally {
                                                if (_didIteratorError3)
                                                    throw _iteratorError3
                                            }
                                        }
                                    } else
                                        for (var _k4 in data.ec.setAction)
                                            data.ec.setAction.hasOwnProperty(_k4) && ga("".concat(tracker, ".ec:setAction"), _k4, data.ec.setAction[_k4])
                            }
                            return ga("".concat(tracker, ".send"), data.send),
                                !0
                        }
                    }
                    for (var x in data)
                        data.hasOwnProperty(x) && "undefined" != typeof data[x] && sendEvent(data[x]);
                    return 0 === errors.length ? resolve(!0) : reject(errors)
                }
                var errors = [];
                void 0,
                    "undefined" == typeof ga || "function" != typeof ga.getAll || 0 === ga.getAll().length ? setTimeout(function() {
                        return send()
                    }, 500) : send()
            }
        )
    }
    function google_analytics_setup_listener(source) {
        "boolean" == typeof window.google_analytics_listener || (window.google_analytics_listener = !0,
            void 0,
            window.addEventListener("message", function(event) {
                if ("string" == typeof event.data && -1 < event.data.indexOf("intickets_ga")) {
                    var data = JSON.parse(event.data);
                    data.hasOwnProperty("intickets_ga") && (void 0,
                        google_analytics_sender(data.intickets_ga, source).then(function() {
                            "Send success in " + source + ", origin: " + event.origin;
                            void 0,
                                event.source.postMessage(JSON.stringify({
                                    intickets_ga_result: !0
                                }), event.origin)
                        }).catch(function(errors) {
                            var msg = "Error send in " + source + ", origin: " + event.origin;
                            void 0,
                            "object" === ("undefined" == typeof Raven ? "undefined" : _typeof(Raven)) && Raven.captureMessage(msg, {
                                level: "error",
                                extra: errors
                            }),
                                event.source.postMessage(JSON.stringify({
                                    intickets_ga_errors: errors
                                }), event.origin)
                        })),
                    data.hasOwnProperty("intickets_ga_result") && void 0,
                    data.hasOwnProperty("intickets_ga_errors") && (void 0,
                    "widget" === source && google_analytics_sender(data.intickets_ga_errors, source).then(function() {
                        "Send success after error in " + source + ", origin: " + event.origin
                    }).catch(function(errors) {
                        void 0,
                        "object" === ("undefined" == typeof Raven ? "undefined" : _typeof(Raven)) && Raven.captureMessage("Error send after error in " + source, {
                            level: "error",
                            extra: errors
                        })
                    }))
                }
            }))
    }
}

function getEventId() {
    return window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            function(p,e){
                let a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        )['event'];
}