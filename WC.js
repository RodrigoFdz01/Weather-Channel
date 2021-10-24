let botonenviar = document.querySelector("button");
let ciudad = document.querySelector("input");

function cargarCiudad(ciudad) {
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      ciudad +
      "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
    function (data) {
      console.log(data);
      document.querySelector(".container").style.visibility = "visible";

      let nombreCiudad = document.querySelector("#ciudad");
      nombreCiudad.textContent = data.name;

      let temperatura = document.querySelector("#temperatura");
      temperatura.textContent = Math.round(data.main.temp) + "°";

      let imagen = document.querySelector("#wicon");
      let linkicono = data.weather[0].icon;
      imagen.src = `https://openweathermap.org/img/w/${linkicono}.png`;
      // otra opcion es : imagen.src = "http://openweathermap.org/img/w/" + linkicono + ".png";
      let descripcion = document.querySelector("#descripcion");
      descripcion.textContent = data.weather[0].description;
    }
  );
}

botonenviar.addEventListener("click", function () {
  cargarCiudad(ciudad.value);
  ciudad.value = "";
});
