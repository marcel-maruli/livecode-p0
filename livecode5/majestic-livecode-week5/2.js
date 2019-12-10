/**
 * ===============
 * Vote Calculator
 * ===============
 * 
 * Function ini akan membantu menyaring member yang melakukan "upvote", "downvote" dan "abstain",
 * dan menghitung "votes" yang di dapatkan dari selisih "upvote" dan "downvote"
 * 
 * member dinyatakan "upvote" jika memberikan sinyal "up",
 * member dinyatakan "downvote" jika memberikan sinyal "down",
 * dan member dinyatakan "abstain" jika memberikan sinyal "abs"
 * 
 * contoh : 
 *  @input : [
 *    ["hardim", "up"],
 *    ["ruby", "up"],
 *    ["armedi", "down"],
 *    ["dimitri", "abs"]
 * ] 
 *  @output : {
 *    upvote: ["hardim", "ruby"],
 *    downvote: ["armedi"],
 *    abstain: ["dimiri"],
 *    votes: 1 -> di dapatkan dari selisih jumlah upvote dengan jumlah downvote
 * }
 * 
 * RULES : 
 *  - Dilarang menggunakan .reduce .filter .indexOf .lastIndexOf
 * 
 */

function voteCalculator (voter) {
  // your code here
  var obj = {};
  var arrHasilUp = [];
  var arrHasilDown = [];
  var arrHasilAbs = [];
  for (var i = 0; i < voter.length; i++){
    for (var j = 0; j < voter[i].length;j++){
    }
    if (voter[i][1]=='up'){
      arrHasilUp.push (voter[i][0])
    }
    else if (voter[i][1]=='down'){
      arrHasilDown.push (voter[i][0])
    }
    else if (voter[i][1]=='abs'){
      arrHasilAbs.push (voter[i][0])
    }  
    var vote = arrHasilUp.length - arrHasilDown.length

  }
  obj = {
    upvote : arrHasilUp,
    downvote : arrHasilDown,
    abstain : arrHasilAbs,
    votes : vote
  }
  return obj
}

var members = [
  ["Yusuf", "up"],
  ["Tony", "up"],
  ["Hardim", "down"],
  ["Nadia", "down"],
  ["Dimitri", "down"]
]

console.log(voteCalculator(members))

// {
//   upvote: ["Yusuf", "Tony"],
//   downvote: ["Hardim", "Nadia", "Dimitri"],
//   abstain: [],
//   votes: -1
// }

var members1 = [
  ["Wika", "up"],
  ["Icha", "up"],
  ["Stevani", "up"],
  ["Isro", "abs"],
  ["Armedi", "down"],
  ["Semmi", "abs"]
]

console.log(voteCalculator(members1))

// { 
//   upvote: [ 'Wika', 'Icha', 'Stevani' ],
//   downvote: [ 'Armedi' ],
//   abstain: [ 'Isro', 'Semmi' ],
//   votes: 2 
//}

var members2 = [
  ["Yusuf", "up"],
  ["Ruby", "up"]
]

console.log(voteCalculator(members2))
// { upvote: [ 'Yusuf', 'Ruby' ],
//   downvote: [],
//   abstain: [],
//   votes: 2 
// }