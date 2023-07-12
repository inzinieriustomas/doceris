const manoForma = document.querySelector('form');

manoForma.addEventListener('submit', siustiDuomenis);

function siustiDuomenis(e) {
    e.preventDefault();
    console.log('atlieku duomenu siuntima...');
    const forma = e.target;
    const formInputs = forma.elements
    const fn = formInputs[1].value;
    const sn = formInputs[2].value;
    const el = formInputs.el.value;
    const message = formInputs.message.value;
    console.debug(fn,sn, el, message);
}

function atvaizduotiFormosDuomenis(e) {
    e.preventDefault();
    console.log('atvaizduoju forma...');
    const forma = e.target;
    const fn = forma.fn.value;
    const sn = forma.sn.value;
    const el = forma.el.value;
    const message = forma.message.value;
    const rezultatas = document.querySelector('#rezultatas');
    rezultatas.textContent = 'Vardas: ${fn},Pavarde:${sn} el:${el}, message: ${message}';

}