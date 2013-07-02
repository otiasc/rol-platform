/*========================================================

	Descripción
	-Añade a las clases .post un atributo id #p seguido
	de la id del post correspondiente
	
	Script ubicado en
	-Todas las páginas

========================================================*/
$(document).ready(function(e) {
	$('.post').each(function(index, element) {
		var url = $(this).find('.url-post').attr('href');
		var id = url.slice(url.indexOf('#')+1);
		$(this).attr('id', 'p' + id);
    });
});
