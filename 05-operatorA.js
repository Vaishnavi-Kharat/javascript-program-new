console.log("========== Question 1 - Sentence length square ==========");

function squareOfWordLength(sentence){

    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
}

var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

console.log("========== Question 2- no argument and no return value ==========");
// console.log("========== Question 2.1 ==========");

function line() {
    var line="I am a Angular Developer";
    var len=line.length;
    console.log(`Length of Sentence  is - ${len}`);
    var result= line.split(" ");
    var word= result.length;
    console.log(`Total words in sentence are - ${word}`);
    var ans =len/word;
    console.log("2.1) String length divided by total words are -",ans);

// console.log("========== Question 2.2  ==========");
    var res = len * word;
    console.log("2.2) String length multiply by total words are -",res);

}
line();


