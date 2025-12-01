const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")

function ex01() {
    let matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Matriz[${i}][${j}]:`));
        }
    }

    console.log(matriz);

}
btnEx01.addEventListener('click', ex01)

function ex02() {
    let soma = 0;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            soma += Number(prompt(`Matriz[${i}][${j}]:`));
        }
    }

    console.log("Soma =", soma);

}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let matriz = [];
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Matriz[${i}][${j}]:`));
            if (i === j) soma += matriz[i][j];
        }
    }

    console.log("Soma da diagonal principal =", soma);

}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let A = [], B = [], C = [];

    for (let i = 0; i < 2; i++) {
        A[i] = [];
        B[i] = [];
        C[i] = [];
        for (let j = 0; j < 2; j++) {
            A[i][j] = Number(prompt(`A[${i}][${j}]:`));
            B[i][j] = Number(prompt(`B[${i}][${j}]:`));
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    console.log("Soma das matrizes:");
    console.log(C);

}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let maior = -Infinity;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let n = Number(prompt(`Matriz[${i}][${j}]:`));
            if (n > maior) maior = n;
        }
    }

    console.log("Maior valor =", maior);

}
btnEx05.addEventListener('click', ex05)

function ex06() {
    const matriz = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    let soma = 0;
    let total = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j];
            total++;
        }
    }

    console.log("Média =", soma / total);

}
btnEx06.addEventListener('click', ex06)

function ex07() {
    const A = [
        [1, 2],
        [3, 4]
    ];

    const B = [
        [5, 6],
        [7, 8]
    ];

    const produto = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            produto[i][j] = A[i][0] * B[0][j] + A[i][1] * B[1][j];
        }
    }

    console.log("Produto =");
    console.table(produto);

}
btnEx07.addEventListener('click', ex07)

function ex08() {
    const matriz = [
        [3, 8, 1],
        [9, 2, 7],
        [4, 6, 5]
    ];

    let menor = matriz[0][0];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] < menor) menor = matriz[i][j];
        }
    }

    console.log("Menor valor =", menor);

}
btnEx08.addEventListener('click', ex08)

function ex09() {
    const matriz = [
        [1, 2, 3],
        [2, 4, 5],
        [3, 5, 6]
    ];

    let simetrica = true;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                simetrica = false;
                break;
            }
        }
    }

    console.log(simetrica ? "É simétrica" : "Não é simétrica");

}
btnEx09.addEventListener('click', ex09)

function ex10() {
    const matriz = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    const somaColunas = [0, 0, 0, 0];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    console.log("Soma das colunas =", somaColunas);

}
btnEx10.addEventListener('click', ex10)

function ex11() {
    const A = [
        [1, 2],
        [3, 4]
    ];

    const B = [
        [1, 2],
        [3, 4]
    ];

    let iguais = true;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (A[i][j] !== B[i][j]) iguais = false;
        }
    }

    console.log(iguais ? "São iguais" : "São diferentes");

}
btnEx11.addEventListener('click', ex11)

function ex12() {
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let produto = 1;

    for (let i = 0; i < 3; i++) {
        produto *= matriz[i][2 - i];
    }

    console.log("Produto da diagonal secundária =", produto);

}
btnEx12.addEventListener('click', ex12)

function ex13() {
    const matriz = [
        [1, 7, 3, 4],
        [5, 2, 8, 1],
        [9, 10, 11, 6],
        [3, 14, 5, 2]
    ];

    const maiores = [];

    for (let i = 0; i < 4; i++) {
        let maior = matriz[i][0];
        for (let j = 1; j < 4; j++) {
            if (matriz[i][j] > maior) maior = matriz[i][j];
        }
        maiores.push(maior);
    }

    console.log("Maior valor de cada linha =", maiores);

}
btnEx13.addEventListener('click', ex13)

function ex14() {
    const matriz = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    let identidade = true;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ((i === j && matriz[i][j] !== 1) ||
                (i !== j && matriz[i][j] !== 0)) {
                identidade = false;
            }
        }
    }

    console.log(identidade ? "É identidade" : "Não é identidade");

}
btnEx14.addEventListener('click', ex14)

function ex15() {
    const A = [
        [5, 7],
        [9, 4]
    ];

    const B = [
        [1, 2],
        [3, 1]
    ];

    const sub = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            sub[i][j] = A[i][j] - B[i][j];
        }
    }

    console.log("Subtração =");
    console.table(sub);

}
btnEx15.addEventListener('click', ex15)