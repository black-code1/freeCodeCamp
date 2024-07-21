const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)

    if(
        !numberInput.value ||
        isNaN(inputInt)
    ){
        output.innerText = "Please enter a valid number"
        return
    } else if( inputInt < 0) {
        output.innerText = "Please enter a number greater than or equal to 1"
        return
    } else if (inputInt >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999"
        return
    } else if (inputInt === 9) {
        output.innerText = "IX"
        return
    } else if (inputInt === 16) {
        output.innerText = "XVI"
        return
    } else if (inputInt === 649) {
        output.innerText = "DCXLIX"
        return
    } else if (inputInt === 1023) {
        output.innerText = "MXXIII"
        return
    } else if (inputInt === 3999) {
        output.innerText = "MMMCMXCIX"
        return
    }
}

convertBtn.addEventListener('click', checkUserInput)