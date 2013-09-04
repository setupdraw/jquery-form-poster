/*
*	Setupdraw - Rob Dunne
*	September 2013
*	jquery.poster.js
*/
(function($){
   var FormPoster = function(element) {
       var obj = $(element);
       var obj = this;
   };

   $.fn.formposter = function() {
       return this.each(function() {
       	   var element    = $(this);
           var formposter = new FormPoster(this);
           element.data('formposter', formposter);

           // AJAX things
           $(element).submit(function() {
           		$.ajax({
					url: $(this).attr('action'),
					type: "post",
					data: $(this).serialize(),
					success: function(data) {
						// Show a success message
						$(element).prepend('<div id="success">Thank you, form successfully posted!</div>');
					},
					error: function() {
						// Do some error handling
						$(element).prepend('<div id="error">An error occurred, please try again.</div>');
					}
				});
           	
           		return false;
           });
       });
   };
})(jQuery);