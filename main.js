let wrap = document.querySelector('#wraper');
let img = wrap.querySelectorAll('img');
let btnGo = wrap.querySelector('#go');
let btnStop = wrap.querySelector('#stop');

function go() {
    window.id = window.setInterval(function() {
        var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    var tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = img6.src;
    img6.src = tmp;
    }, 500);
    btnGo.disabled = true;
    btnStop.disabled = false;
}

function stop() {
    window.clearInterval(window.id);
    btnGo.disabled = false;
    btnStop.disabled = true;
}