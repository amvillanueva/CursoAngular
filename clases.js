"use strict";
var calculadora = /** @class */ (function () {
    function calculadora(divendo, divsor) {
        console.log('hola mundo, iniciando calculadora');
        this.dividendo = divendo;
        this.divisor = divsor;
    }
    calculadora.prototype.sumar = function () {
        return this.dividendo + this.divisor;
    };
    return calculadora;
}());
var calA = new calculadora(8, 2);
console.log(calA.sumar);
calA.dividendo = 50;
calA.divisor = 5;
console.log(calA.sumar);
