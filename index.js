$(document).ready(() => {
  console.log("ready");
  checarEstadoDasEsteiras();
  setInterval(checarEstadoDasEsteiras, 2000);
})

var esp32Ip = "192.168.0.14";

var EstadoEsteira1 = "OFF"
var EstadoEsteira2 = "OFF"
var EstadoEsteira3 = "OFF"
var EstadoEsteira4 = "OFF"

function carregarCarga1() {
  console.log("carregando carga 1");
  var data = {
    message:"1"
  }
  $.ajax({
    url: "http://esp32Ip /post",
    crossDomain: true,
    type: "POST",
    data: data,
    success: function(response) {
      console.log("SUCESSO!");
    },
    error: function(response) {
      console.log("ERRO!");
    }
  })
}

function carregarCarga2() {
  console.log("carregando carga 2");
  var data = {
    message:"2"
  }
  $.ajax({
    url: "http://esp32Ip /post",
    crossDomain: true,
    type: "POST",
    data: data,
    success: function(response) {
      console.log("SUCESSO!");
    },
    error: function(response) {
      console.log("ERRO!");
    }
  })
}

function carregarCarga3() {
  console.log("carregando carga 3");
  var data = {
    message:"3"
  }
  $.ajax({
    url: "http://esp32Ip /post",
    type: "POST",
    data: data,
    crossDomain: true,
    success: function(response) {
      console.log("SUCESSO!");
    },
    error: function(response) {
      console.log("ERRO!");
    }
  })
}

function checarEstadoDasEsteiras() {
  $.ajax({
    url: "http://esp32Ip /status",
    crossDomain: true,
    type: "GET",
    success: function(response) {
      console.log("SUCESSO", response);
      let segments = response.split('|');
      segments.forEach(segment => {
        let esteira = segment.substring(0, 2);
        let state = segment.substring(2);
        if(esteira == "E1") {
          if(state == "ON") {
            document.getElementById("text-esteira1").classList.remove("inactive");
            document.getElementById("text-esteira1").classList.add("active");
            document.getElementById("text-esteira1").innerText = state;
          }
          else {
            document.getElementById("text-esteira1").classList.add("inactive");
            document.getElementById("text-esteira1").classList.remove("active");
            document.getElementById("text-esteira1").innerText = state;
          }
        }
        if(esteira == "E2") {
          if(state == "ON") {
            document.getElementById("text-esteira2").classList.remove("inactive");
            document.getElementById("text-esteira2").classList.add("active");
            document.getElementById("text-esteira2").innerText = state;
          }
          else {
            document.getElementById("text-esteira2").classList.add("inactive");
            document.getElementById("text-esteira2").classList.remove("active");
            document.getElementById("text-esteira2").innerText = state;
          }
        }
        if(esteira == "E3") {
          if(state == "ON") {
            document.getElementById("text-esteira3").classList.remove("inactive");
            document.getElementById("text-esteira3").classList.add("active");
            document.getElementById("text-esteira3").innerText = state;
          }
          else {
            document.getElementById("text-esteira3").classList.add("inactive");
            document.getElementById("text-esteira3").classList.remove("active");
            document.getElementById("text-esteira3").innerText = state;
          }
        }
        if(esteira == "E4") {
          if(state == "ON") {
            document.getElementById("text-esteira4").classList.remove("inactive");
            document.getElementById("text-esteira4").classList.add("active");
            document.getElementById("text-esteira4").innerText = state;
          }
          else {
            document.getElementById("text-esteira4").classList.add("inactive");
            document.getElementById("text-esteira4").classList.remove("active");
            document.getElementById("text-esteira4").innerText = state;
          }
        }
        console.log(esteira + " is " + state);
      });
    },
    error: function(response) {
      console.log("ERRO!", response);
    }
  })
}