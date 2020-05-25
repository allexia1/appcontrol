class Despesa{
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes = mes
		this.dia = dia 
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
	validarDodos(){
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				return false
			}
		}
		return true
	}
}


class Bd{

	constructor(){
		let id = localStorage.getItem('id')
		if(id === null){
			localStorage.setItem('id', 1)
		}
	}
	getProxId(){
		let proxId = localStorage.getItem('id')//null
		return parseInt(proxId) + 1
	}


	gravar(d){


	let id = this.getProxId()

	localStorage.setItem(id, JSON.stringify(d))
	
	localStorage.setItem('id', id)
	}
	recuperarTododsRegistros(){
		//array de despesas
		let despesas = Array()
		let id = localStorage.getItem('id')
		
		//recuperar todas as despesas cadastradas em localstorage
		for(let i = 1; i<=id; i++){
			let despesa = Json.parse(localstorage.getItem(i))

			//pular caso
			if(despesa === null){
				continue
			}

			despesas.push(despesa)
		}
		return despesas
	}
	pesquisar(despesa){
		let despesasFiltradas = Array()

		despesasFiltradas = this.recuperarTododsRegistros()

		if (despesa.ano !=''){
		despesasFiltradas.filter(d => d.ano == despesa.ano)
		}
		if (despesa.mes !=''){
		despesasFiltradas.filter(d => d.ano == despesa.mes)
		}
		if (despesa.dia !=''){
		despesasFiltradas.filter(d => d.ano == despesa.dia)
		}
		if (despesa.tipo !=''){
		despesasFiltradas.filter(d => d.ano == despesa.tipo)
		}
		if (despesa.descricao !=''){
		despesasFiltradas.filter(d => d.ano == despesa.descricao)
		}
		if (despesa.valor !=''){
		despesasFiltradas.filter(d => d.ano == despesa.valor)
		}
		return despesasFiltradas
	}
}
pesquisarDespesa

let bd = new Bd()

function cadastrarDespesa(){
	let ano = document.getElementById('ano').value
	let mes = document.getElementById('mes').value
	let dia = document.getElementById('dia').value
	let tipo = document.getElementById('tipo').value
	let descricao= document.getElementById('descricao').value
	let valor = document.getElementById('valor').value

	let despesa = new Despesa(
		ano,
		mes,
		dia,
		tipo,
		descricao,
		valor
		)
	if(despesa.validarDodos()) {
		bd.gravar(despesa)
	$(sucessoGravacao).modal('show')
	ano.value = ''
	mes.value = ''
	dia.value = ''
	tipo.value = ''
	descricao.value = ''
	valor.value = ''
}
	else{
		$(erroGravacao).modal('show')
		bd.gravar(Despesa)

	}
}

function carregaListaDespesas(despesas = Array(),filtro = false) {
	if(despesas.length == 0 && filtro==false){
		despesas = bd.recuperarTododsRegistros()
	}

	let listaDespesas = document.getElementById('listaDespesas')
	listaDespesas.innerHTML = ''

	//percorrer o array despesas,listando cada despesa dinamicamente

	despesas.forEach(function(d){
	
		//criando a linha (tr)
		listaDespesas.insertRow()

		//criando colunas (td)
		linha.insertCell(0).innerHTML = d.dia + '/' + d.mes + '/' +d.ano
		//ajustando o tipo
		switch(d.tipo){
			case '1': d.tipo = 'Alimentação'
			break
			case '2' :d.tipo ='Educação'
			break
			case '3': d.tipo ='Lazer'
			break
			case '4': d.tipo ='Saúde'
			break
			case '5': d.tipo ='Transporte'
			break
		}		
		linha.insertCell(1).innerHTML = d.tipo
		linha.insertCell(2).innerHTML = d.descricao
		linha.insertCell(3).innerHTML = d.valor
	
	})
}

function pesquisarDespesa(){
	let ano = document.getElementById('ano').value
	let mes = document.getElementById('mes').value
	let dia = document.getElementById('dia').value
	let tipo = document.getElementById('tipo').value
	let descricao = document.getElementById('descricao').value
	let valor = document.getElementById('valor').value

	let despesa = new Despesa (ano, mes, dia, tipo, descricao, valor)

	let despesas = bd.pesquisar(despesa)


	carregaListaDespesas(despesas, true)

}
