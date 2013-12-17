(function(){ 

	var dropdown = document.querySelector('#mobile_dropdown');
	var closeDropdown = document.querySelector('#close_dropdown');
	var nav = document.querySelector('#navigation');



	// function openNav()
	// {
	//     dropdown.setAttribute('id', "close_dropdown");

	//     nav.setAttribute('class', "");

	// 	e.preventDefault();
	// 	return false;
	// }

	// function closeNav()
	// {
	//     dropdown.setAttribute('id', "mobile_dropdown");

	//     nav.setAttribute('class', "hidden");

	// 	e.preventDefault();
	// 	return false;
	// }

	// console.log(window);

	// var dropdown = document.querySelector('#mobile_dropdown');
	// var nav = document.querySelector('#navigation');

	// // console.log(dropdown);

	if(document.querySelector('#close_dropdown')){
		console.log('hello');
	}

	dropdown.onclick = function(e){
		// console.log('awesome dropdown menu');

		dropdown.setAttribute("id", "close_dropdown");

		nav.setAttribute("class", "");

		console.log(dropdown);

		e.preventDefault();
		return false;
	}

	closeDropdown.onclick = function(e){
		// console.log('awesome dropdown menu');

		dropdown.setAttribute("id", "mobile_dropdown");

	    nav.setAttribute("class", "hidden");

	    console.log(dropdown);

		e.preventDefault();
		return false;
	}

})();