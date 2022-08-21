/*1. Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, aminek a visszatérési értéke az aktuális év 01.01. óta eltelt másodperceinek a száma!
   Csak a Date konstruktor függvényt (akár példányosítva, akár anélkül), a now() és a getFullYear() metódusokat használd!*/

   
   const getSecondsOfThisYearUntilNow = () => 
   (Math.round(Date.now() - new Date(`January 01, 2022`).getTime()) / 1000);




export default getSecondsOfThisYearUntilNow;

