const colorCode = document.getElementById("color-code");
const changeColorButton = document.getElementById("change-color");

changeColorButton.addEventListener("click", () => {
	const channel = () => 190 + Math.floor(Math.random() * 66);
	const color = `#${[channel(), channel(), channel()]
		.map((value) => value.toString(16).padStart(2, "0"))
		.join("")
		.toUpperCase()}`;

	document.body.style.backgroundColor = color;
	colorCode.textContent = color;
});