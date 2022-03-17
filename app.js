const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function checkBirthDayIsLucky () {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
}
function calculateSum (dob) {
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let index=0; index<dob,length;index++) {
        sum = sum + number(dob.chartAt(index));
    }
    return sum;
}
checkNumberButton.addEventListener('click',clickBirthDateIsLucky);
