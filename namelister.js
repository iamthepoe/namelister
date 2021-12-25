var chooseToLeave = false;
var names = [];

while(chooseToLeave!=true){
	var option = parseInt(prompt("[1] - Adicionar Nome\n[2] - Remover Nome\n[3] - Listar Nomes\n[0] - Sair"));
	switch(option){

		default:
			alert("Essa opção não existe.");
		break;

		case 0:
			chooseToLeave = true;
		break;

		case 1:
			addname();
		break;

		case 2:
			removename();
		break;

		case 3:
			shownames();
		break;
	}
}

function addname(){
	let name = prompt("Insira o nome a ser adicionado: ");
	names.push(name);
}

function removename(){
	let name = prompt("Insira o nome a ser removido: ");
	if(names.indexOf(name) < 0){
		alert("Esse nome não está na lista.");
	}else{
		let confirm = parseInt(prompt(`Realmente deseja remover o nome "${name}" da lista?\n[1] - Sim | [2] - Não`));
		if(confirm == 1){
			names.splice((names.indexOf(name)), 1);
			alert("Nome removido com sucesso");
		}else{
			alert("Remoção cancelada.");
		}
	}
}

function shownames(){
	let list = names.join("\n");
	alert("LISTA DE NOMES: \n" + list);
}
