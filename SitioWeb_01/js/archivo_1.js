parpadear();
reloj();



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

document.body.setAttribute('onload','carrusel();')

//..





function reloj(){
    let fecha = new Date()
    let h = fecha.getHours ()
    let m = fecha.getMinutes ()
    let s = fecha.getSeconds ()
    
    
    if (m<10 && s >9) {
    document.getElementById("preloj").innerHTML="Hora:"+h+":0"+m+":"+s
    }else if (s<10 && m >9) {
    document.getElementById("preloj").innerHTML="Hora:"+h+"."+m+":0"+s
    }
    else if (m<10 && s <10){
    document.getElementById("preloj").innerHTML="Hora:"+h+":0"+m+":0"+s
    }
    else{
    document.getElementById("preloj").innerHTML="Hora:"+h+": "+m+": "+s
    }
        setTimeout("reloj()",1000)
    }
    
    document.body.setAttribute("reloj();")





    

     

function parpadear(){
        let r = Math.floor(Math.random() * 258);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 285);
    
        document.getElementById('h1baner').style.color = 'rgb('+r+','+g+','+b+')';
        document.getElementById('h1baner').style.transition = 'all 1s';
        setTimeout('parpadear()',1000);
}

document.body.setAttribute('onload','parpadear();')














