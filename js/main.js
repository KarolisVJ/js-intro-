"use strict";

const metai = 2021;
const vardas = 'Petras';

console.log(metai);
console.log(vardas);


const imgSrc='./img/doggo.jpg'

const html = '<main>\
    <img src="'+imgSrc+'">\
    <div>\
        <h1>404</h1>\
        <p>Lorem ipsum</p>\
    </div>\
    </main>'
console.log(html);


const w = ['Karosas', 'lydeka', 'karpis']

console.log(`${w[0]} plaukia nesroviui`);

// if () {}
// if () {} else {}
// if () {} else if () {}

const arLygu = a === b ? true : false;

// SWITCH

switch (day) {
    case 1:
        console.log('smth');
        break;
    case 2:
        console.log('2nd smth');
        break;

    default:
        console.log('Tokios dienos nėra');
        break;
}