let num1 = prompt("masukan angka pertama");
let num2 = prompt("masukan angka kedua");
let kondisi = prompt("Pilih Kondisi tambah, kurang, kali, bagi");
if (kondisi == "tambah") {
    let hasil = parseFloat(num1) + parseFloat(num2);
    alert(`hasilnya adalah ${hasil}`);
} else if (kondisi == "kurang") {
    let hasil = parseFloat(num1) + parseFloat(num2);
    alert(`hasilnya adalah ${hasil}`);
} else if (kondisi == "kali") {
    let hasil = parseFloat(num1) * parseFloat(num2);
    alert(`hasilnya adalah ${hasil}`);
} else if(kondisi == "bagi") {
    let hasil = parseFloat(num1) / parseFloat(num2);
    alert(`hasilnya adalah ${hasil}`);
} else {
    alert("kondisi tidak ditemukan");
}
