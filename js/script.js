window.addEventListener('mousemove', cursor);
var $win = $(window);
var _cursor = document.getElementById('cursor');

function everyTick() {
    cursor();
    setTimeout(arguments.callee, 0);
}

function getX(event) //left position
{
    if(!event.pageX)
    {
        return event.clientX;
    }
    else
    {
        return event.pageX - (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
}

function getY(event) //top position
{
    if(event.pageY)
    {
        return event.pageY - (document.body.scrollTop || document.documentElement.scrollTop);
    }
    else
    {
        return event.clientY;
    }
}

function cursor() {
    _cursor.style.top = getY(event) - 28 + "px";
	_cursor.style.left = getX(event) - 28 + "px";
}
function hover() {
    _cursor.style.transform = "scale(0.5)";
    _cursor.style.borderWidth = "4px";
}
function hoverOut() {
    _cursor.style.transform = "scale(1)";
    _cursor.style.borderWidth = "2px";
}

window.onload = function load() {
}