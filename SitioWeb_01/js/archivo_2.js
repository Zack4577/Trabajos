parpadear();


var img = new Array("img/xplore.jpg",
                    "img/cancun.jpg",
                    "img/xcaret.jpg",);

var c = 0; 

function carrusel(){
    c++;
    if ( c>= img.length) {
        c = 0;
    }
    document.getElementById('imgheader').setAttribute('src',img[c]);
    setTimeout('carrusel()',1000);
}

document.body.setAttribute("onload","carrusel();")




     

function parpadear(){
        let r = Math.floor(Math.random() * 258);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 285);
    
        document.getElementById('h1baner').style.color = 'rgb('+r+','+g+','+b+')';
        document.getElementById('h1baner').style.transition = 'all 1s';
        setTimeout('parpadear()',1000);
}

document.body.setAttribute('onload','parpadear();')







