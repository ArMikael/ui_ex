$(document).ready(function() {
	'use strict';

	console.log('JS is up!');

	// Making Elements Draggable
	$('.draggable-item').draggable({
		revert: 'invalid',
		connectTo: '.flow-panel'
	});

	// Making Dropable Panel
	$('.flow-panel').droppable({
		tolerance: "fit"
	});



	// Open Modal on Double click
	$('.draggable-item').on('dblclick', function(e) {

		if (!$(this).next().hasClass('visible')) {
			$(this).next().fadeIn('fast').toggleClass('visible');
		} else {
			$(this).next().fadeOut('fast').toggleClass('visible');
		}
	});


	// Modal Window Functional Buttons
	var $selectedValue;

	// Clicking OK on Modal window 
	$('.ok-btn').on('click', function() {

		// Checking which modal was activated and running specific function
		if ($(this).parent().attr('id') === 'modalBtns1') {
			changeBtnStyle();

		} else if ($(this).parent().attr('id') === 'modalBtns2') {
			changeProgressStyle();

		} else if ($(this).parent().attr('id') === 'modalBtns3') {
			changeThmbStyle();

		} else if ($(this).parent().attr('id') === 'modalBtns4') {
			changeIconStyle();

		} else if ($(this).parent().attr('id') === 'modalBtns5') {
			changeMediaStyle();
		}

		$(this).closest('.modal-window').fadeOut().removeClass('visible');
	});


	// Changing button styles
	var changeBtnStyle = function() {
		$selectedValue = $('#selectBox1 option:selected').val();

		if (!$('#dragBtn').hasClass($selectedValue)) {
			$('#dragBtn').removeClass('label-primary label-danger')
			$('#dragBtn').addClass($selectedValue);
		}
	};


	// Changing progress bar styles 
	var changeProgressStyle = function() {
		$selectedValue = $('#selectBox2 option:selected').val();

		$('#dragProgress').css('width', $selectedValue);
	}


	// Changing thumbnail styles
	var changeThmbStyle = function() {
		$selectedValue = $('#selectBox3 option:selected').val();

		if (!$('#dragThumbn').hasClass($selectedValue)) {
			$('#dragThumbn').removeClass();
			$('#dragThumbn').addClass($selectedValue);
		}
	}

	// Changing glyphicon styles
	var changeIconStyle = function() {
		$selectedValue = $('#selectBox4 option:selected').val();

		if (!$('#dragIcon').hasClass($selectedValue)) {
			$('#dragIcon').removeClass('rotate-left rotate-right');
			$('#dragIcon').addClass($selectedValue);
		}
	}


	// Changing media box styles
	var changeMediaStyle = function() {
		$selectedValue = $('#selectBox5 option:selected').val();

		if (!$('#dragMedia').hasClass($selectedValue)) {
			$('#dragMedia').removeClass();
			$('#dragMedia').addClass($selectedValue);
		}
	} 


	// Closing modal on clicking "Cancel" button
	$('.cancel-btn').on('click', function() {
		$(this).closest('.modal-window').fadeOut('fast').removeClass('visible');
	});



	
});
