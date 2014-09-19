
function hide_top_bar(){
	// Hide Top Bar.
	document.getElementById("masthead-positioner").style.display="none";
	document.getElementById("masthead-positioner-height-offset").style.display="none";
	// Add button that shows the hidden stuff.
	var btn = document.createElement("button");
	btn.id = "show-masthead";
	btn.style["position"] = "fixed";
	btn.style["top"] = "0px";
	btn.style["left"] = "5px";
	btn.style["width"] = "15px";
	btn.style["height"] = "5px";
	btn.style["background-color"] = "#FFF";
	//btn.style["background-image"] = "url('" + chrome.extension.getURL("logo.png") + "')";
	btn.onclick = function(){
		document.body.removeChild(document.getElementById("show-masthead"));
		show_top_bar();
	};
	// Add to body.
	document.body.appendChild(btn); 
}
hide_top_bar();
function  show_top_bar(){
	// Hide Top Bar.
	document.getElementById("masthead-positioner").style.display="block";
	document.getElementById("masthead-positioner-height-offset").style.display="block";
	// Add button that shows the hidden stuff.
	var btn = document.createElement("button");
	btn.id = "hide-masthead";
	btn.style["z-index"] = "2147483647";
	btn.style["position"] = "fixed";
	btn.style["top"] = "45px";
	btn.style["left"] = "5px";
	btn.style["width"] = "15px";
	btn.style["height"] = "5px";
	btn.style["background-color"] = "#FFF";
	//btn.style["background-image"] = "url('" + chrome.extension.getURL("logo.png") + "')";
	btn.onclick = function(){
		document.body.removeChild(document.getElementById("hide-masthead"));
		hide_top_bar();
	};
	// Add to body.
	document.body.appendChild(btn); 
}
