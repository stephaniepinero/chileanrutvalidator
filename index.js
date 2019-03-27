'use strict';

exports.validarRut = (rut) => {
 
  let suma = 0;
  rut = rut.replace(/\./g,"").replace(/\-/g,"");
  
  let rutSolo = rut.slice(0, -1);
  let verif = rut.substr(rut.length - 1);
  let continuar = true; 
  let i;
  if(!Number.rutSolo  && !parseInt(rutSolo)){
    return false;
  }
  if(rut.length > 9){

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
      return true;
    }
  } else if (dv == 11 && verif == 0) {
    return true;
  }
  else if (dv == verif) {
    return true;
  } else {
    return false;
  }
}

exports.formatRut = (rut, punto = false, guion = false) => {
  rut = rut.replace(/\./g,"").replace(/\-/g,"")
  if(!punto && !guion){
    return rut;
  }else{
    let rutSolo = rut.slice(0, -1);
    let verif = rut.substr(rut.length - 1);
    let rutFinal = ""
    if(punto){
      rutSolo = rutSolo.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
      rutSolo = rutSolo.split('').reverse().join('').replace(/^[\.]/,'');
    }

    rutFinal = rutSolo;

    if(guion){
      rutFinal += '-';
    }

    rutFinal += verif;
    return rutFinal;

  }
}
