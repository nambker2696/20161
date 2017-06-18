var gl_path = jQuery('#gl_path').html();
function include(scriptUrl) {
    document.write('<script src="catalog/view/theme/' + gl_path + '/' + scriptUrl + '"></script>');
}

;
(function ($) {
    $(document).load(function () {
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {		
		$('.box_html.buttons-top a > div').css('background', '#ffffff');
	}
})
})

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');


/* SMOOTH SCROLLING
 ========================================================*/

 ;
(function ($) {
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
	
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');
         $(window).load(function () {
			if (isChrome || isSafari) {
            $.srSmoothscroll({
                step: 90,
                speed: 550
            });
			}
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);

/*
 Stick up menus
 ========================================================*/

;
(function ($) {
	if ($('body').width() > 991 ) {
    var o = $('html');
    var menu = $('#stuck');
    if (o.hasClass('desktop') && menu.length) {
        include('js/scrollfix.js');

        $(window).load(function () {
            menu.scrollFix({
                style: false
            });
        });
    }
	}
})(jQuery);

;
(function ($) {
    include('js/jquery.rd-navbar.min.js');
})(jQuery);

/* Unveil
 ========================================================*/
;
(function ($) {
    var o = $('.lazy img');

    if (o.length > 0) {
        include('js/jquery.unveil.js');

        $(document).ready(function () {
            $(o).unveil(0, function () {
                $(this).load(function () {
                    $(this).parent().addClass("lazy-loaded");
                })
            });
        });

        $(window).load(function () {
            $(window).trigger('lookup.unveil');
            if ($('.nav-tabs').length) {
                $('.nav-tabs').find('a[data-toggle="tab"]').click(function () {
                    setTimeout(function () {
                        $(window).trigger('lookup.unveil');
                    }, 400);
                })
            }
        });

    }
})(jQuery);

/* Magnificent
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    if (o.length > 0) {
        include('js/magnificent/jquery.ba-throttle-debounce.js');
        include('js/magnificent/jquery.bridget.js');
        include('js/magnificent/magnificent.js');

        $(document).ready(function () {

            o.find('li:first-child a').addClass('active');

            $('#product-image').bind("click", function (e) {
                var imgArr = [];
                o.find('a').each(function () {
                    img_src = $(this).data("image");

                    //put the current image at the start
                    if (img_src == $('#product-image').find('img').attr('src')) {
                        imgArr.unshift({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                    else {
                        imgArr.push({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                });
                $.fancybox(imgArr);
                return false;
            });


            o.find('[data-image]').click(function (e) {
                e.preventDefault();
                o.find('.active').removeClass('active');
                var img = $(this).data('image');
                $(this).addClass('active');
                $('#product-image').find('.inner img').each(function () {
                    $(this).attr('src', img);
                })
            })

        });

    }
})
(jQuery);


/* Toggle
 ========================================================*/

(function ($) {
    var o = $('.toggle');
    $(document).ready(function () {
        $(document).on("click",".toggle",function (e) {
            e.preventDefault();
            var tmp = $(this);
            o.each(function () {
                if ($(this).parent().hasClass('active') && !$(this).is(tmp)){
                    $(this).parent().find('.toggle_cont').slideToggle();
                    $(this).parent().removeClass('active');
                }
            });           
           
            $('.cart').removeClass('open');
			$(this).parent().toggleClass('active');
            $(this).parent().find('.toggle_cont').slideToggle();	
			
        });
		
		$(document).mouseup(function (e) {
			var container = $('.toggle-wrap');
			if (container.has(e.target).length === 0 && container.hasClass('active') && !$(this).is(container)){
				container.find('.toggle_cont').slideToggle();
				container.removeClass('active');
			}
		});
		
    });
})(jQuery);

/* Bx Slider
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    var o2 = $('#gallery');
    if (o.length || o2.length) {
        include('js/jquery.bxslider/jquery.bxslider.js');
    }

    if (o.length) {
        $(document).ready(function () {
            $('#image-additional').bxSlider({
                mode: 'vertical',
                pager: false,
                controls: true,
                slideMargin: 13,
                minSlides: 5,
                maxSlides: 5,
                slideWidth: 99,
                nextText: '<i class="fa fa-chevron-down"></i>',
                prevText: '<i class="fa fa-chevron-up"></i>',
                infiniteLoop: false,
                adaptiveHeight: true,
                moveSlides: 1
            });
        });
    }

    if (o2.length) {
        include('js/photo-swipe/klass.min.js');
        include('js/photo-swipe/code.photoswipe.jquery-3.0.5.js');
        include('js/photo-swipe/code.photoswipe-3.0.5.min.js');
        $(document).ready(function () {
            $('#gallery').bxSlider({
                pager: false,
                controls: true,
                minSlides: 1,
                maxSlides: 1,
                infiniteLoop: false,
                moveSlides: 1
            });
        });
    }

})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.quickview');
    var o2 = $('#default_gallery');
    if (o.length > 0 || o2.length > 0) {
        include('js/fancybox/jquery.fancybox.js');
    }

    if (o.length) {
        $(document).ready(function () {
            o.fancybox({
                maxWidth: 800,
                maxHeight: 600,
                fitToView: false,
                width: '70%',
                height: '70%',
                autoSize: false,
                closeClick: false,
                openEffect: 'elastic',
                closeEffect: 'elastic'
            });
        });
    }

})(jQuery);

/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
    $(window).load(function () {
        $('#tm_menu .menu').superfish();
    });
})(jQuery);

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.related-slider');
    if (o.length > 0) {
        $(document).ready(function () {
            o.owlCarousel({
                // Most important owl features
                items: 4,
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [991, 3],
                itemsTablet: [767, 2],
                itemsTabletSmall: false,
                itemsMobile: [480, 1],

                // Navigation
                pagination: false,
                navigation: true,
                navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
            });
        });
    }
})(jQuery);


/* Box Carousel
 ========================================================*/
;
(function ($) {
    var o = $('#content .box-carousel');
    if (o.length > 0) {
        $(document).ready(function () {
            $.each(o, function () {
                if ($(this).parents('aside').length == 0) {
                    o.owlCarousel({
                        // Most important owl features
                        items: 4,
                        itemsCustom: false,
                        itemsDesktop: [1199, 4],
                        itemsDesktopSmall: [991, 3],
                        itemsTablet: [767, 2],
                        itemsTabletSmall: false,
                        itemsMobile: [480, 1],

	// Navigation
    pagination: false,
	navigation : true,
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
				}); }
        }); });
    }
})(jQuery);

/* GREEN SOCKS
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.find('body').hasClass('common-home')) {
        include('js/greensock/jquery.gsap.min.js');
        include('js/greensock/TimelineMax.min.js');
        include('js/greensock/TweenMax.min.js');
        include('js/greensock/jquery.scrollmagic.min.js');

        $(document).ready(function () {
            controller = new ScrollMagic();
        });
		
		$(window).load(function () {		
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        });
       
    }
})(jQuery);



/* Swipe Menu
 ========================================================*/
;
(function ($) {
    $(document).ready(function () {
        $('#page').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                return false
            }
        })

        $('.swipe-control').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                $(this).removeClass('active');
                return false
            }
            else {
                $(this).parents('body').addClass('ind');
                $(this).addClass('active');
                return false
            }
        })
    });

})(jQuery);


