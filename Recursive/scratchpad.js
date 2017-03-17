function fibHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");
    n = parseInt(n);
    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else {
        var left = fibHelper(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " fib-left");

        var right = fibHelper(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " fib-right");

        value = left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}
var fib = function (n, node) {
    var div = node.querySelector("div.fib");
    if(div)
        node.removeChild(div);
    var tree = fibHelper(n)
    node.appendChild(tree.html);

}

var fibButton = function(me)
{
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var number = slider.value;
    console.log(number);
    fib(number, form.parentNode);

}

var fibSlider = function(me)
{
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'fib(' + me.value + ')';
}

function tribHelper(n){
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "trib");
    n = parseInt(n);
    if (n < 3) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 0;
        }
        else if(n == 2){
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else {
        var left = tribHelper(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " trib-left");

        var middle = tribHelper(n - 2);
        clas = middle.html.getAttribute("class");
        middle.html.setAttribute("class", clas + "trib-middle");

        var right = tribHelper(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " trib-right");

        value = left.value + right.value + middle.value;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var trib = function (n, node) {
    var tree = tribHelper(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "trib");
}

var tribButton = function(me)
{
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var number = slider.value;
    console.log(number);
    trib(number, form.parentNode);

}

var tribSlider = function(me)
{
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'trib(' + me.value + ')';
}

function pellHelper(n){
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "pell");
    n = parseInt(n);
    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else {
        var left = pellHelper(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " pell-left");

        var right = pellHelper(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " pell-right");

        value = 2*left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };

}

var pell = function (n, node) {
    var tree = pellHelper(n)
    node.appendChild(tree.html);
    node.setAttribute("id", "pell");
}

var pellButton = function(me)
{
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var number = slider.value;
    pell(number, form.parentNode);

}

var pellSlider = function(me)
{
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'pell(' + me.value + ')';
}

var style = document.createElement('style');
style.textContent =
    ".fib {" +
    "	display: inline-block;" +
    "	background-color: rgba(0,0,255,0.1);" +
    "}" +
    "" +
    ".fib-left {" +
    "	float: left;" +
    "	display: inline-block;" +
    "	margin-right: 4px;" +
    "}" +
    "" +
    ".fib-right {" +
    "	float: right;" +
    "	display: inline-block;" +
    "	margin-left: 4px;" +
    "}" +
    "" +
    ".shadowed {" +
    "	text-shadow: 1px 1px 2px black;" +
    "	color:       white;" +
    "}" +
    ".stuff-box {" +
    "	font-family: 'helvetica neue', helvetica, sans-serif;" +
    "	letter-spacing: 1px;" +
    "	text-transform: capitalize;" +
    "	text-align: center;" +
    "	padding: 3px 10px;" +
    "	margin: 10px;" +
    "	cursor: pointer;" +
    "	border-radius: 10px;" +
    "	border-width: 2px;" +
    "	border-style: solid;" +
    "}" +
    "" +
    ".red {" +
    "	border-color: rgb(255,0,0);" +
    "	background:   rgb(180,60,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
    "}" +
    "" +
    ".yellow {" +
    "	border-color: rgb(255,255,0);" +
    "	background:   rgb(180,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
    "}" +
    "" +
    ".blue {" +
    "	border-color: rgb(0,0,255);" +
    "	background:   rgb(60,60,180);" +
    "	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
    "}" +
    "" +
    ".green {" +
    "	border-color: rgb(0,255,0);" +
    "	background:   rgb(60,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
    "}" +
    "#pell {" +
    "	display: inline-block;" +
    "	width: 4000px;" +
    "}" +
    "" +
    ".pell {" +
    "	background-color: rgba(0,0,255,0.1);" +
    "}" +
    "" +
    ".pell-left {" +
    "	float: left;" +
    "	display: inline-block;" +
    "	margin-right: 4px;" +
    "}" +
    "" +
    ".pell-right {" +
    "	float: right;" +
    "	display: inline-block;" +
    "	margin-left: 4px;" +
    "}" +
    "" +
    ".shadowed {" +
    "	text-shadow: 1px 1px 2px black;" +
    "	color:       white;" +
    "}" +
    ".stuff-box {" +
    "	font-family: 'helvetica neue', helvetica, sans-serif;" +
    "	letter-spacing: 1px;" +
    "	text-transform: capitalize;" +
    "	text-align: center;" +
    "	padding: 3px 10px;" +
    "	margin: 10px;" +
    "	cursor: pointer;" +
    "	border-radius: 10px;" +
    "	border-width: 2px;" +
    "	border-style: solid;" +
    "}" +
    "" +
    ".red {" +
    "	border-color: rgb(255,0,0);" +
    "	background:   rgb(180,60,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
    "}" +
    "" +
    ".yellow {" +
    "	border-color: rgb(255,255,0);" +
    "	background:   rgb(180,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
    "}" +
    "" +
    ".blue {" +
    "	border-color: rgb(0,0,255);" +
    "	background:   rgb(60,60,180);" +
    "	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
    "}" +
    "" +
    ".green {" +
    "	border-color: rgb(0,255,0);" +
    "	background:   rgb(60,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
    "}" +
    "#trib {" +
    "	display: inline-block;" +
    "	width: 4000px;" +
    "}" +
    "" +
    ".trib {" +
    "	background-color: rgba(0,0,255,0.1);" +
    "}" +
    "" +
    ".trib-left {" +
    "	float: left;" +
    "	display: inline-block;" +
    "	margin-right: 4px;" +
    "}" +
    "" +
    ".trib-right {" +
    "	float: right;" +
    "	display: inline-block;" +
    "	margin-left: 4px;" +
    "}" +
    "" +
    ".trib-middle {" +
    "	float: center;" +
    "	display: inline-block;" +
    "}" +
    "" +
    ".shadowed {" +
    "	text-shadow: 1px 1px 2px black;" +
    "	color:       white;" +
    "}" +
    ".stuff-box {" +
    "	font-family: 'helvetica neue', helvetica, sans-serif;" +
    "	letter-spacing: 1px;" +
    "	text-transform: capitalize;" +
    "	text-align: center;" +
    "	padding: 3px 10px;" +
    "	margin: 10px;" +
    "	cursor: pointer;" +
    "	border-radius: 10px;" +
    "	border-width: 2px;" +
    "	border-style: solid;" +
    "}" +
    "" +
    ".red {" +
    "	border-color: rgb(255,0,0);" +
    "	background:   rgb(180,60,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
    "}" +
    "" +
    ".yellow {" +
    "	border-color: rgb(255,255,0);" +
    "	background:   rgb(180,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
    "}" +
    "" +
    ".blue {" +
    "	border-color: rgb(0,0,255);" +
    "	background:   rgb(60,60,180);" +
    "	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
    "}" +
    "" +
    ".green {" +
    "	border-color: rgb(0,255,0);" +
    "	background:   rgb(60,180,60);" +
    "	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
    "}";

document.querySelector('body').appendChild(style);


var divMakerMaker = function(color, id) {
    return function() {
        var div = document.createElement('div');
        div.setAttribute('class', color + ' shadowed stuff-box');
        div.setAttribute('id', id);
        document.body.appendChild(div);
    }
}

var blueDiv = divMakerMaker('blue', 'trib');
var yellowDiv = divMakerMaker('yellow', 'fib');
var greenDiv = divMakerMaker('green', 'pell');

blueDiv();
yellowDiv();
greenDiv();
