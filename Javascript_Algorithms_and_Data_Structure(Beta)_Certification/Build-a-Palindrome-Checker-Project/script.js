const checkBtn = document.querySelector('#check-btn');
const textInput = document.querySelector('#text-input');
checkBtn.addEventListener('click', () => {
    if (textInput.value === '') {
        alert("Please input a value")
    }
})