const buttons = document.querySelectorAll('a');

buttons.forEach(btn => {
	btn.addEventListener('click', function(e) {
		let x = e.clientX - e.target.offsetLeft;
		let x = e.clientY - e.target.offsetTop;

		let ripples = document.createElement('span');

		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);
	})
})