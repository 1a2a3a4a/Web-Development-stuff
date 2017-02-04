/**
 * Created by tonyw on 2017-01-28.
 */


function docLoaded(fn) {
    if (document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}



function Menu(name, kcal, lactose, image) {
    this.kCal=kcal;
    this.image = image;
    this.lactose = lactose;
    this.name = name;
    this.get = function(){
        return [name, " kcal: " + kcal];
    };
    this.getImage = function(){
        return this.image;
    }
    this.getLactose = function(){
        return this.lactose;
    }

}
/*
function addMenuToDiv(item, index){
    var currentIndex = index; //index to string

    var img = document.createElement("img"); //create img element
    img.setAttribute("src",item.getImage()); //set image source

    var idrow = (index < 3) ? "alcorow" : "nonalcorow"; //alco row or non alco row

    var id = document.getElementById(idrow); //get the div we want to insert the img
    var mytd = "<td 'id=b" + currentIndex + "'>" + img + "</td>";
    id.innerHTML += mytd;
    console.log(id);
    console.log(idrow);
    console.log(id.innerHTML);

    //id.appendChild(mytd); //append img to div
    document.body.appendChild(id); //append div to body

    var text = document.getElementById(""); //get id for menu or create?
    text.innerHTML = text.innerHTML + " " + item.get(); //add item text to

}*/



function addMenuToDiv(item, index){
    var currentIndex = index; //index to string

    var img = document.createElement("img"); //create img element
    img.setAttribute("src",item.getImage()); //set image source

    var idrow = (index < 3) ? "#alcorow" : "#nonalcorow"; //alco row or non alco row

    //var id = document.getElementById(idrow); //get the <tr> we want to insert the img
    var newtd =  document.createElement("td");
    newtd.setAttribute("id", index);
    newtd.appendChild(img); //= "HELLO HELLO HLEOLHEOLHOELOHLEOHLEOLHEOLHOE";//'<img "src=' + item.getImage() + '">';
    $(idrow).append(newtd);




}



function displayItems(){
    var menu1 = new Menu("beer", 600, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menu2 = new Menu("wine", 400, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menu3 = new Menu("water", 0, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menu4 = new Menu("milk", 40, true, "http://i.imgur.com/zmKmgu0.jpg");
    var menu5 = new Menu("vodka", 80, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menuArray = [menu1, menu2, menu5, menu4, menu3];

    menuArray.forEach(addMenuToDiv);
}

function indexPageLoaded(){
    displayItems();
}

function buttonTrigger(){
    console.log("buttontrigger");
    $('#myButton').click(function() {
        console.log("clicker");
        trigger();
    });

}
function trigger(){
    /*
    var choco = document.getElementById("choco");
    var sugar = document.getElementById("sugar");

    var radio = (choco.checked) ? "choco" : "sugar";
    var dropdown = document.getElementById("watertype");
    console.log(radio);
    console.log(dropdown);

    var d = dropdown.options[dropdown.selectedIndex].text;
    console.log(d);*/
    console.log("trigger")
   var radio =  $('input[name=add]:checked', '#radioform').val();
   var d = $('#watertype option:selected').val();

    alert(radio + d);
}


$(function () {
    indexPageLoaded();
    buttonTrigger();
});

/*
 <body>

 <div id="divId">
 <h1>select a drink</h1>
 <h1 id="menu">
 </h1>
 <img id="imageId">
 </div>

 </body>
 */