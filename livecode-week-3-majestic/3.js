/**
 * ============
 * Toserba 7000
 * ============
 * 
 * Description
 * -----------
 * Toserba 7000 menjual segala barang dengan harga Rp.7000.
 * Tetapi, ada 3 barang yang di jual dengan harga berbeda,
 * yaitu :
 *  1. pensil -> Rp.10000
 *  2. penghapus -> Rp.15000
 *  3. materai -> Rp.7500
 * 
 * Selain 3 barang di atas maka harga barang tersebut adalah Rp.7000
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang menerima 2 parameter yaitu, barang dan uang.
 * jika uang cukup function akan menampilkan "Berhasil membeli <nama barang>, kembaliannya Rp.<kembalian>"
 * jika uang tidak cukup makan akan menampilkan "uang tidak cukup membeli <nama barang>""
 * 
 * Example
 * -------
 * contoh :
 * 1. barang = "pensil", uang = 20000
 *    output: Berhasil membeli pensil, kembaliannya Rp.10000
 * 2. barang = "gelas", uang 10000
 *    output: Berhasil membeli gelas, kembaliannya Rp.3000
 * 3. barang = "penghapus", uang = 9000
 *    output: Uang tidak cukup membeli penghapus
 * 4. barang = "baterai", uang = 3000
 *    output: Uang tidak cukup membeli baterai
 * 
 * Restrictions
 * ------------
 * 1. Asumsi barang hanya dibeli 1 buah
 */


function toserba (barang, uang) {
  // Write your code here
  var harga1  = 10000
  var harga2  = 7500
  var harga3  = 15000
  var harga4dan5  = 7000
  var hasil   = ""
  if (uang >= harga1 && barang == "pensil") {hasil = `Berhasil membeli ${barang} kembalian anda Rp. ${uang - harga1}`}
  else if (uang < harga1) {hasil = `Uang tidak cukup membeli ${barang}`}
  else if (uang < harga2) {hasil = `Uang tidak cukup membeli ${barang}`}
  else if (uang < harga3) {hasil = `Uang tidak cukup membeli ${barang}`}
  else if (uang > harga4dan5 && barang != "pensil" && barang !="materai" && barang!="penghapus") {hasil = `Berhasil membeli ${barang} kembalian anda Rp. ${uang - harga4dan5}`}
  return hasil
}


console.log(toserba("pensil", 10000))
// Berhasil membeli pensil, kembaliannya Rp.0
console.log(toserba("materai", 7000))
// // Uang tidak cukup membeli materai
console.log(toserba("penghapus", 16000))
// // Berhasil membeli penghapus, kembaliannya Rp.1000
console.log(toserba("bola", 20000))
// // Berhasil membeli bola, kembaliannya Rp.13000
console.log(toserba("jarum", 4000))
// // Uang tidak cukup membeli jarum