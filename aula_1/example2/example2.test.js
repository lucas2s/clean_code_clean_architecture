const example2 = require("./example2");

test("Verificar se CPF é nulo", function () {
	const cpf = null;
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeFalsy();
});

test("Verificar se CPF é undefinied", function () {
	const cpf = undefined;
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeFalsy();
});

test("Verificar se CPF é branco", function () {
	const cpf = '';
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeFalsy();
});

test("Verificar se CPF possui a quantidade correta de números", function () {
	const cpf = "95.411.347-80";
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeFalsy();
});

test("Verificar se todos os numeros do CPF são iguais", function () {
	const cpf = "111.111.111-11";
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeFalsy();
});

test("Verificar se CPF possui digito verificador inválido", function () {
	const cpf = '123.456.789-99';
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeFalsy();
});

test("Verificar se CPF é valido A", function () {
	const cpf = "935.411.347-80";
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeTruthy();
});

test("Verificar se CPF é valido B", function () {
	const cpf = "357.188.378-05";
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeTruthy();
});

test("Verificar se CPF é valido C", function () {
	const cpf = "987.654.321-00";
	const resultValidade = example2.validateCPF(cpf);
	expect(resultValidade).toBeTruthy();
});