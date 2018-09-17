// tugas 1
function shoutOut(){
    console.log("Hallo FUnction");
}


// tugas 2
var num1 = 5;
var num2 = 6;
var hasil = calcu(num1,num2);

function calcu(num1,num2) {
    return(num1 * num2);
}
console.log(hasil);



// tugas 3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function tag(name,age,address,hobby) {
    return('Nama saya ' +name+ ', Umur saya ' +age+' tahun' + ', Alamat saya di ' +address+ ', Saya punya hobby yaitu ' +hobby+ '!');
}

var fullSentence = tag(name,age,address,hobby);
console.log(fullSentence);