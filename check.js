function checkx(){

let pp = document.frm.crs.value;

switch(pp){

case "VFX":

document.frm.prz.value = 310;

document.frm.qty.value = 1;

document.frm.ttl.value = document.frm.prz.value * document.frm.qty.value;
break;

case "Coding":

document.frm.prz.value = 576;

document.frm.qty.value = 1;

document.frm.ttl.value = document.frm.prz.value * document.frm.qty.value;
break;

case "Photoshop":

document.frm.prz.value = 280;

document.frm.qty.value = 1;

document.frm.ttl.value = document.frm.prz.value * document.frm.qty.value;
break;

case "Forex":

document.frm.prz.value = 512;

document.frm.qty.value = 1;

document.frm.ttl.value = document.frm.prz.value * document.frm.qty.value;
break;

case "NFT":

document.frm.prz.value = 388;

document.frm.qty.value = 1;

document.frm.ttl.value = document.frm.prz.value * document.frm.qty.value;
break;
default:
alert("please select product");
document.frm.prz.value =0;

document.frm.qty.value = 0;

document.frm.ttl.value = 0;
}

}

/* research */

function checky(){

let pq = document.frm.qty.value;

if(pq.value =1 + "1"){

document.frm.ttl.value = document.frm.prz.value * document.frm.qty.value;

}

}