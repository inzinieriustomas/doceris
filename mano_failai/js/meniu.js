document.addEventListener("DOMContentLoaded",function(){
    const meniuSarasas = [
    <a href="index.html"> INDEX</a>
    <a href="apie.html"> APIE</a>
    <a style="background-color: green" turinys.html> TURINYS</a>
    <a href="asmenys.html">ASMENYS</a>
    {
    pavadinimas: "Contacts",
    nuoroda: "contacts.html",
    klases: "meniu_item",
    }
    ];
let busimoMeniuDOMElementai = document.querySelectorAll(".meniu");
let meniuHTMLas = "";

for(let meniuElementoDuomenys of meniuSarasas) {
    let naujasMeniuElementas = "<a href=" ' + meniuElementoDuomenys.nuoroda +
'"class="' + meniuElementoDuomenys.klases +'">' +
 meniuElementoDuomenys.pavadinimas + '</a>';
 meniuHTMLas += naujasMeniuElementas;

}
for (let naujasMeniuElementas of busimoMenuElementas) {
meniuDOMElementas.innerHTML = meniuHTMLas};

});
