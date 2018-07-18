class calculadora{
    dividendo:number;
    divisor:number;


    constructor(divendo:number, divsor:number ){
        console.log('hola mundo, iniciando calculadora')
        this.dividendo=divendo;
        this.divisor=divsor
    }

    sumar(){
        return this.dividendo+ this.divisor

    }

}

let calA= new calculadora(8,2);
console.log(calA.sumar)

calA.dividendo=50
calA.divisor=5
console.log(calA.sumar)