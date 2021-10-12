(function(){
    jQuery(document).ready(function () {
        AudioSetup = false,
        AllAudioJS = null;
        jQuery('[data-audioplayer-id]').each(function(index) {
            var audiocontainer = jQuery(this),
            AudioJS;

            if (!AudioSetup) {
                AllAudioJS = audiojs.createAll({ // Initialize Audio JS
                    trackEnded: function(e) {
                        var container = jQuery('#' + this.wrapper.id).closest('[data-audioplayer-id]');
                        next = jQuery('li.playing', container).next();
                        if (!next.length) next = jQuery('ol li', container).first();
                        next.click();
                    }
                });
                AudioSetup = true;
            }

            AudioJS = AllAudioJS[index];

            // Load in a track on click
            jQuery('ol li', audiocontainer).click(function(e) {
                e.preventDefault();
                jQuery(this).addClass('playing').siblings().removeClass('playing');
                jQuery('.g-audioplayer-cover', audiocontainer).attr('alt', jQuery('a', this).text());
                jQuery('.g-audioplayer-cover', audiocontainer).attr('src', jQuery('a', this).attr('data-cover'));
                jQuery('.g-audioplayer-trackinfo', audiocontainer).html(jQuery('a', this).first().text());
                AudioJS.load(jQuery('a', this).attr('data-src'));
                AudioJS.play();
            });

            jQuery('.next', this).click(function(e) {
                var next = jQuery('li.playing', audiocontainer).next();
                if (!next.length) next = jQuery('ol li', audiocontainer).first();
                next.click();
            });
            jQuery('.previous', this).click(function(e) {
                var prev = jQuery('li.playing', audiocontainer).prev();
                if (!prev.length) prev = jQuery('ol li', audiocontainer).last();
                prev.click();
            });

            // Keyboard shortcuts
            jQuery(document).keydown(function(e) {
                var unicode = e.charCode ? e.charCode : e.keyCode;
                // right arrow
                if (unicode == 39) {
                    var next = jQuery('li.playing', audiocontainer).next();
                    if (!next.length) next = jQuery('ol li').first();
                    next.click();
                    // back arrow
                } else if (unicode == 37) {
                    var prev = jQuery('li.playing', audiocontainer).prev();
                    if (!prev.length) prev = jQuery('ol li', audiocontainer).last();
                    prev.click();
                    // spacebar
                } else if (unicode == 32) {
                    AudioJS.playPause();
                }
            });

            LoadFirst.call(this, AudioJS);
        });
    });

    var LoadFirst = function(audio) {
        var first = jQuery('ol a', this).attr('data-src'),
        firstcover = jQuery('ol a', this).attr('data-cover'),
        firsttrackinfo = jQuery('ol a', this).html();

        jQuery('ol li', this).first().addClass('playing');
        audio.load(first);

        jQuery('.g-audioplayer-cover', this).attr('src', firstcover);
        jQuery('.g-audioplayer-cover', this).attr('alt', jQuery('ol a', this).first().text());
        jQuery('.g-audioplayer-trackinfo', this).html(firsttrackinfo).text();
    }
})();

    jQuery( ".g-audioplayer-button" ).click(function( event ) {
        event.stopPropagation();
    });
