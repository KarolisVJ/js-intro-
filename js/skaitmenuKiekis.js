function isrinktiRaides(string,n) {

if (typeof string !== 'string') {
    console.log('Pirmasis kintamasis yra netinkamo tipo')
}
    else if (string.length == 0 || string.length > 100) {

        console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio')
    }
    else if (typeof n !== 'number') {
        console.log('Padaryk antrąjį variable skaičių')
    }
    else if (n <= 0) {
        console.log('Antrasis variable turi būt didesnis už nulį')
    }
    else if (n > string.length) {
        console.log('Antras kintamasis negali būti didesnis už pirmojo ilgį')
    }
    else {
        let picked;
        for (i = 0; i < string.length; i+n) {

        picked += string[i + n];
        
        }
    console.log(picked)
    }
}


isrinktiRaides('abcdefgh', 2);


// 5.	Funkcija pavadinimu “isrinktiRaides”:
// a.	priima du kintamuosius:
// i.	pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// ii.	antrasis nurodo kas kelintą raidę išrinkti
// b.	patikrinti, ar pirmasis kintamasis yra teksto tipo:
// i.	jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// ii.	priešingu atveju tęsiame darbą
// c.	patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// i.	jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// ii.	priešingu atveju tęsiame darbą
// d.	patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// ii.	priešingu atveju tęsiame darbą
// e.	patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// ii.	priešingu atveju tęsiame darbą
// f.	patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// i.	jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// ii.	priešingu atveju tęsiame darbą
// g.	išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// h.	išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// i.	gražina rezultatą
// j.	TESTAI:
// i.	console.log( isrinktiRaides( “abcdefg”, 2 ) );
// 1.	rezultatas: “bdf”
// ii.	console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// 1.	rezultatas: “cfil”
// iii.	console.log( isrinktiRaides( “abc”, 0 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// iv.	console.log( isrinktiRaides( “abc”, 4 ) );
// 1.	rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// v.	console.log( isrinktiRaides( 1561, 2 ) );
// 1.	rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”



// function didziausiasSkaiciusSarase (arr) {

// if (!Array.isArray(arr)) {
//     console.log('Durniau, ne arėjus!');
// }

// if (arr.length == 0) {
//     console.log('Arėjus tuštutukas')
    
// } else {
//     var largest = Math.max(...arr);
//     // for (i = 0; i <= arr.length; i++) {
//         if (arr[i] >= arr[i + 1]) {
//             largest = arr[i];
//         } else {
//             largest = arr[i + 1];
//         }
//     }
//     console.log('Didziausias skaicius yra', largest)
//     }


// }



// didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]);


// 4.	Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// d.	priešingu atveju, funkcija tęsia darbą
// e.	pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// f.	gražina didžiausią surastą skaičių
// g.	TESTAI:
// i.	console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
// 1.	rezultatas: 1
// ii.	console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
// 1.	rezultatas: 3
// iii.	console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
// 1.	rezultatas: 78
// iv.	console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
// 1.	rezultatas: 69
// v.	console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// 1.	rezultatas: -1
// vi.	console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vii.	console.log( didziausiasSkaiciusSarase( [] ) );
// 1.	rezultatas: “Pateiktas sąrašas negali būti tuščias.”


// function skaitmenuKiekisSkaiciuje (val) {
//     if (typeof val !== 'number') {
//         console.log('Pateikta netinkamo tipo reikšmė');
//     } else {
    
//     let kopija = val;

//     for (i = 1; kopija / 10 >= 1; i++) {
//         kopija = kopija / 10;
//         };
//     console.log (`Skaiciuje ${val} yra ${i} skaitmenys.`);}}

//     skaitmenuKiekisSkaiciuje(625589);


// function skaitmenuKiekisSkaiciuje (val) {
//     if (typeof val !== 'number') {
//         console.log('Pateikta netinkamo tipo reikšmė');
//     }
//     let ilgis = val.toString();
//     return console.log(ilgis.length);
// }

// skaitmenuKiekisSkaiciuje(365);



// 3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// a.	priima vieną kintamąjį
// b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// c.	priešingu atveju, funkcija tęsia darbą
// d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// e.	gražina skaitmenų kiekį
// f.	TESTAI:
// i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// 1.	rezultatas: 1
// ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// 1.	rezultatas: 3
// iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// 1.	rezultatas: 11
// iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
// vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// 1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”