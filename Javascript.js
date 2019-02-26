// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
// Ex. scramble('abcd', [0,3,1,2]) -> 'acdb'
function scramble(str, arr){
  var letterArray = []
  let answerArray = [];
  for(let i = 0; i < str.length; i++){
    letterArray.push(str[i]);
  }
  for(let i = 0; i < arr.length; i++){
    let indexValue = arr[i];
    answerArray[indexValue] =letterArray[i];
  }
  return answerArray.join('');
}
