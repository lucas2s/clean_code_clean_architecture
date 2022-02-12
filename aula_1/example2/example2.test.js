const example2 = require("./example2");

test("Verificar se CPF é nulo", function () {
	const isValid = example2.validateCPF(null);
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF é undefinied", function () {
	const isValid = example2.validateCPF(undefined);
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF é branco", function () {
	const isValid = example2.validateCPF('');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF possui a quantidade correta de números", function () {
	const isValid = example2.validateCPF('95.411.347-80');
	expect(isValid).toBeFalsy();
});

test("Verificar se todos os numeros do CPF são iguais", function () {
	const isValid = example2.validateCPF('111.111.111-11');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF possui digito verificador inválido", function () {
	const isValid = example2.validateCPF('123.456.789-99');
	expect(isValid).toBeFalsy();
});

test("Verificar se CPF é valido A", function () {
	const isValid = example2.validateCPF('935.411.347-80');
	expect(isValid).toBeTruthy();
});

test("Verificar se CPF é valido B", function () {
	const isValid = example2.validateCPF('357.188.378-05');
	expect(isValid).toBeTruthy();
});

test("Verificar se CPF é valido C", function () {
	const isValid = example2.validateCPF('987.654.321-00');
	expect(isValid).toBeTruthy();
});