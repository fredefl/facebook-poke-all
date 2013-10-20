document.querySelector("._4-u2")
	.insertAdjacentHTML('beforeend', '<a class="pokeAll _42ft _4jy0 _4jy3 _4jy1 selected" role="button"><img class="mrs img" src="https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/Frw9PczBwr2.png" alt="" width="24" height="24" title="">Prik alle</a>');
document.querySelector(".pokeAll").addEventListener('click', function() {
	Array.prototype.slice.call(document.querySelectorAll("a[ajaxify*='is_suggestion=0']._4jy0"))
		.every(function (element, index, array) {
			element.click();
			return true;
		});
});