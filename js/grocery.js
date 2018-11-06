function myfunc() {
    var item;
    var itemlist="";
    item = document.getElementById("one").value;
    var items=[];
    items.push(item);




    for (var i=0;i<items.length;i++){
        itemlist += "<li>" + items[i] + "</li>";
            document.getElementById("two").innerHTML += itemlist;
    }
}