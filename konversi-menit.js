function konversiMenit(menit) {
    var men = Math.floor(menit / 60);
    var nit = (menit % 60).toString().length === 1 ? '0' + Math.floor(menit % 60) : Math.floor(menit % 60);
    
    return men + ':' + nit;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));