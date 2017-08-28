


$('.enter').click(function() {
	var titleInput = $('.title-input').val()
	var urlInput = $('.url-input').val()
	addTitle(titleInput, urlInput)
})

function addTitle(title, url){
	//take the values of the input fields assign those to bookmark list section.
	console.log(title, url)
}