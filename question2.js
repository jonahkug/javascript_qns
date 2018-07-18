//My function to find whether a word is an isogram or not
function checkWord(str) {

 var seq = str.split(''); //split the word into an array
 for (var l = 0, m = 1; l < word.length - 1; l++, m++) {
   if (seq[l] == seq[m]){//check if the character right after the current is the same
                              //as the current character
     console.log('Not');
     return false;      //if it is - it's not an isogram
   }
 }
 console.log('checkWord');
 return true;   //loop has passed - it's an isogram
}

// A few examples
checkWord("Kisoro");
checkWord("Samson");