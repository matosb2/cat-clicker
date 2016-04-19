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


    elem.addEventListener('click', (function(source) {
        return function() {
            $("#nombre").empty().prepend("<h3>" + names + "</h3>"); 
            $(".count").html("0");
            $(".test").attr('src', source);
        };
    })(source));
    document.getElementById("list").appendChild(elem);
}


$(".test").click(function() {
    $(".count").html(function(i, val) {
        return val * 1 + 1;
    });
});
