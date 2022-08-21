// 2. Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap. Mind a két paraméter egy-egy dátum. Az első a  korábbi időpont, a második  a későbbi időpont.  A visszatérési értéke a két dátum közötti munkanapok (hétfő-péntek) száma! A különböző ünnepekkel nem kell számolnod! Ha az első dátum korábbi, mint a második akkor dobj egy hibát az alábbi üzenettel: `The first parameter is earlier date, than second!`!
// Hibát dobni a következő módon tudsz: 


const countOfWorkingDays = (start, end) => {
    const startObj = new Date(start);
    const endObj = new Date(end);
    let zero = 0;
    
    if (startObj > endObj)
        throw new Error('The first parameter is earlier date, than second!');
    else{

        while (startObj <= endObj) {
            const dayOfWeek = startObj.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) zero++;
            startObj.setDate(startObj.getDate() + 1);
        }
    }
    return zero;
}



export default countOfWorkingDays;
