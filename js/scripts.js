var navigationWidth = 3200;
var navigationContainer = document.getElementsByTagName('nav')[0];

function onMouseMove(e) {

	var clientWindowWidth = document.body.clientWidth;

	var offset = Math.floor(calculateNavigationOffset(e.clientX, 0, clientWindowWidth, 0, (navigationWidth - clientWindowWidth)));
	offset = offset - (offset * 2);

	navigationContainer.style.transform = "translate(" + offset + "px)"
}

function calculateNavigationOffset(clientXOffset, clientWindowStartX, clientWindowStopX, navigationStartX, navigationStopX) {
	return ((clientXOffset - clientWindowStartX) / (clientWindowStopX - clientWindowStartX)) * (navigationStopX - navigationStartX) + navigationStartX;
}