/**
 * ============
 * Diagon Alley
 * ============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 * 
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */

function diagonAlley(str) {
  // Write your code here
var penampung = ''
var spasi = " "
for (var i = 0; i < str.length; i++){
  penampung += str[i]
  penampung += '\n'
  for (var j = 0; j <= i; j++){ penampung += spasi}
}
return penampung
}


console.log(diagonAlley('yusuf'))
// /*
// y
//  u
//   s
//    u
//     f
// */
console.log(diagonAlley('adiel'))
// /*
// a
//  d
//   i
//    e
//     l
// */
console.log(diagonAlley('tony'))
// /*
// t
//  o
//   n
//    y
// */




// function diagonAlley(str) {
//   var spasi = ' '
//   var penampung = ""
//   for (var i = 0; i < str.length; i++){penampung += str[i]
//    penampung += '\n'
//   for (var j = 0; j <= i; j++){penampung +=  spasi}
// }
// //   for (var k = str.length; k > i; k--){penampung += spasi}
// // }
//   return (penampung)
// // return (penampung)
// }



// console.log(diagonAlley('yusuf'))
// // /*
// //    y
// //   u
// //  s
// // u
// //f
// // */
// console.log(diagonAlley('adiel'))
// // /*
// //    a
// //   d
// //  i
// // e
// //l
// // */
// console.log(diagonAlley('tony'))
// // /*
// //   t
// //  o
// // n
// //y
// // */