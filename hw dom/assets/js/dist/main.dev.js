"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var UL = document.createElement("ul");
document.body.prepend(UL);
UL.style.width = "600px";

for (var i = 0; i < playList.length; i++) {
  var LI = document.createElement("li");
  document.body.append(LI);
  LI.prepend("author: " + playList[i].author + "; " + "song: " + playList[i].song);
  UL.prepend(LI);
  LI.setAttribute('style', 'font-family:Arial, Helvetica, sans-serif; font-size: 16px;');
}

var list = document.getElementById("list");
list.append(UL);
/*2 задача*/

var btn_op = document.createElement("button");
document.body.prepend(btn_op);
btn_op.innerHTML = "Open modal window !";
btn_op.setAttribute('style', 'margin:10px 20px; padding: 10px 50px; background-color: rgb(30, 118, 138); color:#fff');
var modal_wrap = document.createElement("div");
document.body.prepend(modal_wrap);
modal_wrap.setAttribute('style', ' position: fixed;left: 0;top: 0; width: 100%;height: 100%;background-color: rgba(0, 0, 0, .7);z-index: 10000; display: none; justify-content: center; align-items: center;'); //потом менять дисплей

var modal = document.getElementById("modal");
modal.append(btn_op);
modal.append(modal_wrap);
var modal_window = document.createElement("div");
document.body.prepend(modal_window);
modal_window.setAttribute('style', 'background-color: #fff;border-radius: 10px;box-shadow: 3px 5px 10px #fff;  max-width: 500px;');
modal_wrap.prepend(modal_window);
var modal_header = document.createElement("div");
document.body.prepend(modal_header);
modal_header.setAttribute('style', 'text-align: center;font-weight: 700;text-transform: uppercase; padding: 15px 0;background-color: #dbdbdb; border-radius: 10px 10px 0 0;');
modal_window.prepend(modal_header);
var modal_main = document.createElement("div");
document.body.prepend(modal_main);
modal_main.setAttribute('style', 'padding: 15px;');
modal_header.after(modal_main);
var p = document.createElement("p");
document.body.prepend(p);
p.innerText = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem velit, ips";
p.setAttribute('style', 'font-family:Arial, Helvetica, sans-serif; font-size: 16px;');
modal_main.prepend(p);
var modal_footer = document.createElement("div");
document.body.prepend(modal_footer);
modal_footer.setAttribute('style', 'border-top: 1px solid #dbdbdb;text-align: center; padding: 15px 0;');
modal_main.after(modal_footer);
var btn_cl = document.createElement("button");
document.body.prepend(btn_cl);
btn_cl.innerText = "Ok!";
btn_cl.setAttribute('style', 'margin:10px 20px; padding: 10px 50px;cursor: pointer; background-color: rgb(30, 118, 138); color:#fff');
modal_footer.prepend(btn_cl);

btn_op.onclick = function () {
  modal_wrap.style.display = "flex";
};

btn_cl.onclick = function () {
  modal_wrap.style.display = "none";
};
/*3 задача*/


var wrap = document.createElement("div");
document.body.prepend(wrap);
wrap.setAttribute('style', 'width:110px; height:340px;background-color: #000;');
var wrap_cont = document.getElementById("wrap_cont");
wrap_cont.append(wrap);
var red = document.createElement("div");
document.body.prepend(red);
red.setAttribute('style', 'width:100px; height:100px; border-radius:50%; background: #ff0000;margin-top: 20px;margin-left: 5px;');
wrap.append(red);
var yellow = document.createElement("div");
document.body.prepend(yellow);
yellow.setAttribute('style', 'width:100px; height:100px; border-radius:50%; background: #6b6129;margin-left: 5px;');
wrap.append(yellow);
var green = document.createElement("div");
document.body.prepend(green);
green.setAttribute('style', 'width:100px; height:100px; border-radius:50%; background: #6b6129;margin-left: 5px;');
wrap.append(green);
var btn = document.createElement("button");
document.body.prepend(btn);
btn.innerHTML = "Open !";
btn.setAttribute('style', 'margin:10px 20px; padding: 10px 50px; background-color: rgb(30, 118, 138); color:#fff');
wrap.after(btn);
btn.setAttribute("onclick", "traffic_light()");
var time = 1;

function traffic_light() {
  time++;

  if (time == 4) {
    time = 1;
  }

  updateLights();
}

var Colours = ["#FF0000", "#35ae01", "#f2ff00", "#6b6129"];

function updateLights() {
  if (time == 1) {
    red.style.background = Colours[0];
    yellow.style.background = Colours[3];
    green.style.background = Colours[3];
  } else if (time == 2) {
    red.style.background = Colours[3];
    yellow.style.background = Colours[3];
    green.style.background = Colours[1];
  } else if (time == 3) {
    red.style.background = Colours[3];
    yellow.style.background = Colours[2];
    green.style.background = Colours[3];
  }
}