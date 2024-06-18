const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}

function addTwoNumbers(param1, param2) {
    return param1 + param2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum);

const call = padRow("Legrand");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + i));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);