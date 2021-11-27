function sumZero(arr) {
     let start = 0
    let end = arr.length
    
    while (start < end) {
        if (arr[start] < 0) {
            for ( let find_point = start + 1; find_point < end; find_point++) {
                if (arr[start] + arr[find_point] === 0) {
                    return true
                }
            }
        }
    }
    return false
}// doesnt work,,,hardest one
//runTime = ??
function uniqueCharecters(string) {
    var Item = {};


    for (var i = 0; i < string.length; i++) {
      var alp = string[i];
      if (Item[alp]) return false;
      Item[alp] = true;

    }

    return true;
}
//runTime = ???

function Pangram(string){
    let strArr = string.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}
/// runTime = ???
function findLongestWord(string) {
    let words = string.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }

    return maxLength;
}
/// runTime = ??