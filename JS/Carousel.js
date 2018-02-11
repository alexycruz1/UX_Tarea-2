function ClickImage(element) {
  var pivote = 3;
  var ImagesArray = [];
  var numeroImagenes = 15;

  for (let i = 0; i < numeroImagenes; i++) {
    var Imagen = $("#Imagen" + (i + 1)).css('background-image');
    ImagesArray.push(Imagen);
  }

  for (let i = 0; i < ImagesArray.length; i++) {
    if (element.id == "Imagen" + (i + 1)) {
      corrimiento = i - pivote;
      pivote = i;
      document.getElementById('BigImage').style.backgroundImage = ImagesArray[pivote];
    }
  }

  if (pivote >= 4) {
    var imagenAsignada = 0;
    for (let i = 0; i < ImagesArray.length; i++) {
      if ((i + corrimiento) < ImagesArray.length) {
        document.getElementById('Imagen' + (i + 1)).style.backgroundImage = ImagesArray[i + corrimiento];
      } else {
        document.getElementById('Imagen' + (i + 1)).style.backgroundImage = ImagesArray[imagenAsignada];
        imagenAsignada++;
      }
    }
  } else if (pivote <= 2) {
    var imagenAsignada = ImagesArray.length - 1;
    for (let i = ImagesArray.length; i > 0; i--) {
      if ((i + corrimiento) > 0) {
        document.getElementById('Imagen' + (i)).style.backgroundImage = ImagesArray[(i - 1) + corrimiento];
      } else {
        document.getElementById('Imagen' + (i)).style.backgroundImage = ImagesArray[imagenAsignada];
        imagenAsignada--;
      }
    }
  }
};

function ClickRightArrow() {
  var ImagesArray = [];
  var numeroImagenes = 15;
  var corrimiento = 1;

  for (let i = 0; i < numeroImagenes; i++) {
    var Imagen = $("#Imagen" + (i + 1)).css('background-image');
    ImagesArray.push(Imagen);
  }

  var imagenAsignada = 0;
  for (let i = 0; i < ImagesArray.length; i++) {
    if ((i + corrimiento) < ImagesArray.length) {
      document.getElementById('Imagen' + (i + 1)).style.backgroundImage = ImagesArray[i + corrimiento];
    } else {
      document.getElementById('Imagen' + (i + 1)).style.backgroundImage = ImagesArray[imagenAsignada];
      imagenAsignada++;
    }
  }

  document.getElementById('BigImage').style.backgroundImage = ImagesArray[4];
}

function ClickLeftArrow() {
  var ImagesArray = [];
  var numeroImagenes = 15;
  var corrimiento = -1;

  for (let i = 0; i < numeroImagenes; i++) {
    var Imagen = $("#Imagen" + (i + 1)).css('background-image');
    ImagesArray.push(Imagen);
  }

  var imagenAsignada = ImagesArray.length - 1;
  for (let i = ImagesArray.length; i > 0; i--) {
    if ((i + corrimiento) > 0) {
      document.getElementById('Imagen' + (i)).style.backgroundImage = ImagesArray[(i - 1) + corrimiento];
    } else {
      document.getElementById('Imagen' + (i)).style.backgroundImage = ImagesArray[imagenAsignada];
      imagenAsignada--;
    }
  }

  document.getElementById('BigImage').style.backgroundImage = ImagesArray[2];
}