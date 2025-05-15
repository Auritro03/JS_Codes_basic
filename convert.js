// function inchtofeet (inch)
// {
//     return inch / 12;
// }
// const height = 72;  
// console.log(inchtofeet(height)); // 6

function isLeapyear(year)
{if (year %4 ===0 && year % 100 !==0 )
    return true;
    else return false;
}
const year = 2028;
console.log(isLeapyear(year));