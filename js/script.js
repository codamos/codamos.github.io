var formulario = document.querySelector("#taskForm");
// criar a função adicionarTarefa
function adicionarTarefa(){
	var tarefas = document.querySelector(".tarefas");
	var mensagem = document.querySelector(".inputMensagem");
	var div = document.createElement("div");
	div.classList.add("tarefa");
	tarefas.appendChild(div);

	div.innerHTML = "<h3>"+mensagem.value+"</h3>"+"<div class='botoes linha'>"+"<button class='botao feito'>" + "<i class='fa fa-check'></i>" + "</button>" + "</div>";	
	
	mensagem.value="";

	var botao = div.querySelector(".botao");
	// validar botão feito
	function tarefaFeita(){
		var tarefa = this.parentNode.parentNode;
		if (tarefa.className == "tarefa") {
			tarefa.classList.add("feito");
		}else {
		tarefa.classList.remove("feito");
		}
	}
	botao.onclick = tarefaFeita;
}

// criar a função enviarTarefa
function enviarTarefa(){
	var mensagem = document.querySelector(".inputMensagem");
	if (mensagem.value != "") {
		adicionarTarefa();
		mensagem.parentNode.classList.remove("errado");
		}else{
			mensagem.parentNode.classList.add("errado");
		}

	return false; 
}

formulario.onsubmit = enviarTarefa;
