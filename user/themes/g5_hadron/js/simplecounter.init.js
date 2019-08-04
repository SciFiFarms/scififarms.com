jQuery(document).ready(function () {
    jQuery('[data-simplecounter-id]').each(function(index) {
        var $this = jQuery(this), finalDate = jQuery(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(''
            + '<span class="counter-block"><span class="number">%-D</span><span class="word">%!D:' + jQuery( this ).attr('data-simplecounter-daytext') + ',' + jQuery( this ).attr('data-simplecounter-daystext') + ';</span></span> '
            + '<span class="counter-block"><span class="number">%H</span> <span class="word">%!H:' + jQuery( this ).attr('data-simplecounter-hourtext') + ',' + jQuery( this ).attr('data-simplecounter-hourstext') + ';</span></span> '
            + '<span class="counter-block"><span class="number">%M</span> <span class="word">%!M:' + jQuery( this ).attr('data-simplecounter-minutetext') + ',' + jQuery( this ).attr('data-simplecounter-minutestext') + ';</span></span> '
            + '<span class="counter-block"><span class="number">%S</span> <span class="word">%!S:' + jQuery( this ).attr('data-simplecounter-secondtext') + ',' + jQuery( this ).attr('data-simplecounter-secondstext') + ';</span></span>'
        ));
    });
});
});
