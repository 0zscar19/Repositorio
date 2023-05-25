const formulario = document.querySelector('#formulario');

const dbMoni = "moni";
const dbPassMoni = "7894";

const dbOscar = "oscar";
const dbPassOsc = "1234";

const dbJorge = "jorge";
const passJorge = "4561";

function mostrarError() {}

// INGRESO DE USUARIOS Y CONTRASEÑA
function validarDatos(user, codigo) {
  if (user === dbMoni && codigo === dbPassMoni) {
    alert('Saldo de 500.00'); // Mostrar saldo en una ventana emergente
  } else if (user === dbOscar && codigo === dbPassOsc) {
    alert('Saldo de 420.00'); // Mostrar saldo en una ventana emergente
  } else if (user === dbJorge && codigo === passJorge) {
    alert('Saldo de 420.00'); // Mostrar saldo en una ventana emergente
  }
  // INGRESO INCORRECTO DE USUARIO
  else if (user !== dbMoni && user !== dbOscar && user !== dbJorge) {
    alert('Usuario incorrecto');
  }
  // INGRESO INCORRECTO DE CONTRASEÑA
  else if (codigo !== dbPassMoni && codigo !== dbPassOsc && codigo !== passJorge) {
    console.log('Contraseña incorrecta');
  } else {
    console.log('Error, datos incorrectos');
  }
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  let usuario = document.querySelector('#usuario').value;
  let password = document.querySelector('#contrasena').value;
  validarDatos(usuario, password);
});
