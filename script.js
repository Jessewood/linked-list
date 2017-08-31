// This event listener drives the whole app around the enter button. 
// Listens for a click and appends a new card. Updates card count. 
// Disables enter button.

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
	$('.title-input').focus();
	$('.unread-number').text(unreadCardCount());
	$('.enter').attr('disabled', true);
});

//Toggles the class for the read cards. Updates read and unread bookmark count on click.
//Turns the clear bookmarks on if there is at least one read, turns off if there's none. 

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

//Targeting article delete button is inside so we can remove entire article.
//Updates all bookmark counters.

$('.bookmark-list').on('click', '.delete', function(){
	$(this).closest('article').remove();
	updateCardCount();
	$('.bookmark-number').text($('.card').length);
	$('.read-number').text($('.read-card').length);
	$('.unread-number').text(unreadCardCount());
});

//Force the URL in input field

$('.url-input').on('focus', function(){
	$(this).val('http://')
});

//Sets event listeners for inputs on every keyup to see if buttons should be disabled

$('.url-input').on('keyup', enableEnter);

$('.title-input').on('keyup', enableEnter);

//Clear bookmarks button on click targets and removes cards marked read.
//Also updates all bookmark counts.

$('.clear-bookmarks').on('click', function(){
	$('.read-card').remove('.card');
	$('.read-number').text($('.read-card').length);
	$('.bookmark-number').text($('.card').length);
	$('.clear-bookmarks').attr('disabled', true);
});

//Function to update number of unread cards.

function unreadCardCount() {
	var unreadCards = updateCardCount() - readCards();
	return unreadCards;
};

//Updates total bookmark count.

function updateCardCount() {
	var cardCount = $('.card').length;
	return cardCount;
};

//Updates number of read cards.

function readCards () {
	var readCardCount = $('.read-card').length;
	return readCardCount;
};

//Forces user to keep the http:// in the url input or enter will disable.

function enableEnter() {
	var titleInput = $('.title-input').val()
    var urlInput = $('.url-input').val()
    if (urlInput.length <= 7) {
    	$('.enter').attr('disabled', true);
    } else if (titleInput !== "" && urlInput !== ""){
        $('.enter').attr('disabled', false);
    }
};



