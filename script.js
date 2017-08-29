$('.enter').click(function() {
	var titleInput = $('.title-input').val()
	var urlInput = $('.url-input').val()

	$('.bookmark-list').append(
	`<article class="card">
			<h3 class="website-title website-title-1">  ${titleInput} </h3>
			<p class="website-url website-url-1"><a href="${urlInput}">  ${urlInput}  </a></p>
			<button class="read read-style">Read</button><button class="delete">Delete</button>
		</article>`
		);
})
