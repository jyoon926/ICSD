//Carousel Hover Arrow Cursor
var offset = 10;
var $win = $(window);

var hovering;
var left = true;
document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = parseInt(e.pageY, 10) - $win.scrollTop() - 50 + "px";
        document.getElementById('cursor').style.left = parseInt(e.pageX, 10) - 50 + "px";
        if (e.pageX < (window.innerWidth - document.getElementById('landerimg0').offsetWidth / 2)) {
            if (hovering)
                document.getElementById('cursor').style.transform = "scale(1) scaleX(-1)";
            else
                document.getElementById('cursor').style.transform = "scale(0) scaleX(-1)";
            left = true;
        }
        else {
            if (hovering)
                document.getElementById('cursor').style.transform = "scale(1) scaleX(1)";
            else
                document.getElementById('cursor').style.transform = "scale(0) scaleX(1)";
            left = false;
        }
    }
})
$(".image").mouseover(function(){
    hovering = true;
    $("html").css("cursor", "none");
});
$(".image").mouseout(function(){
    $("html").css("cursor", "auto");
    hovering = false;
    if (left) {
        document.getElementById('cursor').style.transform = "scale(0) scaleX(-1)";
    }
    else {
        document.getElementById('cursor').style.transform = "scale(0) scaleX(1)";
    }
});

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
    if (document.documentElement.scrollTop >= offset) {
        links.style.position = "fixed";
    } else {
        links.style.position = "static";
    }
}

//Image slider
var currentImage = 0;
function set(n) {
    currentImage = n;
    clearInterval(timer);
    timer = setInterval(nextImage, 6000);
    for (i = 0; i < 7; i++) {
        if (i == n) {
            document.getElementById("landerimg" + i).style.opacity = "1";
            document.getElementById("button" + i).style.background = "black";
        }
        else {
            document.getElementById("landerimg" + i).style.opacity = "0";
            document.getElementById("button" + i).style.background = "none";
        }
    }
}
$(".image").click(function(){
    clearInterval(timer);
    timer = setInterval(nextImage, 6000);
    if (left) {
        if (currentImage > 0) {
            set(currentImage - 1);
        }
        else {
            set(6);
        }
    }
    else {
        if (currentImage < 6) {
            set(currentImage + 1);
        }
        else {
            set(0);
        }
    }
});
function nextImage() {
    if (currentImage < 6) {
        set(currentImage + 1);
    }
    else {
        set(0);
    }
}
var timer = setInterval(nextImage, 6000);

//Back
function goBack() {
    window.history.back()
}


//Noise Canvas
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise() {
    
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;
    
    ctx.putImageData(idata, 0, 0);

    setTimeout(noise, 30);
}
noise();