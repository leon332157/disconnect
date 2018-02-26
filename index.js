function FindBrowser() {
    if (navigator.userAgent.indexOf('iPhone') != -1) {
        alert('You are using iPhone!');
    }
    else if ((navigator.userAgent.indexOf('iPod') != -1)) {
        alert('You are using iPod!')
    }
    else if ((navigator.userAgent.indexOf('iPad') != -1)) {
        alert('You are using iPad!')
    }
    else if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        alert('You are using Opera!');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        alert('You are using Chrome!');
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        alert('You are using Safari!');
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        alert('You are using Firefox!');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        alert('You are using Internet Explorer!');
    }
    else if ((navigator.userAgent.indexOf('Android') != -1)) {
        alert('You are using Android!')
    }
    else {
        alert("I don't know.");
    }
}

function hid_pic() {
    var x = document.getElementById("img");
    if (document.getElementById("pic_button").value === 'Hide Picture!'){
        x.style.display = "none";
        document.getElementById("pic_button").value = 'Show Picture!';
    }
    else {
        x.style.display = "block";
        document.getElementById("pic_button").value = 'Hide Picture!'
    }
}
function hid_html() {
    var v = document.getElementById("img_html");
    if (document.getElementById("html_button").value === 'Hide HTML Picture!'){
        v.style.display = "none";
        document.getElementById("html_button").value = 'Show HTML Picture!';
    }
    else {
        v.style.display = "block";
        document.getElementById("html_button").value = 'Hide HTML Picture!'
    }
}