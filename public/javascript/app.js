
function LetterCount(str){

  var x=str.split(" ");
  var count=0;

  for(var i=0;i<x.length;i++){
    var word=x[i];
    for(var j=0;j<word.length;i++){
      var letter=word[j];
      for(var k=0;k<word.length;k++){
        if(j!==k);
        if(letter===word[k]){
          count=count+1;

          if(count>1){
            return word;
          }
        }
      }
    }
  }
  return -1;
}
console.log(LetterCount("Door and dog"));
