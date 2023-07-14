document.addEventListener("DOMContentLoaded",function(){
    const galerijosDuomenys = [
{
title: "darbas 1",
url: "/img/1.JPG",
tag: ["js",'html','css','python']
},
{
title: "darbas 2",
url: "img/2.jpg",
tag: ["js",'html','css','python'],
},
{
title: "darbas 3",
url: "/img/3.jpg",
tag: ["js",'html','css','python'],
}
];
let busimosGalerijosDOMElementas = document.querySelector("#darbu_galerija");

for(let galerijosElementoDuomenys of galerijosDuomenys) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");

    img.src = galerijosElementoDuomenys.url;
    img.alt = galerijosElementoDuomenys.title;
    span.innerText = galerijosElementoDuomenys.title;

    div.append(img)
    div.append(span);

    busimosGalerijosDOMElementas.append(div);
    }
});
