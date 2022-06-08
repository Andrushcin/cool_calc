var disp = document.getElementById("disp");
var res_field = document.getElementById("res_field");
var history_ = [];

function process_expr(expr) {
	try {
		var result = eval(expr);
	} catch (err) {
		var result = "Error";
	}
	return result;
}

window.onclick = function(Event) {
	if (Event.target.className == 'but') {
		var but = Event.target;
		res_field.style.fontSize = '7vw';
		
		for (let i = 0; i < 20; i++) {
			if (but.innerHTML == "10^") {
				var symbol = '10**';
		    	break;
			}
			if (but.innerHTML == "^") {
		    	var symbol = '**';
		    	break;
			} else {
				var symbol = but.innerHTML;
				break;
			}
		}
		for (let i = 0; i < 20; i++) {
			if (symbol == '=') {
				math_expr = res_field.innerHTML;
				disp.innerHTML = math_expr;
				var result = process_expr(math_expr);
				res_field.innerHTML = result;
				res_field.style.fontSize = '10vw';

				var history_elem = String(math_expr+"<br>"+"="+result+"<br>");
				history_.push(history_elem);
				var hist = "";
				for (let i = 0; i < history_.length;  i++) {
					hist = hist + history_[i];
				}
				disp.innerHTML = hist;
				break;
			} 
			if (symbol == "Del") {
				res_field.innerHTML = '0';
				break;
			} 
			if (symbol == 'AC') {
				disp.innerHTML = "";
				res_field.innerHTML = "0";
				history_ = [];
				break;
			} 
    		if ((res_field.innerHTML == '0' && symbol != ".") || (res_field.innerHTML == "Error")) {
    			res_field.innerHTML = symbol;
    			break;
    		} else {
		    	var old_result = res_field.innerHTML;
		    	res_field.innerHTML = old_result + symbol;
		    	break;
		    }
	    }
	}
};
