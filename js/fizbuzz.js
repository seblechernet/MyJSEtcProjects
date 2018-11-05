
function myfunc() {
    var x;
    x=document.getElementById("one").value;
    var i;
    console.log(x);
 for(i=1;i<x;i++) {

     if (i % 3 == 0 && i % 5 == 0) {
         document.write("fizzbuzz" +"<br/>");
     }
     else if (i % 3 == 0) {
         document.write("fizz" +"<br/>");
     }
     else if (i % 5 == 0) {
         document.write("buzz"+"<br/>");
     }
     else{
         document.write(i+ "<br/>");
         }
 }

}