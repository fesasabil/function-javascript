function Vowel(str) {
var hit= 'aiueo';
var tung = 0;
if (str.length === 0) {
return  tung;
} else {
for(var i = 0; i < str.length; i++) {
if(hit.indexOf(str[i]) !== -1) { tung++;
}
str = str.slice(1);
return tung + Vowel(str);
}
}
}


console.log(Vowel('aku selalu riang'));


//cara 2
var kata = "kita bisa";
var hasil = kata.match(/[aiueo]/g);
console.log(hasil.length);


//cara3
function vowelcount(str) {
    return str.replace(/[aiueo]/g "")
}