document.addEventListener("DOMContentLoaded", function(){

const img_element = document.querySelectorAll('img.galerijos_foto');
let img_element_skaicius = img_element.length;
console.log(img_element_skaicius);


let uuid = ("siame puslapyje yra " + img_element_skaicius + " " +'  img_element' );
let new_uuid = document.getElementById("uuid");
new_uuid.innerHTML = uuid;

function mygtukas () {
alert(img_element_skaicius);
};

document.querySelector("button").addEventListener("click", mygtukas);
});

//for(let i = 0; i < img_element_skaicius; i+=2) {
//let paveikslelis = images[i];
//paveikslelis.setAttribute("alt", "testas");
//paveikslelis.alt = "testas";
//}
//
//element.style.fontSize = "24px";
//element.style.backgroundColor = "yellow";
//elementas.style.width = "200px";
//elementas.style.height = "200px";