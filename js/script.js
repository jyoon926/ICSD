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
function set(n) {
    for (i = 0; i < 7; i++) {
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


//Noise Canvas
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {
    
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;
    
    ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    requestAnimationFrame(loop);
})();