jQuery(document).ready(function () {
    jQuery('[data-mosaic-id]').each(function(index) {
        var mainContainer = jQuery(this)
        var navContainer = jQuery('.g-mosaic-nav', mainContainer);

        jQuery('.g-mosaic-grid', mainContainer).masonry({
            itemSelector: '.g-mosaic-grid-item',
            columnWidth: '.g-mosaic-grid-sizer',
            percentPosition: false,
            resize: false
        });

        var Shuffle = window.Shuffle;
        var element = document.querySelector('.g-mosaic-grid', mainContainer);
        var sizer = element.querySelector('.g-mosaic-grid-sizer', mainContainer);

        var shuffleInstance = new Shuffle(jQuery('.g-mosaic-grid', mainContainer), {
            itemSelector: '.g-mosaic-grid-item',
            sizer: sizer,
            group: jQuery('.selected', navContainer).attr('data-group')
        });

        jQuery('.g-mosaic-nav-container', navContainer).on('click', function() {
            jQuery('.g-mosaic-nav-item', navContainer).toggleClass('clicked');
        });
        jQuery('.g-mosaic-nav-item', navContainer).click(function() {
            jQuery('.g-mosaic-nav-item', navContainer).removeClass('selected');
            jQuery(this).addClass('selected');
            shuffleInstance.filter(jQuery(this).attr('data-group'));
        });
    });
});
