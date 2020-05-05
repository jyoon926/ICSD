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