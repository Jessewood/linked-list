function unreadCardCount() {
	var unreadCards = updateCardCount() - readCards();
	return unreadCards;
};


$('.enter').click(function() {
	var titleInput = $('.title-input').val();
	var urlInput = $('.url-input').val();
	var cardTemplate = `<article class="card">
			<h3 class="website-title website-title-1">  ${titleInput} </h3>
			<p class="website-url website-url-1"><a href="${urlInput}">  ${urlInput}  </a></p>
			<button class="read-style">Read</button><button class="delete">Delete</button>
		</article>`;
	$('.bookmark-list').append(cardTemplate);
	updateCardCount();
	$('.bookmark-number').text($('.card').length);
	$('.title-input').val("");
	$('.url-input').val("");
	$('.enter').attr('disabled', true);
	$('.title-input').focus();
	$('.bookmark-number').text($('.card').length);
	$('.unread-number').text(unreadCardCount());
});

$('.bookmark-list').on('click', '.read-style', function(){
	$(this).closest('article').toggleClass('read-card')
	readCards();
	$('.read-number').text($('.read-card').length);
	$('.unread-number').text(unreadCardCount());
	if ($('.read-card').length > 0){
		$('.clear-bookmarks').attr('disabled', false);
	}
	else {
		$('.clear-bookmarks').attr('disabled', true);
	}

});

$('.bookmark-list').on('click', '.delete', function(){
	$(this).closest('article').remove();
	updateCardCount();
});


function updateCardCount() {
	var cardCount = $('.card').length;
	return cardCount;
};

function readCards () {
	var readCardCount = $('.read-card').length;
	return readCardCount;
};




$('.url-input').on('click', function(){
	$(this).val('http://')
});

$('.url-input').on('keyup', enableEnter)
$('.title-input').on('keyup', enableEnter)

function enableEnter() {
	var titleInput = $('.title-input').val()
    var urlInput = $('.url-input').val()
    if (urlInput.length <= 7) {
    	$('.enter').attr('disabled', true);
    	console.log('if');
    } else if (titleInput !== "" && urlInput !== ""){
        $('.enter').attr('disabled', false);
        console.log("else if");
    }
};

$('.clear-bookmarks').on('click', function(){
	$('.read-card').remove('.card');
	$('.read-number').text($('.read-card').length);
})


