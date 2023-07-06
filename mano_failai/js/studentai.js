let studentas = {
istaiga: 'ktu',
kursas: '4',
vardas: 'jonas',
pavarde: 'jonaitis',
pazymiai: [9,2,5,6,5],
};

let studentai = [{
istaiga: 'ktu',
kursas: '4',
vardas: 'petras',
pavarde: 'petraitis',
pazymiai: [9,2,7,6,2],
},
{
istaiga: 'ktu',
kursas: '3',
vardas: 'petras',
pavarde: 'pirmokas',
pazymiai: [6,10,7,9,5],
},

{
istaiga: 'vdu',
kursas: '3',
vardas: 'ona',
pavarde: 'penktoke',
pazymiai: [9,4,3,6,3],
},

{
istaiga: 'vgtu',
kursas: '3',
vardas: 'danute',
pavarde: 'brakst',
pazymiai: [9,4,3,6,3],
},
{
istaiga: 'ca',
kursas: '1',
vardas: 'anatanas',
pavarde: 'kaimietis',
pazymiai: [9,4,3,6,3],
}
];

console.log('istaiga: ', studentai[4]['istaiga'],
'kursas:'+ studentai[4]['kursas'],
'vardas:'+ studentai[4]['vardas'],
'pavarde:'+ studentai[4]['pavarde'],
'pazymiai:'+ studentai[4]['pazymiai'],);

console.log('istaiga: ', studentai[4].istaiga,
'kursas:'+ studentai[4].kursas,
'vardas:'+ studentai[4].vardas,
'pavarde:'+ studentai[4].pavarde,
'pazymiai:'+ studentai[4].pazymiai);