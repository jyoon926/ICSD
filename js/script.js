//Loader
window.onload = function load() {
}

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    document.getElementById('loader').style.top = "-100vh";
    document.getElementsByTagName('html')[0].style.overflowY = "scroll";
});

//Sidebar Links
window.onscroll = function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        scrollFunction()

    }
};
var links = document.getElementById("links");
var offset = links.offsetTop - 40;
function scrollFunction() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > offset) {
        links.style.position = "fixed";
    } else {
        links.style.position = "static";
    }
}

//Image slider
function set(n) {
    for (i = 0; i < 5; i++) {
        if (i == n) {
            document.getElementById("landerimg" + i).style.opacity = "1";
            document.getElementById("button" + i).classList.add("selected");
        }
        else {
            document.getElementById("landerimg" + i).style.opacity = "0";
            document.getElementById("button" + i).classList.remove("selected");
        }
    }
}

//Back
function goBack() {
    window.history.back()
}