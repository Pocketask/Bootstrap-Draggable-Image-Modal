
// define modal draggable
$("#imgModalDialog").draggable({
	handle: ".modal-content"
});

// initial modal layout
var target = document.getElementById('imgModalImg');
var dialog = document.getElementById('imgModalDialog');
var content = document.getElementById('zoom');
var angle = 0;
$('#imgModal').on('show.bs.modal', function() {
  	dialog.style.width = target.width + 20 + 'px';
  	content.style.height = 'auto';
  	target.style.margin = '0 0 10px 0';
});
$('#imgModal').on('hide.bs.modal', function() {
	target.style.transform = '';
	angle = 0;
	target.width = 500;
	target.removeAttribute("height");
})

// resize function so that modal can resize every time after img modified
var resize = function() {
	if (angle / 90 % 2 === 1 || angle / 90 % 2 === -1) {
		dialog.style.width = target.height + 20 + 'px';
		content.style.height = target.width  + 10 + 'px';
		target.style.margin = -(target.height - target.width) / 2 + 'px ' + (target.height - target.width) / 2 + 'px';
	} else {
		dialog.style.width = target.width + 20 + 'px';
		content.style.height = target.height + 10 + 'px';
		target.style.margin = 0;
	}
};
var rotateL = function() {
	angle += 90;
	target.style.transform = 'rotate(' + angle + 'deg)';
	resize();
};
var rotateR = function() {
	angle -= 90;
	target.style.transform = 'rotate(' + angle + 'deg)';
	resize();
};
var zoomI = function() {
	target.height = target.height + 200;
	target.width = target.width + 200;
	resize();
};
var zoomO = function() {
	if (target.width > 500) {
		target.height = target.height - 200;
		target.width = target.width - 200;
		resize();
	}
};