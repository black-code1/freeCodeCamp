const character = "#";
const count = 8;
const rows = [];

function padRow() {
}

const call = padRow();
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + i));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);