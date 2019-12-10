/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib menggunakan pseudocode
 *  
 */


 //1. Buat penampung untuk menampung string numbersnya.
 //2. gunakan looping untuk mengakses stringnya.
 //3. gunakan if untuk dapat mengambil 5 angka paling belakang
 //4. gunakan conditional untuk mengubah 5 angka dibelakang menjadi bintang.
 //5. dan tambahkan string bintang sebanyak 5. 

function secretPhoneNumber (numbers) {
  // your code here
  var arr = ""

  for (var i = 0; i < numbers.length-5; i++){ arr += numbers[i]}
  for (var j = numbers.length-5; j < numbers.length; j++){arr+= "*"}
  if (numbers.length < 10) {
    arr = 'Invalid phone number'  
  }
  return arr
  }




console.log(secretPhoneNumber("081267465370"))
// 0812674*****
console.log(secretPhoneNumber("08537582711"))
// 085375*****
console.log(secretPhoneNumber("085758271523"))
// 0857582*****
console.log(secretPhoneNumber("0811739915"))
// 08117*****
console.log(secretPhoneNumber("08238797"))
// "Invalid phone number"