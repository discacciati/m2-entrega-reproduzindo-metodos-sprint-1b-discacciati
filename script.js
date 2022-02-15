
// ----- REPRODUZINDO OS METODOS -------- //
const array = [10,15,20,30];
console.log(`Array é ${array}`);

//----- Função CallBack ------//
function callbackMultiply(element, i , array, globalThis ){  
    return element*2 ;
}


// ------- forEach() ------------// Executa um loop for e executa a função callback em todos elementos do array. 
// -----------------------------// Mas não retorna um novo Array. Nem altera o original.
//array.forEach(callbackMultiply);
function newforEach (array, callbackMultiply){
    const arrayTemp = [];
    for( let i=0; i < array.length ; i++ ){
        let element = array[i];
        arrayTemp.push(callbackMultiply(element, i , array, globalThis));
    }
    return arrayTemp;
}
const newArray1 = newforEach(array,callbackMultiply);
console.log(`Executando a função newForEach temos newArray1 como ${newArray1}`);


// ------- map() ----------// Executa um loop for e executa a função callback em todos os elementos do array. 
// -----------------------// Retorna um novo array com cada novo elemento. Alterando o array original.
//array.map(callbackMultiply);
function newMap(array,callbackMultiply){
    for(let i = 0 ; i<array.length ; i++){
        let element = array[i];
        array[i] = callbackMultiply(element, i , array, globalThis );
    }
}
newMap(array, callbackMultiply);
console.log(`Executando a função newMap temos array como ${array}`);


//---------------------------------------------------------------------------------------------------//

const novoArrayTeste = [5,10,15,20,25,30,35];

console.log(`Novo Array de Teste é ${novoArrayTeste}`);

function callBackTamanho (element){
    return element > 15 ;
}


// ----------------------------------// executa um loop for e executa uma função callback em cada elemento, 
// ----------- filter() ------------// retornando um boleano para cada elemento. Se true, é adicionado ao novo array, 
// --------------------------------// que irá conter apenas os elementos que passaram no resultado da função callback
//const newArrayFiltrado = novoArrayTeste.filter(callBackTamanho);
function newFilter (novoArrayTeste, callBackTamanho){
    const arrayFiltrado = [];
    for ( let i=0 ; i<novoArrayTeste.length ; i++){
        if (callBackTamanho(novoArrayTeste[i], i , novoArrayTeste , globalThis) === true){
            arrayFiltrado.push(novoArrayTeste[i]);
        }
    }
    return arrayFiltrado;
}
const newArrayFiltrado = newFilter (novoArrayTeste, callBackTamanho);
console.log (newArrayFiltrado);


// ----------------------------// executa um loop for e executa uma função callback em cada elemento, 
//---------- find() ----------// retornando um boleano para cada elemento. O primeiro elemento que obtiver true da função CAllback, 
// --------------------------// será retornado (o elemento).
//console.log(novoArrayTeste.find(callBackTamanho));
function newFind(novoArrayTeste, callBackTamanho){
    for( let i=0 ; i<novoArrayTeste.length ; i++){
        if(callBackTamanho(novoArrayTeste[i], i , novoArrayTeste , globalThis) === true){
            return novoArrayTeste[i];
        }
    }
}    
console.log(newFind(novoArrayTeste, callBackTamanho))


// --------------------------------------// executa um loop for e executa uma função callback em cada elemento, 
// ------------- findIndex() -----------// retornando um boleano para cada elemento. 
// ------------------------------------// O primeiro elemento que obtiver true da função CAllback, retornará o index desse elemento. 
//console.log(novoArrayTeste.findIndex(callBackTamanho));
function newfindIndex(novoArrayTeste, callBackTamanho){
    for( let i=0 ; i<novoArrayTeste.length ; i++){
        if(callBackTamanho(novoArrayTeste[i], i , novoArrayTeste , globalThis) === true){
            return i;
        }
    }
}    
console.log(newfindIndex(novoArrayTeste, callBackTamanho))


// ----------------------------------// É declarado um valor inicial, se não declarado será 0 . 
// --------- reduce() --------------// Executa um loop for para percorrer o array. 
// --------------------------------// Será executada uma função Callback dentro do loop que irá adicionar 
// -------------------------------// o resultado da callback ao valor inicial para um valor total. O retorno final será esse valor total.
let initialValue = 5;
//console.log(novoArrayTeste.reduce(callBackSoma, initialValue));

