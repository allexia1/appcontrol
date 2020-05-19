class Despesa{
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes = mes
		this.dia = dia 
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
}
class Bd{
	getProxId(){
		let proxId = localStorage.getItem('id')//null
		console.log(proxId)
	}


	function gravar(d){
	//localStorage.setItem('despesa', JSON.stringify(d))
	this.getProxId()
	}
}

let bd = Bd()

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
	
	bd.gravar(despesa)
	//console.log(despesa)

}