/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

$(document).ready(function () {
    /***********CATEGORY DROP DOWN****************/
	 
    $(".menu-icon").on("click", function () {
        $(".menu-gadget .menu").slideToggle();
        $(this).toggleClass("active");
    });
    $('.menu-gadget .menu').find('li > ul').before('<i class="fa fa-chevron-down"></i>').parent('li').addClass('parent');
    $('.menu-gadget .menu li i').on("click", function () {
        if ($(this).hasClass('fa-chevron-up')) {
            $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down').parent('li').find('> ul').slideToggle();
        }
        else {
            $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up').parent('li').find('> ul').slideToggle();
        }
    });
	
	$(document).mouseup(function (e) {
			var container = $('.menu-gadget');
			if (container.has(e.target).length === 0 && container.find('.menu-icon').hasClass('active') && !$(this).is(container)){
				container.find('.menu').slideToggle();
				container.find('.menu-icon').removeClass('active');
			}
		});
	
	$('#cart .total tbody tr').last().addClass('last');
	
    if ($('.breadcrumb').length) {
		$('.breadcrumb li').last().addClass('last');
        var o = $('.breadcrumb li:last-child');
        var str = o.find('a').html();
        o.find('a').css('display', 'none');
        o.append('<span>' + str + '</span>');
    };
	
	$('.common-home .banners a.btn-banner').each(function(){
		var title = $(this).html();
		$(this).html(title+'<span class="over">'+title+'</span><span class="out">'+title+'</span>');
	});
		
});


