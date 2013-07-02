/*========================================================

	Descripción
	-Añade a las clases .forum un atributo id #f seguido
	de la id del foro correspondiente
	
	Script ubicado en
	-Todas las páginas

========================================================*/
$(document).ready(function(e) {
	alert($('.forum').length);
	$('.forum').each(function(index, element) {
		var url = $(this).find('.url-forum').attr('href');
		var id = url.slice(1, url.indexOf('-'));
		$(this).attr('id', id);
    });
});