
const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');
let	 flag = false;
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
	if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
		mainnav.classList.remove('responsive');
		if (window.innerWidth == 761 && !flag)
		{
			window.alert('class removed');
			flag = true;
		}
		
	}
	else{
		flag = false;
	}
});