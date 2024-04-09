/*
	Name: Joseph Jungerheld III
	File Name: script.js
	Date: 4/4/2023
*/

//Hamburger menu
function hamburgerMenu() {
	var menu = document.getElementById("links");
	var logo = document.getElementById("me");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}