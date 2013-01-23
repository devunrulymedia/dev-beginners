		(function getTemplateAjax(path) {
	        var source;
	        var template;

	        $.ajax({
	            url: path,
	            cache: true,
	            success: function(data) {
	                source    = data;
	                template  = Handlebars.compile(source);
	                var tpl = $('<div id="target">').html(template({}));
	                $('body').append(tpl);
	            }               
	        });         
	    })('/dev-beginners/templates/feedback_form.handlebars');