var x = 0;
var y = 0;

dot.style.left = 12 + "px";
dot.style.top = 200 + "px";
    
let timeLim = 0;


	
document.addEventListener('mousemove', dotMove);


function dotMove(e) {

	if(Date.now() - timeLim > 250) {
		x = e.pageX;
		y = e.pageY;

      		dot.style.left = x + "px";
       	 	dot.style.top = y + "px";

		timeLim = Date.now();

	}
		
}






