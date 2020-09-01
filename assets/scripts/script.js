
//Sidebar
function w3_open() {
	document.getElementById("sideBar").style.display = "block";
	document.getElementById("Overlay").style.display = "block";

}

function w3_close() {
	document.getElementById("sideBar").style.display = "none";
	document.getElementById("Overlay").style.display = "none";
}

//Link between sidebar and BodyContent

function opensidebarItemML(evt, sidebarItemName) {

	var i, x, tablinksML;
	x = document.getElementsByClassName("sidebarItem");

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	tablinksML = document.getElementsByClassName("tablinkML");

	for (i = 0; i < x.length; i++) {
		tablinksML[i].className = tablinksML[i].className.replace(" w3-red", "");
	}

	document.getElementById(sidebarItemName).style.display = "block";
	evt.currentTarget.className += " w3-red";
	w3_close();
}

function opensidebarItem(evt, sidebarItemName) {

	var i, x, tablinks;
	x = document.getElementsByClassName("sidebarItem");

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablink");

	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
	}

	document.getElementById(sidebarItemName).style.display = "block";
	evt.currentTarget.className += " w3-red";
	w3_close();
}

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		document.getElementById("navBar").style.padding = "15px 5px";
		document.getElementById("logo").style.fontSize = "25px";
	} else {
		document.getElementById("navBar").style.padding = "40px 5px";
		document.getElementById("logo").style.fontSize = "35px";
	}
}

var modal = document.getElementById("portfolioModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("btnModal1");
var modalImg = document.getElementById("imgModal1");
var captionText = document.getElementById("caption1");
img.onclick = function () {
	modal.style.display = "block";
	modalImg.src = this.getElementById("imgModal1");
	captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
	modal.style.display = "none";
}

var modal2 = document.getElementById("portfolioModal2");
var img2 = document.getElementById("btnModal2");
var modalImg2 = document.getElementById("imgModal2");
var captionText2 = document.getElementById("caption");
img2.onclick = function () {
	modal2.style.display = "block";
	modalImg2.src = this.getElementById("imgModal2");
	captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
	modal2.style.display = "none";
}



// Certificates manual-slideshow

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-opacity-off";
}