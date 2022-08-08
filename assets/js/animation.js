	function scrolltoU() {
  		var reveals = document.querySelectorAll(".scrolltoU");
	  	for (var i = 0; i < reveals.length; i++) {
	    	var windowHeight = window.innerHeight;
	    	var elementTop = reveals[i].getBoundingClientRect().top;
	    	var elementVisible = 150;

		    if (elementTop < windowHeight - elementVisible) {
		      	reveals[i].classList.add("active");
		    } else {
		      reveals[i].classList.remove("active");
		    }
	  	}
	}



	function scrolltoD() {
  		var reveals = document.querySelectorAll(".scrolltoD");
	  	for (var i = 0; i < reveals.length; i++) {
	    	var windowHeight = window.innerHeight;
	    	var elementTop = reveals[i].getBoundingClientRect().top;
	    	var elementVisible = 150;
		    if (elementTop < windowHeight - elementVisible) {
		      	reveals[i].classList.add("active");
		    } else {
		      reveals[i].classList.remove("active");
		    }
	  	}
	}



	function scrolltoR() {
	  	var reveals = document.querySelectorAll(".scrolltoR");

	  	for (var i = 0; i < reveals.length; i++) {
	    	var windowHeight = window.innerHeight;
	    	var elementTop = reveals[i].getBoundingClientRect().top;
	    	var elementVisible = 150;

		    if (elementTop < windowHeight - elementVisible) {
		      	reveals[i].classList.add("active");
		    } else {
		      reveals[i].classList.remove("active");
		    }
	  	}
	}



	function scrolltoL() {
  		var reveals = document.querySelectorAll(".scrolltoL");

  		for (var i = 0; i < reveals.length; i++) {
    		var windowHeight = window.innerHeight;
    		var elementTop = reveals[i].getBoundingClientRect().top;
    		var elementVisible = 150;

    		if (elementTop < windowHeight - elementVisible) {
      			reveals[i].classList.add("active");
		    } else {
		      reveals[i].classList.remove("active");
		    }
  		}
	}



	function scrolltoZoom() {
  		var reveals = document.querySelectorAll(".scrolltoZoom");

	  	for (var i = 0; i < reveals.length; i++) {
	    	var windowHeight = window.innerHeight;
	    	var elementTop = reveals[i].getBoundingClientRect().top;
	    	var elementVisible = 150;

	    	if (elementTop < windowHeight - elementVisible) {
	      		reveals[i].classList.add("active");
	    	} else {
	      		reveals[i].classList.remove("active");
	    	}
	  	}
	}



	window.addEventListener("scroll", scrolltoU);
	window.addEventListener("scroll", scrolltoD);
	window.addEventListener("scroll", scrolltoR);
	window.addEventListener("scroll", scrolltoL);
	window.addEventListener("scroll", scrolltoZoom);