function callBackSoma(total, element){
    return total + element;
}

function newreduce(novoArrayTeste,callBackSoma, initialValue){
        let total = initialValue;
        for (let i = 0 ; i<novoArrayTeste.length ; i++){
            total = callBackSoma(total, novoArrayTeste[i], i , novoArrayTeste);
        }
        return total;
}
console.log(newreduce(novoArrayTeste, callBackSoma, initialValue));


// -------------------------------// executa um loop for em um array para verificar se cada elemento passa no teste 
// ------------ some() ----------// de uma funcao Callback (que verifica uma condição em true ou false). 
// -----------------------------// Se pelo menos um elemento retornar true, o retorno será true. 
// ----------------------------// Se todos forem false, o retorno será false. 
//console.log ( novoArrayTeste.some(callBackTamanho,globalThis));

function newsome(novoArrayTeste, callBackTamanho){
    for( let i = 0 ; i<novoArrayTeste.length ; i++){
        if(callBackTamanho(novoArrayTeste[i], i , novoArrayTeste , globalThis)=== true){
            return true; 
        }
    }
    return false;
}
console.log(newsome(novoArrayTeste, callBackTamanho));


// -----------------------------------// executa um loop for em um array para verificar se cada elemento passa no teste 
// ------------ every() -------------// de uma funcao Callback (que verifica uma condição em true ou false). 
// ---------------------------------// Se todos os elementos retornarem true, o retorno será true. 
// --------------------------------// Se um elemento retornar false, o retorno será false. 
console.log ( novoArrayTeste.every(callBackTamanho,globalThis));

function newevery(novoArrayTeste, callBackTamanho){
    let resultado = false ; 
    for( let i = 0 ; i<novoArrayTeste.length ; i++){
        if(callBackTamanho(novoArrayTeste[i], i , novoArrayTeste , globalThis)!== true){
            return false;
        }
        if(callBackTamanho(novoArrayTeste[i], i , novoArrayTeste , globalThis)=== true){
            resultado = true; 
        }
    }
    if (resultado === true){ 
        return true;
    }   
}
console.log(newevery(novoArrayTeste, callBackTamanho));


// ----------------------------------//executa um loop for para percorrer um array e verificar se, 
// ---------- includes() -----------// algum elemento do array é igual ao valor (value) declarado. 
// --------------------------------// Iniciando a busca a partir do index declarado(fromIndex). 
// -------------------------------// Se o valor for encontrado é retornado True, se não será false.  
//console.log(novoArrayTeste.includes(30,0));

let value = 30;
let fromIndex = 0;

function newincludes(novoArrayTeste, fromIndex, value){
    for( let i = fromIndex ; i<novoArrayTeste.length; i++){
        if (novoArrayTeste[i] === value){
            return true;
        }
    }
    return false;
}
console.log(newincludes(novoArrayTeste, fromIndex, value));


// ---------------------------------// executa um loop for para percorrer um array e verificar se, 
// --------------------------------// algum elemento do array é igual ao valor declarado. 
// ---------- indexOf() ----------// Iniciando a busca a partir do index declarado.  
// ------------------------------// Se o valor for encontrado é retornando o índex desse valor. 
// -----------------------------// Se não for encontrado, será retornado -1 (referente a nenhum index.)
console.log(novoArrayTeste.indexOf(30,0));

let valor = 30;
let indexInicial = 0;

function newindexOf(novoArrayTeste, indexInicial, valor){
    for( let i = indexInicial ; i<novoArrayTeste.length; i++){
        if (novoArrayTeste[i] === valor){
            return i;
        }
    }
    return -1;
}
console.log(newindexOf(novoArrayTeste, indexInicial, valor));


// --------------------------------// Ele retorna um novo array, juntando(concatenando) o valor do array inicial 
// ----------- concat() ----------// (que receberá o concat) com os valores ou arrays passados como parâmetros. 
// ------------------------------// Mantendo a ordem que foram passados.
//console.log (novoArrayTeste.concat(50,60, array));
let valor1 = 50;
let valor2 = 60;
function newconcat(novoArrayTeste, valor1, valor2, array){
    const novoArrayConcatenado = novoArrayTeste;
    novoArrayConcatenado.push(valor1);
    novoArrayConcatenado.push(valor2);
    for( let i=0 ; i<array.length ; i++){
        novoArrayConcatenado.push(array[i]);
    }
    return novoArrayConcatenado;
}
console.log (newconcat(novoArrayTeste, valor1, valor2, array));


