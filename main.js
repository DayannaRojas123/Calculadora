let pantalla = document.getElementById("display");
let valores = "";
window.addEventListener("keydown", (e) => {
  let codigo = e.code;
  console.log(codigo);

  if (e.key >= 0 && e.key <= 9) {
    valores += e.key;
  }
  if (e.keyCode >= 106 && e.keyCode <= 111) {
    valores += e.key;
  }

  if (e.keyCode == 8) {
    borrar();
  }

  if (e.keyCode == 46) {
    borrartodo();
  }

  if (e.keyCode == 13) {
    resultado();
  }

  pantalla.value = valores;
});

function borrar() {
  valores = valores.substring(0, valores.length - 1); //busca desde la primera posicion hasta la ultima del string y la elimina
  pantalla.value = valores;
}

//con tecla suprimir borras todoo

function borrartodo() {
  valores = "";
  pantalla.value = "";
}

addEventListener("error", () => {
  pantalla.value = "SYNTAX ERROR <3";
});

function resultado() {
  valores = eval(valores);
  pantalla.value = valores;
}

function pantallatouch(index) {
  valores += index;
  pantalla.value = valores;
}
