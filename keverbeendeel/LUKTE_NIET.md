JAVASCRIPT 1
const keverContainer = document.querySelector(".kever-container");

function dobbel() {
  //const randomNum = Math.floor((Math.random() * 6) + 1);
  const randomNum = 6 ; 
  keverDelen();

}

function keverDelen() {
  if (randomNum == 6) {
    const img = document.createElement("img");
    img.src = "kever-lichaam.png";
    img.classList.add("kever-bouw")
    keverContainer.appendChild(img);
  }
}