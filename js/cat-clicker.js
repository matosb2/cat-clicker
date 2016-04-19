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


var currentCat;
for (var i = 0; i < catNames.length; i++) {
    currentCat = catNames[i];

    var elem = document.createElement('li');
    elem.textContent = currentCat.id;


    elem.addEventListener('click', (function(currentCat) {
        return function() {
            $("#nombre").empty().prepend("<h3>" + currentCat.id + "</h3>"); 
            $(".count").html("0");
            $(".test").attr('src', currentCat.img);
        };
    })(currentCat));
    document.getElementById("list").appendChild(elem);
}


$(".test").click(function() {
    $(".count").html(function(i, val) {
        return val * 1 + 1;
    });
});
