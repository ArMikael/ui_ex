$(document).ready(function() {
	'use strict';

	console.log('JS is up!');

	$('.draggable-item').draggable();
	$('.draggable-item').selectable();
	$('.flow-panel').droppable();
});