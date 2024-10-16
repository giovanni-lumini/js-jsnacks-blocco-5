const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

nums_pari = nums.filter(function(element){
    if (element % 2 === 0){
        return true
    }
    return false
});
console.log(nums_pari);
