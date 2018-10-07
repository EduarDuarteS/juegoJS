// Algunos metodos de los array

let arr = ["cero",'uno',"do's","tre\'s", 'cua/"tro'];

console.log(arr, arr[4],arr.length);

//push(empujar) agregar un valor eq add
arr.push("cinc\"o");
console.log(arr);

//pop(popular) remueve el ultimo valor y regresa el mismo
let ult =arr.pop();
console.log(arr, ult);

//shift(cambio) remueve el primer valor del array
let firts = arr.shift();
console.log(arr, firts);

/*splice (empalme) crea un nuevo array
agrega los posteriores al inicio, cantidad, agregar*/
let newArr = arr.splice(1,2,"newVal",2,3);
console.log(newArr,arr);
