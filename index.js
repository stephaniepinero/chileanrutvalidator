'use strict';

exports.validarRut = (rut) => {
  //console.log("Validar rut", rut);
  let suma = 0;
  rut = rut.replace(".", "").replace(".", "").replace(".", "").replace("-", "").replace(" ", "");
  //console.log(rut);
  let rutSolo = rut.slice(0, -1);
  let verif = rut.substr(rut.length - 1);

  //console.log(rutSolo);
  //console.log(verif);
  let continuar = true; 
  let i;
  if(!Number.rutSolo){
    return false;
  }
  if(rut.length > 9){
    //console.log("Rut muy largo, es invalido ");
    return false;
  }
  for (i = 2; continuar; i++) {
    suma += (rutSolo % 10) * i;
    rutSolo = parseInt((rutSolo / 10));
    i = (i == 7) ? 1 : i;
    continuar = (rutSolo == 0) ? false : true;
  }
  let resto = suma % 11;
  let dv = 11 - resto;
  if (dv == 10) {
    if (verif.toUpperCase() == 'K') {
      //console.log("si");
      return true;
    }
  } else if (dv == 11 && verif == 0) {
    //console.log("rut valido");
    return true;
  }
  else if (dv == verif) {
    //console.log("rut valido");
    return true;
  } else {
    //console.log("rut no valido");
    return false;
  }
}
