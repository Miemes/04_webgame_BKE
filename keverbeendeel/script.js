let lichaamImageSrc = ""; 
let hoofdImageSrc = "";
let pootjesImageSrc = ""; 
let staartImageSrc = ""; 
let ogenImageSrc = ""; 
let voelsprietenImageSrc = ""; 

function dobbel() {
  const randomGetal = Math.floor((Math.random() * 6) + 1);
  console.log(randomGetal);
  keverLichaam(randomGetal);

    // Set src attributes after changes have been made
  document.getElementById("klichaam").src = lichaamImageSrc;
  document.getElementById("khoofd").src = hoofdImageSrc;
  document.getElementById("kpootjes").src = pootjesImageSrc;
  document.getElementById("kstaart").src = staartImageSrc;
  document.getElementById("kogen").src = ogenImageSrc;
  document.getElementById("kvoelsprieten").src = voelsprietenImageSrc;
}


function keverLichaam(randomGetal) {
  if (randomGetal === 6 && lichaamImageSrc === "") {
    lichaamImageSrc = "kever-lichaam.png";
  } 
  else if (randomGetal === 5 && lichaamImageSrc === "kever-lichaam.png"){
    hoofdImageSrc = "kever-hoofd.png";
  } 
  else if (randomGetal === 4 && lichaamImageSrc === "kever-lichaam.png"){
    pootjesImageSrc = "kever-pootjes.png";
  } 
  else if (randomGetal === 3 && lichaamImageSrc ==="kever-lichaam.png"){
    staartImageSrc = "kever-staart.png";;
  } 
  else if (randomGetal=== 2 && hoofdImageSrc ==="kever-hoofd.png"){
    ogenImageSrc = "kever-ogen.png";
  } 
  else if (randomGetal=== 1 && hoofdImageSrc ==="kever-hoofd.png"){
    voelsprietenImageSrc = "kever-voelsprieten.png";
  } else {
    console.log("niets");
  }
}