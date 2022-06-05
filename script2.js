var res = document.getElementById("disp");

window.onclick = function(Event) {
	if (Event.target.className == 'but') {
		var but = Event.target;

		if (but.innerHTML == "^") {
	    	var symbol = '**';
		} else {
			var symbol = but.innerHTML;
		}
		if (symbol == '=') {
			try {
				res.innerHTML = eval(res.innerHTML);
			} catch (err) {
				res.innerHTML = "Error";
			}
		} else {
			if (symbol == "Del") {
				res.innerHTML = '0';
			} else {
	    		if ((res.innerHTML == '0' && symbol != ".") || (res.innerHTML == "Error")) {
	    				res.innerHTML = symbol;
	    		} else {
			    	var old_result = res.innerHTML;
			    	res.innerHTML = old_result + symbol;
			    }
		    }
	    }
	}
};
