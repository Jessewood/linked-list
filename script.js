

$('.enter').click(function() {
	var titleInput = $('.title-input').val()
	var urlInput = $('.url-input').val()
	// enableEnterButton();
	var cardTemplate = `<article class="card">
			<h3 class="website-title website-title-1">  ${titleInput} </h3>
			<p class="website-url website-url-1"><a href="${urlInput}">  ${urlInput}  </a></p>
			<button class="read-style">Read</button><button class="delete">Delete</button>
		</article>`
	$('.bookmark-list').append(cardTemplate);
	updateCardCount()
	$('.bookmark-number').text($('.card').length)
});

$('.bookmark-list').on('click', '.read-style', function(){
	$(this).closest('article').toggleClass('read-card')
})

$('.bookmark-list').on('click', '.delete', function(){
	$(this).closest('article').remove();
	updateCardCount();
});


function updateCardCount() {
	var cardCount = $('.card').length;
	console.log(cardCount)
}


$('.url-input').on('click', function(){
	$(this).val('http://')
})

$('.url-input').on('keyup', function(){
	var titleInput = $('.title-input').val()
    var urlInput = $('.url-input').val()
    if (titleInput !== "" && urlInput !== ""){
        $('.enter').attr('disabled', false);
        console.log("if")
        } else {
        $('.enter').attr('disabled', true);
        console.log('else')
    }
});



