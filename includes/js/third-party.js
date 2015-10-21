/*-----------------------------------------------------------------------------------*/
/* Double Tap to Go */
/*-----------------------------------------------------------------------------------*/

;
(function ($, window, document, undefined) {
    $.fn.doubleTapToGo = function (params) {
        if (!('ontouchstart'in window) && !window.navigator.msPointerEnabled && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i))return false;
        this.each(function () {
            var curItem = false;
            $(this).on('click', function (e) {
                var item = $(this);
                if (item[0] != curItem[0]) {
                    e.preventDefault();
                    curItem = item
                }
            });
            $(document).on('click touchstart MSPointerDown', function (e) {
                var resetItem = true, parents = $(e.target).parents();
                for (var i = 0; i < parents.length; i++)if (parents[i] == curItem[0])resetItem = false;
                if (resetItem)curItem = false
            })
        });
        return this
    }
})(jQuery, window, document);

/*-----------------------------------------------------------------------------------*/
/* FITVIDS.JS - Responsive video embeds */
/*-----------------------------------------------------------------------------------*/
/*global jQuery */
/*!
 * FitVids 1.0
 *
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */

(function ($) {

    $.fn.fitVids = function (options) {
        var settings = {
            customSelector: null
        }

        var div = document.createElement('div'),
            ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

        div.className = 'fit-vids-style';
        div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

        ref.parentNode.insertBefore(div, ref);

        if (options) {
            $.extend(settings, options);
        }

        return this.each(function () {
            var selectors = [
                "iframe[src^='http://player.vimeo.com']",
                "iframe[src^='http://www.youtube.com']",
                "iframe[src^='http://www.kickstarter.com']",
                "object",
                "embed"
            ];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var $allVideos = $(this).find(selectors.join(','));

            $allVideos.each(function () {
                var $this = $(this);
                if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
                    return;
                }
                var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
                    aspectRatio = height / $this.width();
                $this.wrap('<div class="fluid-width-video-wrapper" />').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
                $this.removeAttr('height').removeAttr('width');
            });
        });

    }


})(jQuery);

var reel_1, reel_m;

