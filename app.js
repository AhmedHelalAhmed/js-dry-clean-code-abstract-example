const START = 1;
const END = 100;
const MULTIPLE = 3;

let getSumOf = function (arr) {
    let total = 0;
    while (arr.length > 0) {
        total += arr.pop();
    }
    return total;
}

let findMultiples = function (start, end, multiple) {
    const results = [];
    while (start <= end) {
        if (start % multiple === 0) {
            results.push(start);
        }
        start++;
    }
    return results;
}

function getContent() {
    return `The getSumOf of all numbers divisible by ${MULTIPLE} from ${START} to ${END} is: ` + getSumOf(findMultiples(START, END, MULTIPLE));
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("content").innerHTML = getContent();
});

