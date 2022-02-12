const SIZE_LENGTH_CPF = 11;
const REGEX_ONLY_NUMBERS = /[\.\-]*/g;

const validateCpf = function (rawCpf) {
    if (!rawCpf) {
        return false;
    }
    const cpf = onlyNumbers(rawCpf);
    if (!isLengthCpf(cpf)) {
        return false;
    }
    if (isBlocked(cpf)) {
        return false;
    }
    const actualCheckDigit = cpf.slice(9);
    const calculatedCheckDigit = calculateCheckDigitCpf(cpf);
    return actualCheckDigit === calculatedCheckDigit;
}

const onlyNumbers = function (cpf) {
    return cpf.replace(REGEX_ONLY_NUMBERS, '');
}

const isLengthCpf = function (cpf) {
    return cpf.length === SIZE_LENGTH_CPF;
}

const isBlocked = function (cpf) {
    const [firstDigit] = cpf;
    return cpf.split("").every(digit => digit === firstDigit);
}

const calculateCheckDigitCpf = function (cpf) {
    let reverseCpf = cpf.slice(0, 9).split('').reverse();
    const digito1 = calculatedDigit(reverseCpf);
    reverseCpf.unshift(digito1);
    const digito2 = calculatedDigit(reverseCpf);
    return `${digito1}${digito2}`;
}

const calculatedDigit = function (numbers) {
    let resultDigit = 0;
    for (let count = 0, multiplicador = 2; count < numbers.length; count++, multiplicador++) {
        resultDigit += Number.parseInt(numbers[count]) * multiplicador;
    }
    const rest = resultDigit % SIZE_LENGTH_CPF;
    return (rest < 2) ? 0 : SIZE_LENGTH_CPF - rest;
}

module.exports = {
    validateCpf
}