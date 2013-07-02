/*========================================================

	Descripción
	-Añade a las clases .topic un atributo id #t seguido
	de la id del foro correspondiente
	
	Script ubicado en
	-Todas las páginas

========================================================*/
$(document).ready(function(e) {
	$('.topic').each(function(index, element) {
		var url = $(this).find('.url-topic').attr('href');
		var id = url.slice(1, url.indexOf('-'));
		$(this).attr('id', id);
    });
});
