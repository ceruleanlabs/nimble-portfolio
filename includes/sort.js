jQuery(document).ready(function($) {
    
    // Portfolio Filtering
    if ($.isFunction($.fn.quicksand)) {
    	var $items = $('.nimble-portfolio .-items').clone(true);
    }

    $('.nimble-portfolio .-filter').click(function(e) {

        e.preventDefault();

        $('.nimble-portfolio .-filter.active').removeClass('active');
        $(this).addClass('active');

        var filterVal = $(this).attr('rel');
        if (filterVal === '*') {
	    if ($.isFunction($.fn.quicksand)) {
		$('.nimble-portfolio .-items').quicksand($items.find('.-item'), { attribute: 'id' }, function(){ $('.nimble-portfolio .-items').css({ width: 'auto', height: 'auto' }); } );
	    } else {
		$('.nimble-portfolio .-item.hidden').fadeIn('normal').removeClass('hidden');
	    }            
        } else {
	    if ($.isFunction($.fn.quicksand)) {
		$('.nimble-portfolio .-items').quicksand($items.find('.' + filterVal), { attribute: 'id' }, function(){ $('.nimble-portfolio .-items').css({ width: 'auto', height: 'auto' })} );
	    } else {
		$('.nimble-portfolio .-item').each(function() {
                  if (!$(this).hasClass(filterVal)) {
                    $(this).fadeOut('slow').addClass('hidden');
                  } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                  }
                });
	    }
        }

        // Apply lightbox gallery only to current items
        // $('.nimble-portfolio').trigger("nimble_portfolio_lightbox", {items: $("a[rel^='nimblebox']", ".nimble-portfolio .-item:not(.hidden)")});
    });

    // Apply lightbox gallery
    // $('.nimble-portfolio').trigger("nimble_portfolio_lightbox", {items: $("a[rel^='nimblebox']")});

});
