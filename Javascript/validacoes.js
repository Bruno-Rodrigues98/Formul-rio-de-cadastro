$("#cpf").mask("000.000.000-00");
$("#data").mask("00/00/0000");


function validar(){
	removerAvisos();

	let nome = formulario.nome.value
	let cpf = formulario.cpf.value;
	let email = formulario.email.value;
	let data = formulario.data.value;
	let senha = formulario.senha.value;
	let repSenha = formulario.repSenha.value;
	let genero = formulario.genero.value;

	if (nome == ''){
		$("#erro-nome").html(atencao("Informe o nome!"))
		formulario.nome.focus()
		return false;
	}

	if (cpf == ""){
		$("#erro-cpf").html(atencao("informe seu CPF!"))
		formulario.cpf.focus();
		return false;
	}

	if (email == ""){
		$("#erro-email").html(atencao("informe seu E-mail!"))
		formulario.email.focus();
		return false;
	}

	if (data == ""){
		$("#erro-data").html(atencao("Informe sua data de nascimento"))
		formulario.data.focus();
		return false;
	}

	if(!$("input[name='genero']:checked").length){
	    $("#erro-genero").html(atencao("Informe o gênero"))
		formulario.genero.masculino.focus();
	    return false;
	}

	if(senha == ""){
		$("#erro-senha").html(atencao("Informe sua senha!"))
		formulario.senha.focus()
		return false;
	}else{
		if(repSenha == ""){
			$("#erro-repSenha").html(atencao("Informe sua confirmação de senha!"))
			formulario.repSenha.focus()
			return false;
		}else if(senha != repSenha){
			$("#erro-repSenha").html(atencao("Senhas diferentes!"))
			formulario.repSenha.focus()
			return false;
		}else{
			$("#erro-repSenha").html('<div class="alert alert-success" id="validacao-senhas">Cadastro enviado com sucesso!</div>');
		}

	}
}


function atencao(frase){
	return'<div class="alert alert-danger" id="validacao-senhas">'+frase+'</div>'
}	

function cancelar(){
	let campos = $('.input-padrao')
	for(let i=0;i<campos.length;i++){
		$(campos[i]).val('')
	}

	let elemento = $("input[name='genero']");
   for(let i=0;i<elemento.length;i++){
      elemento[i].checked = false;
   }
	removerAvisos()
	
}

function removerAvisos(){
	let erros = $('.erro')
	for(let i=0;i<erros.length;i++){
		$(erros[i]).text('')
	}
	
}
