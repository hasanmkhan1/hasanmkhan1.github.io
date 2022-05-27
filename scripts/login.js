var attempt = 3;

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if(username == "user" && password == "name") {
		alert("Login successful");
		window.location = "dashboard.html";
		return false;

	} else {
		attempt--;
		alert("You have left " + attempt + " attempts.");
	} 
	
	if (attempt == 0) {
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
	}
}


function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if(!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		
		for(i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}