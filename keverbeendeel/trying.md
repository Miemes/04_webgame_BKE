function updateKever(dobbelsteen) {
  let imagePath;

  switch(dobbelsteen) {
    case 6:
      imagePath = "kever-lichaam.png";
      break; //if this is the case, break ends processing when case is correct
    case 5:
      imagePath = "kever-hoofd.png";
      break;
    case 4:
      imagePath = "kever-pootjes.png";
      break;
    case 3:
      imagePath = "kever-staart.png";
      break;
    case 2:
      imagePath = "kever-ogen.png";
      break;
    case 1:
      imagePath = "kever-voelsprieten.png";
      break;
    default:
      imagePath = ""; // Handle default case if necessary
  }
  document.getElementById("kbouw").src = imagePath;
}


function updateKever(dobbelsteen) {

  switch(dobbelsteen) {
    case 6:
      document.getElementById("klichaam").src = "kever-lichaam.png";
      break; //if this is the case, break ends processing when case is correct
    case 5:
      document.getElementById("khoofd").src = "kever-hoofd.png";
      break;
    case 4:
      document.getElementById("kpootjes").src = "kever-pootjes.png";
      break;
    case 3:
      document.getElementById("kstaart").src = "kever-staart.png";
      break;
    case 2:
      document.getElementById("kogen").src = "kever-ogen.png";
      break;
    case 1:
      document.getElementById("kvoelsprieten").src = "kever-voelsprieten.png";
      break;
    default:
      imagePath = ""; // Handle default case if necessary
  }
}