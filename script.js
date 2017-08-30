$('.enter').click(function() {
	var titleInput = $('.title-input').val()
	var urlInput = $('.url-input').val()
	var cardTemplate = `<article class="card">
			<h3 class="website-title website-title-1">  ${titleInput} </h3>
			<p class="website-url website-url-1"><a href="${urlInput}">  ${urlInput}  </a></p>
			<button class="read-style">Read</button><button class="delete">Delete</button>
		</article>`

	$('.bookmark-list').append(cardTemplate);
});

$('.bookmark-list').on('click', '.read-style', function(){
	$(this).closest('article').toggleClass('read-card')
})

$('.bookmark-list').on('click', '.delete', function(){
	$(this).closest('article').remove()
})

$('.url-input').on('click', function(){
	$(this).val('http://')
})
