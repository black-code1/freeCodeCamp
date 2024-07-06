const checkBtn = document.querySelector('#check-btn');
const textInput = document.querySelector('#text-input');
const result = document.querySelector('#result');
checkBtn.addEventListener('click', () => {
    if (textInput.value === '') {
        alert("Please input a value")
    } else if (textInput.value.length === 1) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else if(textInput.value === [...textInput.value].reverse().join("")) {
        result.innerText = `${textInput.value} is a palindrome`
    }
})