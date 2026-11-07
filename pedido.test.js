const {calculartotal} = requiere('./pedido');
const assert = requiere('assert');

assert.strictEqual(calculartotal(2,5000),10000);
console.log ('Test paso:2 cafes de 5000 = 10000');
