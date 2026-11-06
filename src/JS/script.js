const Login = new bootstrap.Modal("#login", {
  backdrop: true,
});

const iniciarSesion = () => {
  let boton_login = document.querySelector("#iniciar_sesion");
  boton_login.addEventListener("click", () => {
    Login.show();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarSesion();
});
