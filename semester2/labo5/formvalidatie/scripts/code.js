const setup = () => {
	document.getElementById("btnValideer").addEventListener("click", valideer);
};

const isGetal = (tekst) => {
	return !isNaN(tekst) && tekst.trim() !== "";
};

const valideer = () => {
	let geldig = true;
	if (!valideerVoornaam()) geldig = false;
	if (!valideerFamilienaam()) geldig = false;
	if (!valideerGeboortedatum()) geldig = false;
	if (!valideerEmail()) geldig = false;
	if (!valideerAantalKinderen()) geldig = false;

	if (geldig) alert("Proficiat!");
};

const valideerVoornaam = () => {
	let veld = document.getElementById("txtVoornaam");
	let err = document.getElementById("errVoornaam");
	if (veld.value.trim() === "") {
		veld.classList.add("invalid");
		err.innerText = "verplicht veld";
		return false;
	}
	if (veld.value.trim().length > 30) {
		veld.classList.add("invalid");
		err.innerText = "max. 30 karakters";
		return false;
	}
	veld.classList.remove("invalid");
	err.innerText = "";
	return true;
};

const valideerFamilienaam = () => {
	let veld = document.getElementById("txtFamilienaam");
	let err = document.getElementById("errFamilienaam");
	if (veld.value.trim() === "") {
		veld.classList.add("invalid");
		err.innerText = "verplicht veld";
		return false;
	}
	if (veld.value.trim().length > 50) {
		veld.classList.add("invalid");
		err.innerText = "max 50 karakters";
		return false;
	}
	veld.classList.remove("invalid");
	err.innerText = "";
	return true;
};

const valideerGeboortedatum = () => {
	let veld = document.getElementById("txtGeboortedatum");
	let err = document.getElementById("errGeboortedatum");
	let regex = /^\d{4}-\d{2}-\d{2}$/;
	if (!regex.test(veld.value.trim())) {
		veld.classList.add("invalid");
		err.innerText = "formaat is niet jjjj-mm-dd";
		return false;
	}
	veld.classList.remove("invalid");
	err.innerText = "";
	return true;
};

const valideerEmail = () => {
	let veld = document.getElementById("txtEmail");
	let err = document.getElementById("errEmail");
	let waarde = veld.value.trim();
	if (waarde === "" || !waarde.includes("@") || waarde.startsWith("@") || waarde.endsWith("@") || waarde.split("@").length !== 2) {
		veld.classList.add("invalid");
		err.innerText = "geen geldig email adres";
		return false;
	}
	veld.classList.remove("invalid");
	err.innerText = "";
	return true;
};

const valideerAantalKinderen = () => {
	let veld = document.getElementById("txtAantalKinderen");
	let err = document.getElementById("errAantalKinderen");
	let waarde = veld.value.trim();
	if (!isGetal(waarde) || parseInt(waarde) < 0) {
		veld.classList.add("invalid");
		err.innerText = "is geen positief getal";
		return false;
	}
	if (parseInt(waarde) >= 99) {
		veld.classList.add("invalid");
		err.innerText = "is te vruchtbaar";
		return false;
	}
	veld.classList.remove("invalid");
	err.innerText = "";
	return true;
};

window.addEventListener("load", setup);