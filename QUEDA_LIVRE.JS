document.addEventListener("DOMContentLoaded", function(){
  const gravidade = 9.81;

let tempo_segundos = prompt("digite o tempo de queda em segundos: ");
if (tempo_segundos !==  null && tempo_segundos !==""){
    let distancia = Math.floor(0.5 * gravidade * tempo_segundos * tempo_segundos);
    let elemento = document.querySelector("#distancia_percorrida");
    let segumdos_informados = ocument.querySelector("#segundos_informados");

    elemento.textContent = distancia + "metros";
    segumdos_informados.text.textContent = tempo_segundos + "segundos";

    setInterval(function(){
        location.reload();
    }, 7000);

} else {
    Location.reload();
} 
})