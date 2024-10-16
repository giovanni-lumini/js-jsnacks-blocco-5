const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
numbers_plus_one = [];

numbers.forEach(function(element){
    let n_plus_one = ++element;
    numbers_plus_one.push(n_plus_one);
});
console.log(numbers_plus_one);
