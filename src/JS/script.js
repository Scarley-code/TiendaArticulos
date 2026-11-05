const myModal = new bootstrap.Modal("#login", {
  backdrop: true,
});

let boton_login = document.querySelector("#iniciar_sesion");
boton_login.addEventListener("click", () => {
  myModal.show();
});
