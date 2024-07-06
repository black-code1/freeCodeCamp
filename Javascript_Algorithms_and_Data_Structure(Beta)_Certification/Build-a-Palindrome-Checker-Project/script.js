const checkBtn = document.querySelector('#check-btn');
const textInput = document.querySelector('#text-input');
const result = document.querySelector('#result');
checkBtn.addEventListener('click', () => {
    const textInputRegex = textInput.value.replace(/[^A-Za-z0-9]/g, '');
    if (textInput.value === '') {
        alert("Please input a value")
    } else if (textInput.value.length === 1) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else if(textInputRegex === [...textInputRegex].reverse().join("")) {
        result.innerText = `${textInput.value} is a palindrome`
    } else {
        result.innerText = `${textInput.value} is not a palindrome`
    }
})