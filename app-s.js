//Início duas variáveis que recebem Number 

let nA = 100;
let nB = 3;
let c = nA + nB;
try {

    if(c <= 10){
    console.log(`O resultado é um número pequeno: ${c}`);
    }

    else if(c <= 50){
    console.log(`O resultado é um número meio que médio: ${c}`);
    
    }

    else if( c <= 98){
    console.log(`O resultado é um número médio: ${c}`);
    }

    else if(c >= 99){
    console.log(`Ta, agora o número é grande: ${c} `);
    
    }

    else if(nA && nB != Number){
    throw `Erro nos dados ou outra coisa, verifique e concerte!`
    }
} catch(a){

    console.log(`Houve um erro ${a}`);

}
