var btn_inserir = document.querySelector(".inserir");

function inserirAluno(event){
  event.preventDefault();
  var tr_linha = document.createElement("tr");

//Criar quatro tds
var td_nome = document.createElement("td");
var td_nota1 = document.createElement("td");
var td_nota2 = document.createElement("td");
var td_nota3 = document.createElement("td");
var td_media = document.createElement("td");


//Selecionar o conteudo do form
var form_nome = document.querySelector(".nome");
var form_nota1 = document.querySelector(".nota1");
var form_nota2 = document.querySelector(".nota2");
var form_nota3 = document.querySelector(".nota3");
var form_media = document.querySelector(".media");
var table = document.querySelector("#tabelaAluno");

td_nome.textContent = form_nome.value;
td_nota1.textContent = form_nota1.value;
td_nota2.textContent = form_nota2.value;
td_nota3.textContent = form_nota3.value;

tr_linha.appendChild(td_nome);
tr_linha.appendChild(td_nota1);
tr_linha.appendChild(td_nota2);
tr_linha.appendChild(td_nota3);
tr_linha.appendChild(td_media);

table.appendChild(tr_linha);

calcularMedia();

}
btn_inserir.addEventListener("click",inserirAluno);
