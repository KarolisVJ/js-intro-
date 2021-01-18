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

// const arLygu = a === b ? true : false;

// SWITCH

let day = 1;

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

for (let i = 0; i < 5; i++) {
    console.log('kartotinas kodas');
}

// const precision = 100000;
// const value = Math.round(i*precision)/precision

const words = ['abc', 'Borisas', 'citrina', 'duona', 'ezys']

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log ('Pirma zodzio raide:', word[0]);
    console.log('Zodzio ilgis', word.length);
}

let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum +=i;
    console.log(i, sum);
}

//Perrasyti teksta is galo i prieki

const text = 'abcdef';
let reverseText = '';
const size = text.length;

// for (let i = 0; i < text.length; i++) {
//     const letter = text[i];
//     reverseText = letter + reverseText;
//     console.log(i, letter, reverseText);
// }

for (let i = 1; i <= size; i++) {
    const letter = text[size - i];
    reverseText += letter;
    console.log(i, letter, reverseText);
}