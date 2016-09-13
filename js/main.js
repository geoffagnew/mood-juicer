$(function() {

	var testGroup = ['blue', 'green', 'yellow'];
	var previousVid = '';
	// var currentVid = '';

	$('#boost-btn').on('click', function(e) {
		e.preventDefault();
		// print the previous number selected
		$('#test-block-previous').html('This is the previous number: ' + previousVid);
		// get the current number selected
		var currentVid = randomNumber();
		// call function to compare values
		var printVid = numberComparison(currentVid, previousVid);
		// print the video to the page
		$('#test-block').html('This is the current number selected: ' + printVid);
		// finally store the current number for future use in storePrevNumber
		storePrevNumber(currentVid);
	});

	// compare current and previous values 
	function numberComparison(current, previous) {
		// create local variable for current randomized number
		var randomized = current;
		// check if current value is equal to previous value
		while (randomized === previous) {
		 	$('#test-block-alert').html('Oops we have a duplicate. The previous number was: ' + previous + ' and the original randomized number is ' + randomized);
		 	randomized = randomNumber();
		}
		return randomized;
	}

	// find a random number
	function randomNumber() {
 		var vidNumber = testGroup.length;
 		var number = Math.floor(Math.random() * vidNumber);
 		return number;
 	}

 	// store the value of previous number in the previousVid variable
 	function storePrevNumber(val) {
 		previousVid = val;
 	}

 	// FUNCTION FOR TESTING COMPARISON
 	// (function () {
	// 	var randomized = randomNumber();
	// 	var prev = 5;
	// 	var i = 0;

	// 	while (randomized === prev) {
	// 	 	$('#test-block-2').html('Oops we have a duplicate. The previous number was: ' + prev + ' and the original randomized number is ' + randomized);
	// 	 	randomized = randomNumber();
	// 	}
	// 	$('#test-block').html('This is the current number selected: ' + randomized);
	// })();


	// var videos = ['https://www.youtube.com/embed/Yt6Ig18C8dA', 'https://www.youtube.com/embed/-F5HwiGm7lg','https://www.youtube.com/embed/W6p2onuGlpo'];

 // 	// Event listener for randomizer
 // 	$('#boost-btn').on('click', function(e) {
 // 		e.preventDefault();
 // 		// var currentVideo = pickVideo();
	// 	var vidContainer = $('#video-output iframe').attr('src', pickVideo());
	// 	var src = pickVideo();
	// 	// setPrevVid(pickVideo());
	// 	// console.log('This is the current video: ' + currentVideo);
	// 	// previousVideo = pickVideo();
	// 	$('#test-block').html(src);
	// 	// 
 // 	});


 // 	function randomNumber() {
 // 		var vidNumber = videos.length;
 // 		var number = Math.floor(Math.random() * vidNumber);
 // 		return number;
 // 	}

 // 	function pickVideo() {
 // 		var videoSelect = videos[randomNumber()];
 // 		return videoSelect;
 // 	}


});
