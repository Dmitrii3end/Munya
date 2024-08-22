let start = 20000;

let lvl = 4;

let result = start;

let koef = 1.1025;
let koefkoef = 1.05;

console.log(2018259)

if (lvl > 1){
    result *= koef
}
for (let i = 1; i < lvl; i++){
    result = result * koef * koefkoef;
    koef *= koefkoef;
}

result = Math.round(result);

console.log(`Стоимость: ${Math.round(result)}`)

let x = Math.round(20000 * Math.pow(1.07, lvl));
console.log(`Доход: ${x}`)
console.log(`Всего: ${start * (Math.pow(1.07, lvl) - 1) / (1.07 - 1)}`)

console.log(`Окупаемость: ${result / x}`)