const SIZE_LENGTH_CPF = 11;
const REGEX_ONLY_NUMBERS = /\D/g;

const returnOnlyNumbers = function (cpf) {
    return cpf.replace(REGEX_ONLY_NUMBERS, '');
}

const isLengthCpf = function (cpf) {
    return cpf.length === SIZE_LENGTH_CPF;
}

const isEveryNumbersEquals = function (cpf) {
    return cpf.split("").every(c => c === cpf[0]);
}

const calcDigito = function (numbers) {
    let resultaCalc = 0;
    for (let count = 0, multiplicador = 2; count < numbers.length; count++, multiplicador++) {
        resultaCalc += Number.parseInt(numbers[count]) * multiplicador;
    }
    if ((resultaCalc % SIZE_LENGTH_CPF) < 2) {
        return 0;
    }
    return (SIZE_LENGTH_CPF - (resultaCalc % SIZE_LENGTH_CPF));
}

const calcDigitoVerificadorCpf = function (cpf) {
    let numbersCpf = cpf.split('').reverse();
    const digito1 = calcDigito(numbersCpf);
    numbersCpf.unshift(digito1);
    const digito2 = calcDigito(numbersCpf);
    return `${digito1}${digito2}`;
}

const validateCPF = function (cpf) {
    if (!cpf) { return false; }
    cpf = returnOnlyNumbers(cpf);
    if (!isLengthCpf(cpf)) { return false; }
    if (isEveryNumbersEquals(cpf)) { return false; }
    const digitoVerificadorCpf = cpf.slice(-2);
    const cpfSemDigitoVerificador = cpf.slice(0, cpf.length - 2);
    const digitoVerificador = calcDigitoVerificadorCpf(cpfSemDigitoVerificador);
    if (digitoVerificador === digitoVerificadorCpf) {
        return true;
    }
    return false;
}

module.exports = {
    validateCPF
}