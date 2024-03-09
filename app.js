var textInput = document.querySelector('#textarea-input');
var texOut = document.querySelector('#div_disappear');

function criptografar() {
  var texto = textInput.value;

  var criptografarResult = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

  document.getElementById('div_disappear').innerHTML = '<textarea readonly id="output" class="textarea-output">' + criptografarResult + '</textarea>' + '<button class="apresentacao_conteudo_resultado_bntcopiar" id="copiar" onclick="bntcopiar()">Copiar</button>'
}

function descriptografar() {
  var texto = textInput.value;
  var descriptografarResult = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.getElementById('div_disappear').innerHTML = '<textarea readonly id="output" class="textarea-output">' + descriptografarResult + '</textarea>' + '<button class="apresentacao_conteudo_resultado_bntcopiar" id="copiar" onclick="bntcopiar()">Copiar</button>'
}

function bntcopiar() {
  var textCopiar = document.getElementById('output');

  textCopiar.select();
  document.execCommand('copy');
  alert("O texto copiado com sucesso!");
}