// -------------------------------------// ele executa um loop for em todos os elementos de um array, 
// ------------ join() ----------------// transformando todos em string e juntando todos os elementos uma nova string, 
// -----------------------------------// separando os elementos com o separador declarado, e retorna a nova string.

const arrayTexto = ["Eliane", "Discacciati", "Dantas"]

//console.log (novoArrayTeste.join(", "));
//console.log (arrayTexto.join(" "));

function newjoin(arrayTexto){
    let newString = "";
    for( let i=0 ; i<arrayTexto.length ; i++){
        newString += String(arrayTexto[i]) + " ";
    }
    return newString;
}
console.log (newjoin(arrayTexto));


// ---------------------------------//executa um loop for, iniciando no index inicial declarado, 
// --------- slice() --------------// até o index final declarado(não incluindo o valor do último index), 
// -------------------------------// adicionando todos os elementos percorridos em um novo array. 
// ------------------------------// Retorna esse novo array com parte do array inicial. Array inicial não é alterado.
console.log(novoArrayTeste.slice(1,4));

let indexdeInicio = 1;
let ultimoIndexUsado = 4 ; 

function newslice(novoArrayTeste, indexdeInicio, ultimoIndexUsado){
    const novoArrayRecortado = [];
    for( let i=indexdeInicio; i<ultimoIndexUsado ; i++){
        novoArrayRecortado.push(novoArrayTeste[i]);
    }
    return novoArrayRecortado;
}
console.log(newslice(novoArrayTeste, indexdeInicio, ultimoIndexUsado));

// -------------------------------------// executa um loop for, percorrendo todo array declarado. 
// ------------------------------------// Adicionando cada posição ao novo Array, 
// ---------- flat() -----------------// Na posição que for diferente de um número e tiver um array aninhado, 
// ----------------------------------// ele quebra esse array e adiciona ao novo array. 
// ---------------------------------// Quantas camadas (valor declarado) de arrays aninhados desejar achatar. retorna um novo array.
const arraysAninhados = [10,20,30, [40,50,60]];
//console.log(arraysAninhados.flat(1));

function newflat(arraysAninhados){
    const arrayAchatado = [];
    for(let i=0; i<arraysAninhados.length ; i++){
        console.log(typeof arraysAninhados[i]);
        if (typeof arraysAninhados[i] !== "object"){ 
            arrayAchatado.push(arraysAninhados[i]);
        }
        if(typeof arraysAninhados[i] === "object"){
            let pequenoArray = arraysAninhados[i];
            for(let index=0; index<pequenoArray.length; index++){
                arrayAchatado.push(pequenoArray[index]);
            }
        } 
    }
    return arrayAchatado;
}
console.log(newflat(arraysAninhados));


// ----------------------------------// Quando vc usa o método .map() aninhando o retorno da função callback 
// ---------- flatMap() ------------// dentro de um array, ele retorna um novo array, com um array pequeno (com apenas o elemento) 
// --------------------------------// em cada posição do index. O .flatmap() aplica o método flat nesses pequanos arrays aninhados 
// -------------------------------// e retorna um único array. 
console.log(array.map(element => [element*2]));
console.log(array.flatMap(element => [element*2]));

function callbackMultiplyAninhada(element, i , array, globalThis ){  
    return element*2 ;
}

function newflatMap(array,callbackMultiplyAninhada){
    const arrayAninhada =[];
    const arrayFlat = [];
    //const arrayAninhadaFlat =[];
    for(let i = 0 ; i<array.length ; i++){
        let element = array[i];
       arrayAninhada.push([callbackMultiply(element, i , array, globalThis )]);
    }
    for(let index=0 ; index<arrayAninhada.length ; index++){
        const arrayTemporario = arrayAninhada[index];
        arrayFlat.push(arrayTemporario[0]);
    }
    //console.log(arrayAninhada);
    return arrayFlat;
}
console.log(newflatMap(array, callbackMultiply));
