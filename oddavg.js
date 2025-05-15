function oddavg(numbers){
    const odds = [];
    for (const number of numbers)

        if (number % 2 !== 0) {
            // console.log(number);
            odds.push (numbers);
        }
        return odds;
}
const numbers = [11, 2, 21, 234, 643, 756, 8743, 73]
console.log(oddavg(numbers));