jQuery(document).ready(function ($) {

    var hash = document.location.hash;
    reel_1 = videojs('reel_1');
    var reel_h = videojs('reel_h');
    var reel_b = videojs('reel_b');
    var reel_n = videojs('reel_n');
    reel_m = videojs('reel_m');

    if (hash == '#reel') {
        $('#video_overlay').fadeIn('fast');
        $('.email_pic').fadeIn('fast');

        reel_1.currentTime(0);
        document.location.hash = document.location.hash.replace('reel', '');

    }

    $('#reel_m').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;

        if (state == false) {
            reel_m.pause();
            $('.mobile_video').hide();
            reel_m.currentTime(0);
        }
    });


    jQuery('#open_video').click(function () {
        if (isMobile.any) {
            $('.mobile_video').show();
            reel_m.currentTime(0);
            reel_m.play();
            reel_m.requestFullscreen();
        } else {
            $('#video_overlay').fadeIn('fast');
            $('#video_1').fadeIn('fast');
            /*$('#video_overlay .col-1').css('z-index', 10000001).animate({
             'opacity': 0
             }, 750);*/
            $('#video_overlay #video_1').css('z-index', 10000002).animate({
                'opacity': 1
            }, 750);
            reel_1.currentTime(0);

            reel_1.play();
        }
    });

    jQuery('.email_pic .play-button').click(function () {
        if (isMobile.any) {
            $('.mobile_video').show();
            reel_m.currentTime(0);
            reel_m.play();
            reel_m.requestFullscreen();
        } else {
            $('.email_pic, #video_1, #bonus_reels, .replay').hide();
            $('#video_overlay .email_pic').css('z-index', 10000001).animate({
                'opacity': 0
            }, 750);
            $('#video_overlay #video_1').css('z-index', 10000002).animate({
                'opacity': 1
            }, 750);
            $('#video_1').show();
            reel_1.play();
        }
    });

    $('.replay-button').click(function () {
        $('.email_pic, #video_1, #bonus_reels, .replay').hide();
        $('#video_1').fadeIn('fast');
        reel_1.currentTime(0);
        reel_h.currentTime(0);
        reel_b.currentTime(0);
        reel_n.currentTime(0);
        reel_1.play();
    });

    jQuery('#cross_close').click(function () {
        reel_1.pause();
        reel_h.pause();
        reel_b.pause();
        reel_n.pause();
        $('.email_pic, #video_1, #bonus_reels, .replay').hide();
        jQuery('#video_overlay').fadeOut('fast');
    });


    $('#video_overlay .play-button').click(function () {

    });

    videojs("reel_1").ready(function () {
        var myPlayer = this;
        myPlayer.on("ended", function () {
            $('#video_1').fadeOut('fast');
            $('.bonus_video_wrap, .bonus_controls').hide();
            $('.bonus_selector').show();
            $('#bonus_reels').fadeIn('fast');
        });
    });

    jQuery('.see_bonus').click(function () {
        reel_1.pause();
        reel_1.currentTime(0);
        $('#video_1').fadeOut('fast');
        $('.bonus_video_wrap, .bonus_controls').hide();
        $('.bonus_selector').show();
        $('#bonus_reels').fadeIn('fast');
    });

    videojs("reel_h").ready(function () {
        showReplay(this);
    });
    videojs("reel_b").ready(function () {
        showReplay(this);
    });
    videojs("reel_n").ready(function () {
        showReplay(this);
    });

    function showReplay(pl) {
        pl.on("ended", function () {
            $('#bonus_reels').fadeOut('fast');
            $('.video_content .replay').fadeIn('fast');
        });
    }


    /*var preload = new html5Preloader();
     preload.addFiles('video_h', 'https://player.vimeo.com/external/140841945.hd.mp4?s=949da2a19a7cd351e7714d82029eb12b&profile_id=119');
     preload.addFiles('video_b', 'https://player.vimeo.com/external/140841738.hd.mp4?s=e4e66595a4eee12ae11a85f81356b83c&profile_id=119');
     preload.addFiles('video_n', 'https://player.vimeo.com/external/140842271.hd.mp4?s=f4922d1ece149e17e9890737e9510361&profile_id=119');*/


    $('.b_control').click(function () {
        switchReel($(this).attr('data-reel'));
    });

    $('.bonus_selector_vid').click(function () {
        var reelId = $(this).attr('data-reel');
        $('.bonus_selector').hide();
        $('.bonus_video_wrap, .bonus_controls').show();

        reel_h.currentTime(0);
        reel_b.currentTime(0);
        reel_n.currentTime(0);
        switchReel(reelId);
    });

    function switchReel(reelId) {
        var otherReels = ['h', 'b', 'n'];
        otherReels.remove(reelId);

        var prevReel = $('.b_control.active').attr('data-reel');

        var currentTime = videojs(window['reel_' + prevReel]).currentTime();

        videojs(window['reel_' + reelId]).play();

        $('#bonus_' + reelId).css('top', '0px');

        $('#bonus_' + otherReels[0] + ', #bonus_' + otherReels[1]).css('top', '100%');
        $('.b_control').removeClass('active');
        $('.control_' + reelId).addClass('active');

        videojs(window['reel_' + reelId]).currentTime(currentTime);

        videojs(window['reel_' + otherReels[0]]).pause();
        videojs(window['reel_' + otherReels[1]]).pause();
    }

    $(document).on('keypress', function (e) {
        if (jQuery('#bonus_reels').css('display') == 'block') {
            e = e || window.event;
            var pressed = String.fromCharCode(e.keyCode || e.which).toLocaleLowerCase();
            switch (pressed) {
                case 'h':
                    $('.bonus_selector').hide();
                    $('.bonus_video_wrap, .bonus_controls').show();
                    switchReel('h');
                    break;
                case 'b':
                    $('.bonus_selector').hide();
                    $('.bonus_video_wrap, .bonus_controls').show();
                    switchReel('b');
                    break;
                case 'n':
                    $('.bonus_selector').hide();
                    $('.bonus_video_wrap, .bonus_controls').show();
                    switchReel('n');
                    break;
            }
        } else {
            return true;
        }

    });

    $('.mobile_side_menu .menu-item-has-children > a').click(function (e) {


        $(this).parent().toggleClass('menu_opened');
        $(this).siblings('.sub-menu').slideToggle();

        e.preventDefault();
        return false;
    });

    $('.mobile_nav_menu').click(function () {
        $(this).toggleClass('opened');
        $('.mobile_side_menu').toggleClass('show_menu');
    });

});


Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
