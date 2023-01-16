/* ALGORITMI */

/* 
1. Koristeci dvije ugnjezdene for petlje napisi funkciju koja kao ulazni parametar prima niz brojeva,
te kao rezultat vraca sortirani niz brojeva od veceg prema manjem. 

Primjer:
Input: [4,2,6,4,2,1]
Output: [1,2,2,4,4,6]

Dodatno: Pokusaj analizirati koliki bi bio ukupni broj iteracija za niz proizvoljne duzine.
*/

/* 
2. Napisi funkciju koja ce primiti proizvoljan string kao ulaz. Funkcija ce potom provjeriti jesu li
u tom stringu sve zagrade ispravno napisane. Ukoliko je svaka zagrada zatvorena rezultat funkcije 
ce biti true, ukoliko zagrade nisu ispravno zatvorene rezultat ce biti false.

Primjer 1: 
Input: '(a+b) * (c - d)'
Output: true

Primjer 2: 
Input: '(a+b * (c - d)'
Output: false

Primjer 3: 
Input: '(c * (a+b)) * (x - (y * (c - d)))'
Output: true

Primjer 4: 
Input: ')('
Output: false
*/

/* 
3. Napisi funkciju koja ce primiti niz sljedecih tokena proizvoljnog redoslijeda:
hello_world, winter_assignment, first_week, second_week, success_result, fail_result

a) Funkcija ce svaki token zamijeniti sa sljedecim recenicama i kao rezultat ih spojiti u string:
hello_world - Pozdrav svima, mi smo studenti!
winter_assignment - Za praznike smo dobili domaci.
first_week - Prvi tjedan smo odmarali.
second_week - Drugi tjedan smo radili.
success_result - Svi koji su uspjesno rjesili su odmarali i dalje.
fail_result - Oni koji nisu uspjesno rjesili radili su vise. 

Ako niz sadrzi token koji nije prepoznat, funkcija ce ga zamjeniti sa: 'ERROR: UNDEFINED TOKEN'

b) File ce kao ulazni parametar (process.argv) primati jezik. Ukoliko je jezik en funkcija ce tokene
zamjeniti sa engleskim recenicama. Ukoliko je jezik hr ili bilo koji drugi, funkcija ce tokene zamjeniti 
sa prethodno navedenim hrvatskim recenicama.
*/

/* GOOGLE SKILLS*/

/* 
4. Istrazi kako se koriste array metode split, join i replace. Koristeci navedene metode, 
te map i filter metode napisi funkciju koja prima string koji se sastoji od vise recenica odvojenih tockom. 
Funkcija radi sljedece: 
a) Svaki razmak izmedu recenica mijenja sa praznim stringom (Npr. 'Hello world' ce biti 'Helloworld)
b) Kreira niz svih recenica koje su u tom nizu (koristi '.' kao oznaku kraja recenice)
c) Sve prazne recenice i
d) Svaku recenicu mijenja sa sljedecom recenicom: <index>. sentence length is <length>
e) Taj niz recenica spaja u string s '. ' kao razmakom koji vraca kao rezultat funkcije

Primjer:
Input: 'Hello world. Forth task is easy. Give me more.'
Output: '1. sentence length is 10. 2. sentence length is 15. 3. sentence length is 10. '
 */

/* 
5. Istrazi kako se koristi reduce metoda. Koristeci reduce metodu napisi dvije funkcije:
a) Prva funkcija racuna sumu niza brojeva

Primjer:
Input: [1,2,3,4]
Output: 10

b) Druga funkcija zbraja sve brojeve vece od 4, a oduzima sve manje

Primjer:
Input: [2,4,10,20]
Output: 24
*/

/* 
6. Istrazi kako se koristi metoda sort. Koristeci tu metodu pomozi Barba Anti da sortira voce
na svom standu na pazaru. Voce je predstavljeno nizom objekata oblika: {name: string, price: number}
Barba Ante zeli prvo staviti najskuplje voce, dakle funkcija mora vracati niz objekata sortiran od veceg
prema manjem. 

Primjer: 
Input: [{name: 'banane', price:20}, {name: 'jagode', price:30}, {name: 'jabuke', quantity:15}]
Output: [{name: 'jagode', price:30}, {name: 'banane', price:20}, {name: 'jabuke', quantity:15}]

*/
