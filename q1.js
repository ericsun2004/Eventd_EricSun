
let a = 0;

document.getElementById("paragraph").addEventListener('click', change);

function change () {

	a++;

	if (a == 1) {
		document.getElementById('paragraph').style.color = "red";		
	}

	else if (a == 2) {
		document.body.style.background = "green";
	}

	else if (a == 3) {
    		let element = document.getElementById('paragraph');
    		element.parentNode.removeChild(element);
	}

}
