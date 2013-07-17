/*========================================================

	Descripción
	-Añade a las clases .forum- a las #f correspondientes

========================================================*/
function setForumClass() {
	var forumArray = new Array();
	/*
	
	forumArray. Cada elemento se forma con la estructura 'id|clase' en donde
		id: id del foro
		clase: clase del foro que llevará
	
	*/
	forumArray.push('1|forum-only-title');
	forumArray.push('3|forum-tall-image');
	
	var limit = forumArray.length;
	for (var i=0; i<limit; i++) {
		var forumId = forumArray[i].split('|')[0];
		var forumClass = forumArray[i].split('|')[1];
		
		$('#f' + forumId).addClass(forumClass);
	}
};