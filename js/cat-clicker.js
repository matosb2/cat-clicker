var catNames = [{
        img: "image/Stinker.jpg",
        id: "Stinker"
    },

    {
        img: "image/Chubaroo.jpg",
        id: "Chubaroo"
    },

    {
        img: "image/Pancakes.jpg",
        id: "Pancakes"
    },

    {
        img: "image/Fluffer.jpg",
        id: "Fluffer"
    },

    {
        img: "image/Chalupa.jpg",
        id: "Chalupa"
    }
];
var names, source;
for (var i = 0; i < catNames.length; i++) {
    names = catNames[i].id;
    source = catNames[i].img;

    var elem = document.createElement('li');
    elem.textContent = names;


    elem.addEventListener('click', (function(numCopy) {
        return function() {
        	$("#image").prepend("<img src=" + source + "></img>");
        };
    })(source));

    document.getElementById("list").appendChild(elem);

}