$(document).ready(function () {
    $(".menu-top > span").on("click", function () {
        $(".menu-top #tm_menu").slideToggle();
        $(this).toggleClass("active");		
    });   
});

$(window).load(function () {	 
	if ($('.social-list').length) {
		$('.social-block').append($('.social-list'));
	};	 
});

var flag = true;

function respResize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if ($('aside').length) {
        var leftColumn = $('aside');
    } else {
        return false;
    };
			
    if (width > 767) {
        if (!flag) {
            flag = true;
            leftColumn.insertBefore('#content');
            $('.col-sm-3 .box-heading').unbind("click");

            $('.col-sm-3 .box-content').each(function () {
                if ($(this).is(":hidden")) {
                    $(this).slideToggle();
                }
            })
        }
		
    } else {
        if (flag) {
            flag = false;
            leftColumn.insertAfter('#content');

            $('.col-sm-3 .box-content').each(function () {
                if (!$(this).is(":hidden")) {
                    $(this).parent().find('.box-heading');
                }
            });

            $('.col-sm-3 .box-heading').bind("click", function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().find('.box-content').slideToggle();
                }
                else {
                    $(this).addClass('active');
                    $(this).parent().find('.box-content').slideToggle();
                }
            })
        }
    }
}

/* DatetimePicker
========================================================*/
;(function ($) {
	var o1 = $('.date'),
	o2 = $('.datetime'),
	o3 = $('.time');
	if (o1.length || o2.length || o3.length) {
		document.write('<script src="catalog/view/javascript/jquery/datetimepicker/moment.js"><\/script>');
		document.write('<script src="catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js"><\/script>');
	}

	$(document).ready(function () {

		if (o1.length) {
			o1.datetimepicker({
				pickTime: false
			});
		}
		if (o2.length) {
			$('.datetime').datetimepicker({
				pickDate: true,
				pickTime: true
			});
		}
		if (o3.length) {
			$('.time').datetimepicker({
				pickDate: false
			});
		}

		
		$('.date,.datetime,.time').each(function () {
			var $this = $(this);
			$(this).find('.btn').click(function () {
				var body = $('body');
				if (body.hasClass('ajax-overlay-open')) {
					var open;
					setTimeout(function () {
						open = $('body').find('.bootstrap-datetimepicker-widget.picker-open');
						if (open.hasClass('top')) {
							open.css('bottom', $(window).height() - ($this.offset().top - $('.ajax-overlay').offset().top));
						}
					}, 10);
				}
			});
		});
	});
	$(document).ready(function () {
		$('.date, .datetime, .time').on('dp.show', function () {
			$('.date, .datetime, .time').not($(this)).each(function () {
				$(this).data("DateTimePicker").hide();
			});
		});
		$(this).on('click touchstart', function () {
			$('.date, .datetime, .time').each(function () {
				$(this).data("DateTimePicker").hide();
			});
		});
	});

})(jQuery);

/* Quantity Counter
========================================================*/
;(function ($) {
	var o = $('input[name*="quantity"]');
	$(document).ready(function () {
		$('.counter-minus').click(function (e) {
			e.preventDefault();
			input = $(this).parent().find('input[name*="quantity"]');
			if (input.val() > 1){
				value = parseInt(input.val()) - 1;
				input.val(value);
			}
		})
		$('.counter-plus').click(function (e) {
			e.preventDefault();
			input = $(this).parent().find('input[name*="quantity"]');
			value = parseInt(input.val()) + 1;
			input.val(value);
		});
	});
})(jQuery);



$(window).load(respResize);
$(window).resize(function () {
    clearTimeout(this.id);
    this.id = setTimeout(respResize, 500);
});
;

