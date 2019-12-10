/**
 * ================
 * Pair Programming
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 * 
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 * 
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 * 
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

function pair(str) {
    // Write your code here
   var penampung = "";
   var penampungKoma = ''
   var arr = [];
   for (var i = 0; i < str.length; i++){
       if (str[i]==','){
           penampungKoma ++;
           if (penampungKoma %2!==0){
               penampung += " dan "
           } else (penampung += "`, `")
       }
       else (penampung += str[i])
       
    }
     if (penampungKoma %2==0 && str[str.length-1] == penampung[penampung.length-1]){
        penampung += " sendirian"
    }
    arr.push (penampung)
   return arr
  }
  
  
  console.log(pair('yusuf,tony,adiel'))
  // [ 'yusuf dan tony', 'adiel sendirian' ]
  
  console.log(pair('fajrin,sahata,onesinus,jetly'))
  // [ 'fajrin dan sahata', 'onesinus dan jetly' ]
  
  console.log(pair('refqi,fahmi,sinung,arif,gusti'))
  // [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]
  
  // console.log(pair(''))
  // No pair