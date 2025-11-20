const botao01 = document.querySelector("#botao01")
const botao02 = document.querySelector("#botao02")
const botao03 = document.querySelector("#botao03")
const botao04 = document.querySelector("#botao04")
const botao05 = document.querySelector("#botao05")
const botao06 = document.querySelector("#botao06")
const botao07 = document.querySelector("#botao07")
const botao08 = document.querySelector("#botao08")
const botao09 = document.querySelector("#botao09")
const botao10 = document.querySelector("#botao10")
const botao11 = document.querySelector("#botao11")
const botao12 = document.querySelector("#botao12")
const botao13 = document.querySelector("#botao13")
const botao14 = document.querySelector("#botao14")
const botao15 = document.querySelector("#botao15")
const res = document.querySelector('.res')

function limparDiv() {
    res.innerHTML = ""
}

const exercicio01 = botao01.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia uma matriz 3x3 de números inteiros 
   e exiba a matriz na tela. 
*/

    // 1. Vamos criar o "cesto" principal da matriz
    let matriz = []
    const TOTAL_LINHAS = 3
    const TOTAL_COLUNAS = 3

    // --- FASE 1: LEITURA DOS DADOS ---
    res.innerHTML = "Digite os valores para a matriz:<br>" // Mensagem inicial

    // O Loop de FORA controla as LINHAS (de 0 a 2)
    for (let linha = 0; linha < TOTAL_LINHAS; linha++) {

        // 2. Crie um "vetor-linha" vazio para esta linha
        let linhaAtual = []

        // O Loop de DENTRO controla as COLUNAS (de 0 a 2)
        for (let coluna = 0; coluna < TOTAL_COLUNAS; coluna++) {

            // 3. Peça o número ao usuário
            let numero = parseInt(prompt(`Digite o valor para [Linha ${linha}][Coluna ${coluna}]:`))

            // 4. Adicione o número no "vetor-linha"
            linhaAtual.push(numero)
        }

        // 5. Adicione a linha preenchida na matriz principal
        matriz.push(linhaAtual)
    }

    // 6. Neste ponto, a variável 'matriz' está completa!
    // (Seu console.log(matriz) mostraria algo como: [[1,2,3], [4,5,6], [7,8,9]])


    // --- FASE 2: EXIBIÇÃO DOS DADOS ---
    res.innerHTML = "Sua Matriz 3x3:<br>"

    // 7. Precisamos de OUTRO loop aninhado para LER a matriz
    for (let linha = 0; linha < TOTAL_LINHAS; linha++) {

        let linhaEmTexto = "" // String para montar a linha antes de exibir

        for (let coluna = 0; coluna < TOTAL_COLUNAS; coluna++) {

            // 8. Pegue o número da matriz
            let numero = matriz[linha][coluna]

            // 9. Adicione o número à string da linha
            linhaEmTexto += numero + " "
        }

        // 10. Exiba a linha inteira e pule para a próxima
        res.innerHTML += linhaEmTexto + "<br>"
    }

})

const exercicio02 = botao02.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia uma matriz 2x2 de números inteiros e calcule a soma de todos os elementos. */

    let matriz = []
    let totalLinhas = 2
    let totalColunas = 2
    let soma = 0
    let somaTotal = 0

    for (let linha = 0; linha < totalLinhas; linha++) {

        linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e coluna ${coluna}: `))



            linhaAtual.push(numero)

        }

        matriz.push(linhaAtual)
    }

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaTexto = " "

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = matriz[linha][coluna];

            linhaTexto += numero + " "

            soma += matriz[linha][coluna]


        }
        somaTotal += soma
        res.innerHTML += linhaTexto + " " + "A soma total dos números é: " + soma + "<br>"
        soma = 0
    }
    res.innerHTML += `e a soma total é ${somaTotal}`
})

const exercicio03 = botao03.addEventListener('click', () => {

    limparDiv()

    /*Crie um programa que leia uma matriz 3x3 de números inteiros e exiba a soma dos elementos da diagonal principal. */

    let matriz = []
    let totalLinhas = 3
    let totalColunas = 3
    let soma = 0

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}: `))

            linhaAtual.push(numero)

        }
        matriz.push(linhaAtual)
    }


    for (let somaColuna = 0; somaColuna < totalColunas; somaColuna++) {

        soma += matriz[somaColuna][somaColuna]

    }

    for (let linha = 0; linha < totalLinhas; linha++) {

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            res.innerHTML += matriz[linha][coluna] + " "

        }

        res.innerHTML += "<br>"

    }

    res.innerHTML += `A soma dos elementos da diagonal é ${soma}`

})

