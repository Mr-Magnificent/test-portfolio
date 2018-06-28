function getRandomInt() {
    return (Math.floor(Math.random() * 256));
}


function e() {

    function getLocation() {
        return (Math.floor(Math.random() * 10));
    }

    function step() {}

    function colorChange() {
        let nomargin = document.getElementsByClassName("no-margin");
        let col1 = getLocation();
        let col2 = (col1 + 3);
        if (col2 > 10) {
            col2 = 5;
        }
        nomargin[0].style.background = `linear-gradient(25deg, ${'#0096' + col1 + '8'}, ${'#0096' + col2 + '8'})`;
    }
    return colorChange;
}

let x = e();
let nomargin = document.getElementsByClassName("no-margin");

setInterval(x, 2000);

function colorChange () {
    let lang = document.getElementsByClassName('lang');
    for(let i = 0; i < lang.length; i++) {
        let tempColor = getRandomInt();
        lang[i].style.color = `hsl(${tempColor}, 100%, 42%);`;
        // console.log(lang[i]);
    }
}

colorChange();