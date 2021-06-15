function DivisivelPorTres(num) {
    if (num % 3 != 0 || num == 0) {
        return false
    } else {
        return true
    }
}

console.log(DivisivelPorTres(9))
console.log(DivisivelPorTres(10))
console.log(DivisivelPorTres(12))
console.log(DivisivelPorTres(13))
console.log(DivisivelPorTres(15))
console.log(DivisivelPorTres(16))