const exercicio04 = botao04.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba a soma das duas matrizes.*/

    let matrizTotal = []
    let matriz01 = []
    let matriz02 = []
    let totalLinhas = 2
    let totalColunas = 2
    let soma = 0

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}: `))

            linhaAtual.push(numero)

        }

        matriz01.push(linhaAtual)

    }

    alert(matriz01)

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}: `))

            linhaAtual.push(numero)

        }

        matriz02.push(linhaAtual)

    }
    alert(matriz02)

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaResultadoSoma = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            soma = matriz01[linha][coluna] + matriz02[linha][coluna]

            linhaResultadoSoma.push(soma)

        }
        matrizTotal.push(linhaResultadoSoma)
    }

    res.innerHTML = `A soma das duas matrizes é ${matrizTotal}`

})

const exercicio05 = botao05.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o maior valor presente na matriz. */

    let matriz = []
    let totalLinhas = 3
    let totalColunas = 3
    let numeroMaior = 0

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}`))

            linhaAtual.push(numero)

        }

        matriz.push(linhaAtual)

    }



    for (let linha = 0; linha < totalLinhas; linha++) {

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            if (linha == 0 && coluna == 0) {
                numeroMaior = matriz[0][0]
            }

            else if (matriz[linha][coluna] > numeroMaior) {
                numeroMaior = matriz[linha][coluna]
            }

        }
    }

    res.innerHTML = numeroMaior


})

const exercicio06 = botao06.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que leia uma matriz 4x4 de números inteiros e exiba a média aritmética dos elementos. */

    let matriz = []
    let totaLinhas = 4
    let totalColunas = 4
    let contadoraMedia = 0
    let soma = 0
    let media = 0

    for (let linha = 0; linha < totaLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}: `))
            contadoraMedia++
            linhaAtual.push(numero)

        }
        matriz.push(linhaAtual)
    }


    for (let linha = 0; linha < totaLinhas; linha++) {

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            soma += matriz[linha][coluna]

        }

    }

    alert(soma)
    alert(contadoraMedia)

    media = soma / contadoraMedia

    res.innerHTML = media
})

const exercicio07 = botao07.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba o produto entre elas.*/

    let matriz01 = []
    let matriz02 = []
    let matrizProduto = []
    let totalColunas = 2
    let totalLinhas = 2

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt("Digite seu número: "))

            linhaAtual.push(numero)

        }

        matriz01.push(linhaAtual)

    }

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt("Digite seu número: "))

            linhaAtual.push(numero)
        }

        matriz02.push(linhaAtual)
    }

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaResultado = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let soma = 0

            for (let k = 0; k < totalLinhas; k++) {


                soma += matriz01[linha][k] * matriz02[k][coluna]
            }

            linhaResultado.push(soma)
        }

        matrizProduto.push(linhaResultado)
    }

    res.innerHTML = "O produto das matrizes é:<br>"
    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaTexto = ""
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            linhaTexto += matrizProduto[linha][coluna] + " "
        }
        res.innerHTML += linhaTexto + "<br>"
    }

})

