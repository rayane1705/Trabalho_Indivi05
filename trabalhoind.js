const redlineSync = require("readline-sync");

const lista = [];
let   resp = "";

const adicionarNaLista = (prop) => {
  lista.push(prop);
};

const ordenar = () => {
  lista.sort();
};

const listar = () => {
  
  lista.forEach((elemento)=> { console.log(elemento); }); 
};


while (true) {
  resp = redlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");
 
  if (resp.toLowerCase() == "sair") {
    ordenar();
    listar();
	  break;
  	
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    adicionarNaLista(resp);
  }
}