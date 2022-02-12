const example2 = require("./example2");

test("Verificar se CPF é nulo", function () {
	const isValid = example2.validateCpf(null);
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF é undefinied", function () {
	const isValid = example2.validateCpf(undefined);
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF é branco", function () {
	const isValid = example2.validateCpf('');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF maior que 11 números", function () {
	const isValid = example2.validateCpf('4595.411.347-80');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF menor que 11 números", function () {
	const isValid = example2.validateCpf('95.411.347-80');
	expect(isValid).toBeFalsy();
});

test("Verificar se todos os numeros do CPF são iguais", function () {
	const isValid = example2.validateCpf('111.111.111-11');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF possui digito verificador inválido", function () {
	const isValid = example2.validateCpf('123.456.789-99');
	expect(isValid).toBeFalsy();
});

test("CPF não deve possuir letras", function () {
	const isValid = example2.validateCpf('987a654a321z00');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF é valido A", function () {
	const isValid = example2.validateCpf('935.411.347-80');
	expect(isValid).toBeTruthy();
});

test("Verificar se CPF é valido B", function () {
	const isValid = example2.validateCpf('357.188.378-05');
	expect(isValid).toBeTruthy();
});

test("Verificar se CPF é valido C", function () {
	const isValid = example2.validateCpf('987.654.321-00');
	expect(isValid).toBeTruthy();
});