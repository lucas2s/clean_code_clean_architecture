const validateCpf = function (rawCpf) {
    if (!rawCpf) {
        return false;
    }
    const cpf = removeMask(rawCpf);
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

const removeMask = function (cpf) {
    return cpf.replace(/[\.\-]*/g, '');
}

const isLengthCpf = function (cpf) {
    return cpf.length === 11;
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

const calculatedDigit = function (cpf) {
    let totalDigit = 0;
    let multiplicador = 2;
    for (const digit of cpf) {
        totalDigit += Number.parseInt(digit) * multiplicador;
        multiplicador++;
    }
    const rest = totalDigit % 11;
    return (rest < 2) ? 0 : 11 - rest;
}

module.exports = {
    validateCpf
}