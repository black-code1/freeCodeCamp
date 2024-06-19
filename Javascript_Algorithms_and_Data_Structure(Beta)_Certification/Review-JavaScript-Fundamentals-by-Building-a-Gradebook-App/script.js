function getAverage(scores) {
    let sum = 0;
    for(const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score <= 99 && score >= 90) {
        return "A";
    } else if (score <= 89 && score >= 80) {
        return "B"
    } else if (score <= 79 && score >= 70) {
        return "C"
    } else if (score <= 69 && score >= 60) {
        return "D"
    } else if (score <= 59 && score >= 0) {
        return "F"
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));