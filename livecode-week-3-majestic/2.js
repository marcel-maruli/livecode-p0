/**
 * =============
 * Word Triangle
 * =============
 * 
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 * 
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input = 'adiel'
// Write your code here
var penampung = ""
for (var i = 0; i < input.length; i++) {penampung += input[i]
    for (var j = 0; j >= input[i]; j++) {
    }
    console.log (penampung)
    }