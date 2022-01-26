let btnLlamarMesero = document.getElementById('llamarMesero');

btnLlamarMesero.addEventListener('click', (event) => {
  event.preventDefault();
  let ventanaLlamarMesero = document.getElementById('ventanaLlamarMesero');
  ventanaLlamarMesero.style.display="block";

  setTimeout(function() {
    ventanaLlamarMesero.style.display="none";
  },2000);
});