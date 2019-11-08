var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES6 ou ES2015 consultar site es6.features.org
var num = 2;
var PI = 3.14;
//arrow function
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
/*esse código é igual ao de cima mas utilizando arrow function
ao compilar o código ficará igual ao de cima*/
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'sdfsdf';
