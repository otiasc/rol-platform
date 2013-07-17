/*========================================================

	Descripción
	-Coloca un div.image-container en las imágenes de las
	descripciones de los subforos

========================================================*/
function setImageContainer() {
	$('.forum').each(function(index, element) {
		var descImg = $(this).find('.description img').attr('src');
		var desc = $(this).find('.description').text();
		if (descImg.length>0) {
			var h = '<div class="image-container"><img src="' +  descImg  + '" />' + '</div><p>' + desc + '</p>';
			$(this).find('.description').html(h);
		}
    });
}