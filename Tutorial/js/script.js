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

function addMenuToDiv(item, index){
    var img = document.createElement("img"); //create img element
    img.setAttribute("src",item.getImage()); //set image source

    //which id????
    var div = document.getElementById(""); //get the div we want to insert the img
    div.appendChild(img); //append img to div
    document.body.appendChild(div); //append div to body

    var text = document.getElementById(""); //get id for menu or create?
    text.innerHTML = text.innerHTML + " "+ item.get(); //add item text to

}

function displayItems(){
    var menu1 = new Menu("beer", 600, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menu2 = new Menu("wine", 400, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menu3 = new Menu("water", 0, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menu4 = new Menu("milk", 40, true, "http://i.imgur.com/zmKmgu0.jpg");
    var menu5 = new Menu("vodka", 80, false, "http://i.imgur.com/zmKmgu0.jpg");
    var menuArray = [menu1, menu2, menu3, menu4, menu5];

    menuArray.forEach(addMenuToDiv);
}

function indexPageLoaded(){
    displayItems();
}


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