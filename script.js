

function filtrar(c){
	let x = document.getElementById("todo");
	let y = x.querySelectorAll(".card");
	let z = document.getElementById("fondo");
	let texto = document.getElementById("texto");

	for(i = 0; i < y.length ; i++){
		if(y[i].id == c || c == "all"){
			y[i].style.display = "block";
			

			if(y[i].id == "akame"){
				z.src = "akame.jpg";
				texto.textContent = "AKAME GA KILL";
			}else if(c == "all"){
				z.src = "fondo.jpg";
				texto.textContent = "ANIMES";
			} else if(y[i].id == "black"){
				z.src = "black.jpg";
				texto.textContent = "BLACK CLOVER";
			}else if(y[i].id == "jujutsu"){
				z.src = "jujutsu.png";
				texto.textContent = "JUJUTSU KAISEN";
			} else if(y[i].id == "blue") {
				z.src = "blue.jpg";
				texto.textContent = "BLUE EXORCIST";
			}
		} else {
			y[i].style.display = "none";
		}
	}
}

/*VENTANA MODAL*/

const images = document.querySelectorAll(".card img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const body = document.querySelector("body");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.style.display = "block";
    body.style.overflow = "hidden";

    close.addEventListener("click", () => {
      modal.style.display = "none";
      body.style.overflow = "auto";
    });
  });
});
