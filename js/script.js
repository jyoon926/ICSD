window.onscroll = function() {
    scrollFunction()
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