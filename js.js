function getRandomInt() {
    return (Math.floor(Math.random() * 256));
}

function getLocation() {
    return (Math.floor(Math.random() * 4));
}

window.onload = function() {
    let nomargin = document.getElementsByClassName("no-margin");
    nomargin[0].style.background = `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                                    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                                    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`
};