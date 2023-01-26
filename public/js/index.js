
const pesoForm = document.getElementById('pesoForm');
let inputPeso = document.getElementById('peso');
let inputIdade = document.getElementById('idade');
const divMsg = document.getElementById('msg');

pesoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calcular();
    pesoForm.reset();

});

function calcular() {

    if (inputIdade.value <= 0 || inputPeso.value <= 0) {
        divMsg.innerHTML = `<span>Você deve colocar numeros acima de 0.</span>`

    } else if (inputIdade.value <= 17) {
        let qtdAgua = ((40 * inputPeso.value) / 1000).toFixed(2)
        console.log(qtdAgua);

        divMsg.innerHTML = `<span>Quantidade recomendada pra você é de ${qtdAgua} litros por dia !!!!</span> `
    } else if (inputIdade.value >= 18 && inputIdade.value <= 55) {
        let qtdAgua = ((35 * inputPeso.value) / 1000).toFixed(2)
        console.log(qtdAgua);
        divMsg.innerHTML = `<span>Quantidade recomendada pra você é de ${qtdAgua} litros por dia !!!!</span> `

    } else if (inputIdade.value > 55 && inputIdade.value <= 65) {
        let qtdAgua = ((30 * inputPeso.value) / 1000).toFixed(2)
        console.log(qtdAgua);
        divMsg.innerHTML =  `<span>Quantidade recomendada pra você é de ${qtdAgua} litros por dia !!!!</span> `
    } else if (inputIdade.value > 65) {
        let qtdAgua = ((25 * inputPeso.value) / 1000).toFixed(2)
        console.log(qtdAgua);
        divMsg.innerHTML = `<span>Quantidade recomendada pra você é de ${qtdAgua} litros por dia !!!!</span> `

    }



}
