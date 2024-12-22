const container = document.querySelector("#toast");
function hideToast() {
	container.style.display = "none";
}

function showToast(toastType,message) {
	container.style.display = "block";
	let header = "You have successfully logged in.";
	if (toastType == "error") {
		header = "There has been an error.";
		container.classList.add("error");
	}
	container.querySelector("h3").innerHTML = header;
	container.querySelector("div").innerHTML = message;
	setTimeout(function () {
		hideToast();
	}, 20000)
}


