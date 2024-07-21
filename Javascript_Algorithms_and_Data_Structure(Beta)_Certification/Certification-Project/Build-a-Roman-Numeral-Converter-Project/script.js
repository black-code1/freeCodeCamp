const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
let output = document.getElementById('output');

const romanNumeralData = [
    {
        romanNumeral: 'M',
        arabicNumeral: 1000,
    },
    {
        romanNumeral: 'CM',
        arabicNumeral: 900,
    },
    {
        romanNumeral: 'D',
        arabicNumeral: 500,
    },
    {
        romanNumeral: 'CD',
        arabicNumeral: 400,
    }
    , {
        romanNumeral: 'C',
        arabicNumeral: 100,
    },
    {
        romanNumeral: 'XC',
        arabicNumeral: 90,
    },
    {
        romanNumeral: 'L',
        arabicNumeral: 50,
    },
    {
        romanNumeral: 'XL',
        arabicNumeral: 40,
    },
    {
        romanNumeral: 'X',
        arabicNumeral: 10,
    },
    {
        romanNumeral: 'IX',
        arabicNumeral: 9,
    }
    , {
        romanNumeral: 'V',
        arabicNumeral: 5,
    },
    {
        romanNumeral: 'IV',
        arabicNumeral: 4,
    },
    {
        romanNumeral: 'I',
        arabicNumeral: 1,
    },
]

const decimalToRomanNumeral = (input, result = '') => {
    if ( input < 0) {
        return "Please enter a number greater than or equal to 1"
    } else if (input >= 4000) {
        return "Please enter a number less than or equal to 3999"
    } else {
        for (let i = 0; i < romanNumeralData.length; i++) {
            const { romanNumeral, arabicNumeral } = romanNumeralData[i];
            if (input >= arabicNumeral) {
                return decimalToRomanNumeral(input - arabicNumeral, result + romanNumeral);
            }
        }
        return result;
    }

}
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)

    if(
        !numberInput.value ||
        isNaN(inputInt)
    ){
        output.innerText = "Please enter a valid number"
        return
    }  else {
        output.textContent = decimalToRomanNumeral(inputInt)
        numberInput.value = ''
    }
}

convertBtn.addEventListener('click', checkUserInput)