var res = document.getElementById("disp");

window.onclick = function() {
  for (let i = 0; i < 20; i++) {
    var but = document.getElementsByClassName("but")[i];

    if (event.target == but) {
    	if (but.innerHTML == 'R') {
    		res.innerHTML = eval(res.innerHTML);
    	} else {
    		if (but.innerHTML == "Del") {
    			res.innerHTML = '0';
    		} else {
	    		if (res.innerHTML == '0') {
	    			if (but.innerHTML != ".") {
	    				res.innerHTML = "";
	    			}
	    		}
		    	var old_result = res.innerHTML;
		    	var symbol = but.innerHTML;
		    	res.innerHTML = old_result + symbol;
		    }
	    }
    }
  }
}
