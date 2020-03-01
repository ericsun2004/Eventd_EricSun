
let a = 0;
let b = 0;

let smile =  0;

let dum;

	console.log(document.getElementById("emoji").innerHTML);

document.addEventListener("keydown", event => {



	if ((event.isComposing || event.keyCode === 38) && (smile == 0)) {



		a = a + 1;


		console.log(a);

		console.log(b);


		document.getElementById('emoji').style.fontSize = (100 + (a * 10 )+ "%");

		dum = (100 + a * 10);

		if (dum == 1200) {
			document.getElementById("emoji").innerHTML = "&#127755";
			smile = 1;
		}
	}

	else if ((event.isComposing || event.keyCode === 40) && (smile == 0)) {



		a = a - 1;


		document.getElementById('emoji').style.fontSize = (100 + (a * 10 ) + "%");

		console.log(a);

		console.log(b);

	}

});



