
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var createFliesTime = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel ==='normal') {
	createFliesTime = 1500
} else if(nivel ==='dificil') {
	//1000
	createFliesTime = 1000
} else if(nivel ==='chucknorris') {
	//750
	createFliesTime = 750
}


function adjustWindowSize() {
	altura = window.innerHeight
	largura = window.innerWidth

}

adjustWindowSize()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(createFlies)
		window.location.href = 'vitoria.html'
	} else {

	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function randomPosition() {

	//remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')) {
		 document.getElementById('mosquito').remove()

		 if (vidas > 3) {

		 	window.location.href = 'fim_de_jogo.html'
		 }
		document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'

		vidas++
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'img/mosquito.png'
	mosquito.className = randomSize() + ' ' +  randomSide()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito' 
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function randomSize() {
 	var classe = Math.floor(Math.random() * 3)
 	
 	switch(classe) {
 		case 0:
 			return 'mosquito1'
 		case 1:
 			return 'mosquito2'
 		case 2:
 			return 'mosquito3'
 } 	
}

function randomSide() {
	var classe = Math.floor(Math.random() * 2)
 	
 	switch(classe) {
 		case 0:
 			return 'ladoA'

 		case 1:
 			return 'ladoB'
 	}
}

let clique = 0

function contador() {

	clique += 1

	document.getElementById('clique').innerHTML = parseInt(clique)
}