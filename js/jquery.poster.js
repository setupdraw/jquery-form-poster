/*
*	Setupdraw - Rob Dunne
*	http://setupdraw.com
*	September 2013
*	jquery.poster.js
*/
(function($){
   var FormPoster = function(element) {
       var obj = $(element);
   };

   $.fn.formposter = function(options) {
       return this.each(function() {
       	   var element    = $(this);
           var formposter = new FormPoster(this);

           // AJAX things
           $(element).submit(function() {	
           		// Remove any previous messages
           		$('#success,#error').remove();
           		
           		$.ajax({
					url: $(this).attr('action'),
					type: "post",
					data: $(this).serialize(),
					success: function(data) {
						// Show a success message
						$(element).prepend('<div id="success">'+options.success+'</div>');
					},
					error: function() {
						// Do some error handling
						$(element).prepend('<div id="error">'+options.error+'</div>');
					}
				});
           	
           		return false;
           });
       });
   };
})(jQuery);