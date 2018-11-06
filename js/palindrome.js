function isPalendrome() {
    var word=document.getElementById("one").value;
    var wordArray=word.split("");
    var revArray=wordArray.reverse();
    var revWord=revArray.join("");
    if (word===revWord){
        document.getElementById("result").innerHTML= "It is Palindrome";
    }
    else {
        document.write("Not palindrome");
    }


}