const exercicio08 = botao08.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o menor valor presente na matriz.*/

    let matriz = []
    let totalLinhas = 3
    let totalColunas = 3
    let numeroMenor = 0

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}: `))

            linhaAtual.push(numero)

        }

        matriz.push(linhaAtual)

    }

    numeroMenor = matriz[0][0]

    for (let linha = 0; linha < totalLinhas; linha++) {

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            if (numeroMenor > matriz[linha][coluna]) {
                numeroMenor = matriz[linha][coluna]
            }

        }

    }

    res.innerHTML = `O número menor da matriz ${matriz} é ${numeroMenor}`


})

const exercicio09 = botao09.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é simétrica (igual à sua transposta).*/

    let matriz = []
    let totalLinhas = 3
    let totalColunas = 3

    for (let linha = 0; linha < totalLinhas; linha++) {

        let linhaAtual = []

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            let numero = parseInt(prompt(`Digite o número da linha ${linha} e da coluna ${coluna}: `))

            linhaAtual.push(numero)
        }

        matriz.push(linhaAtual)

    }


    let simetrica = true

    for (let linha = 0; linha < totalLinhas; linha++) {

        for (let coluna = 0; coluna < totalColunas; coluna++) {

            if (matriz[linha][coluna] !== matriz[coluna][linha]) {
                simetrica = false
                break;
            }
        }
        if (!simetrica) {
            break
        }
    }

    if (simetrica) {
        res.innerHTML += "<br>A matriz **É** simétrica."
    } else {
        res.innerHTML += "<br>A matriz **NÃO** é simétrica."
    }

})

const exercicio10 = botao10.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia uma matriz 4x4 de números inteiros 
       e exiba a soma dos elementos de cada coluna. */

    let matriz = []
    const totalLinhas = 4
    const totalColunas = 4

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = []
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let numero = parseInt(prompt(`Digite o valor para [Linha ${linha}][Coluna ${coluna}]:`))
            linhaAtual.push(numero)
        }
        matriz.push(linhaAtual)
    }

    res.innerHTML = "Matriz Digitada:<br>"
    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaTexto = ""
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            linhaTexto += matriz[linha][coluna] + " "
        }
        res.innerHTML += linhaTexto + "<br>"
    }
    res.innerHTML += "<br>--- Somas das Colunas ---<br>"

    for (let coluna = 0; coluna < totalColunas; coluna++) {
        
        let somaDaColuna = 0

        for (let linha = 0; linha < totalLinhas; linha++) {
            
            somaDaColuna += matriz[linha][coluna]
        }

        res.innerHTML += `Soma da Coluna ${coluna}: ${somaDaColuna}<br>`
    }
})

const exercicio11 = botao11.addEventListener('click', () => {

    limparDiv();

    /* Escreva um programa que leia duas matrizes 2x2 de números inteiros 
       e verifique se elas são iguais. */

    let matrizA = [];
    let matrizB = [];
    const totalLinhas = 2;
    const totalColunas = 2;

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let num = parseInt(prompt(`Matriz A [${linha}][${coluna}]: `));
            linhaAtual.push(num);
        }
        matrizA.push(linhaAtual);
    }

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let num = parseInt(prompt(`Matriz B [${linha}][${coluna}]: `));
            linhaAtual.push(num);
        }
        matrizB.push(linhaAtual);
    }

    let saoIguais = true; 

    for (let linha = 0; linha < totalLinhas; linha++) {
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            
            if (matrizA[linha][coluna] !== matrizB[linha][coluna]) {
                
                saoIguais = false;
                break; 
            }
        }
        
        if (!saoIguais) {
            break;
        }
    }

    for (let l = 0; l < totalLinhas; l++) {
        res.innerHTML += matrizA[l].join(' ') + "<br>";
    }

    for (let l = 0; l < totalLinhas; l++) {
        res.innerHTML += matrizB[l].join(' ') + "<br>";
    }

    if (saoIguais) {
        res.innerHTML += "<br>As matrizes **SÃO** iguais.";
    } else {
        res.innerHTML += "<br>As matrizes **NÃO** são iguais.";
    }
});

const exercicio12 = botao12.addEventListener('click', () => {

    limparDiv();

    /* Crie um programa que leia uma matriz 3x3 de números inteiros 
       e exiba o produto dos elementos da diagonal secundária. */

    let matriz = [];
    const totalLinhas = 3;
    const totalColunas = 3;

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let numero = parseInt(prompt(`Digite o valor para [Linha ${linha}][Coluna ${coluna}]:`));
            linhaAtual.push(numero);
        }
        matriz.push(linhaAtual);
    }

    let produto = 1; 

    for (let i = 0; i < totalLinhas; i++) {
        
        let coluna = (totalLinhas - 1) - i;

        produto *= matriz[i][coluna]; 
    }

    for (let l = 0; l < totalLinhas; l++) {
        res.innerHTML += matriz[l].join(' ') + "<br>";
    }

    res.innerHTML += `<br>O produto da diagonal secundária é: ${produto}`;
});

const exercicio13 = botao13.addEventListener('click', () => {

    limparDiv();

    /* Faça um programa que leia uma matriz 4x4 de números inteiros 
       e exiba o maior valor presente em cada linha. */

    let matriz = [];
    const totalLinhas = 4;
    const totalColunas = 4;

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let numero = parseInt(prompt(`Digite o valor para [Linha ${linha}][Coluna ${coluna}]:`));
            linhaAtual.push(numero);
        }
        matriz.push(linhaAtual);
    }

    res.innerHTML = "<b>Matriz Digitada:</b><br>";
    for (let l = 0; l < totalLinhas; l++) {
        res.innerHTML += matriz[l].join(' ') + "<br>";
    }

    for (let linha = 0; linha < totalLinhas; linha++) {

        let maiorDaLinha = matriz[linha][0];

        for (let coluna = 1; coluna < totalColunas; coluna++) {

            if (matriz[linha][coluna] > maiorDaLinha) {
                maiorDaLinha = matriz[linha][coluna];
            }
        }
        
        // 3. Exibe o resultado DESSA linha antes de ir para a próxima
        res.innerHTML += `Maior valor da Linha ${linha}: ${maiorDaLinha}<br>`;
    }
});

const exercicio14 = botao14.addEventListener('click', () => {

    limparDiv();

    /* Crie um programa que leia uma matriz 3x3 de números inteiros 
       e verifique se ela é uma matriz identidade. */

    let matriz = [];
    const totalLinhas = 3;
    const totalColunas = 3;

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let numero = parseInt(prompt(`Digite o valor para [Linha ${linha}][Coluna ${coluna}]:`));
            linhaAtual.push(numero);
        }
        matriz.push(linhaAtual);
    }

    let ehIdentidade = true; 

    for (let linha = 0; linha < totalLinhas; linha++) {
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            
            if (linha === coluna) {
                if (matriz[linha][coluna] !== 1) {
                    ehIdentidade = false;
                }
            } 

            else {

                if (matriz[linha][coluna] !== 0) {
                    ehIdentidade = false;
                }
            }


            if (!ehIdentidade) {
                break;
            }
        }

        if (!ehIdentidade) {
            break;
        }
    }

    for (let l = 0; l < totalLinhas; l++) {
        res.innerHTML += matriz[l].join(' ') + "<br>";
    }

    // Exibe o resultado final
    if (ehIdentidade) {
        res.innerHTML += "<br>A matriz **É** uma Matriz Identidade.";
    } else {
        res.innerHTML += "<br>A matriz **NÃO** é uma Matriz Identidade.";
    }
});

const exercicio15 = botao15.addEventListener('click', () => {

    limparDiv();

    /* Crie um programa que leia duas matrizes 2x2 de números inteiros 
       e exiba a subtração entre elas. */

    let matrizA = [];
    let matrizB = [];
    let matrizResultado = [];
    const totalLinhas = 2;
    const totalColunas = 2;

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let num = parseInt(prompt(`Matriz A [${linha}][${coluna}]: `));
            linhaAtual.push(num);
        }
        matrizA.push(linhaAtual);
    }

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaAtual = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            let num = parseInt(prompt(`Matriz B [${linha}][${coluna}]: `));
            linhaAtual.push(num);
        }
        matrizB.push(linhaAtual);
    }

    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaResultado = [];
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            
            let subtracao = matrizA[linha][coluna] - matrizB[linha][coluna];
            
            linhaResultado.push(subtracao);
        }
        matrizResultado.push(linhaResultado);
    }


    res.innerHTML = "<b>Matriz Resultado (A - B):</b><br>";
    for (let linha = 0; linha < totalLinhas; linha++) {
        let linhaTexto = "";
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            linhaTexto += matrizResultado[linha][coluna] + " ";
        }
        res.innerHTML += linhaTexto + "<br>";
    }

})



