/* 
function opseg({ x, y }) {
  return 2 * (x + y);
} 
*/

/* 
Arrow funkcije su uvijek anonimne. 
Kako arrow funkcije spremamo u varijablu one se ne hoistaju 
(hoistaju al im ne mozemo pristupit prije inicijalizacije)
*/

const pravokutnik = { x: 2, y: 3 };
/* 
const opseg = ({ x, y }) => {
  return 2 * (x + y);
}; 
*/
const opseg = ({ x, y }) => 2 * (x + y);

console.log(opseg(pravokutnik));
