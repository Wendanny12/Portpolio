const txtElement = ['Saya', 'Seorang Pemula','Belajar Web.!!'];
let count = 0;
let txtIndex = 0;
let curentTxt = '';
let words = ''; 

(function ngetik(){

if(count == txtElement){
    count = 0;
}
curentTxt = txtElement[count];

words = curentTxt.slice(0,++txtIndex);
document.querySelector('.efek-ngetik').textContent = words;
if(words.length == curentTxt.length){
    count++;
    txtIndex = 0;
}

setTimeout(ngetik, 500);

})();