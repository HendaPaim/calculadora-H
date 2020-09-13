/*
Autor: Henda Paim
CodeName: ManFila
Data: 13/09/2020
Versão: 0.0.0b
*/
const rodape = document.querySelector('footer')
rodape.innerHTML = 'ManFila - © 2020'


const app = document.querySelector('.calculadora')
//const menu = document.querySelector('.botao-menu')
const tela = document.querySelector('p')
const telaErro = document.querySelector('.erro')
const botao = document.querySelectorAll('.todos-botons button')
let resultadoFinal = ''
let controladoreDeErro = false

//const log = console.log;

for(let index = 0; index < botao.length ; index++){
    
    botao[index].addEventListener('click', pressBotao)
    function pressBotao() {
        telaErro.innerHTML = ''
        telaErro.style.visibility = 'hidden'
        let botaoClicado = this.innerHTML;
             valorNaTela = tela.innerHTML
        //log(botaoClicado)
        
        switch (botaoClicado) {
            case 'AC':
                tela.innerHTML = ''
                break;
            case '=':
                let resultado = valorNaTela
                if(resultado) {
                    //
                    try {
                        //log(eval(resultado))
                        resultadoFinal = eval(resultado)
                        tela.innerHTML = eval(resultado)
                    } catch (error) {
                        tela.innerHTML = ''
                        telaErro.style.visibility = 'visible'
                        telaErro.innerHTML = 'Erro na expresão!'
                        tela.innerHTML = ''
                    }
                }
                break;
            case 'Ans':
                tela.innerHTML = resultadoFinal
                break;
            //Extensões serão adicionadas aqui na proxima actualização
                    /* AQUI */
            default:
                tela.innerHTML += botaoClicado
                break;
        }
    }
}

/*Menu
menu.addEventListener('click', function(){
    console.log('Menu')
})*/