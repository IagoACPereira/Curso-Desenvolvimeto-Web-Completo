// Encontrar altura e largura da pagina
var altura = 0
var largura = 0
var vidas = 1
var tempo = 16

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criarMosquitoTempo = 3000
} else if (nivel === 'dificil') {
    criarMosquitoTempo = 1000
} else if (nivel === 'chuckNorris') {
    criarMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)

    var criarMosca = setInterval(function(){
        posicaoRandomica()
    }, criarMosquitoTempo)

    var cronometro = setInterval(function(){
        
        tempo -= 1
        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criarMosca)
            window.location.href = 'vitoria.html'
        }else{
            document.getElementById('cronometro').innerHTML = tempo
        }
    }, 1000)
}
ajustaTamanhoPalcoJogo()

// Criar posição randomica para o mosquito
function posicaoRandomica(){

    // Remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        
        if(vidas <= 3){
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }else{
            window.location.href = 'game_over.html'
        }
    }    

    var posicaoX = Math.floor(Math.random() * largura)  - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 5 : posicaoX
    posicaoY = posicaoY < 0 ? 5 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function x() {
        this.remove()
    }


    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())

    console.log(ladoAleatorio())
}

// Tamanhos randomicos
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Lado aleatorio
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

