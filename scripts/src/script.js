function init() {
//		alert("hello world!") ;
		$("#clickable_paragraph").click(addParagraph) ;
	}
function addParagraph() {
	var jquery_object = $("<p>This is the added paragraph</p>") ;
	jquery_object.hide() ;
	$("body").append(jquery_object) ;
	jquery_object.fadeIn() ;
	}