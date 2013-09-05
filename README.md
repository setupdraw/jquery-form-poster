<h2>Setupdraw jQuery Form Poster Plugin</h2>
A plugin to remove the need to write repeated jQuery ajax posts for HTML forms.

<h2>Important source files</h2>
js/jquery.poster.js 	- jQuery and JavaScript<br />
index.html 				- HTML form to test
form.php				- serverside file

<h2>Usage</h2>

1. Add jquery.poster.js after jQuery in the document head.

2.  Use the following code in your js document ready, where #my-form is the ID of your form.<br/>
	Pass custom success and error messages as options.<br/>
	```
	$(document).ready(function() {
		$('#my-form').formposter({
			success: 'Thank you, form successfully posted!',
			error: 'An error occurred, please try again.'
		});
	});
	```

3.  Include the action attribute as usual in your HTML form.
