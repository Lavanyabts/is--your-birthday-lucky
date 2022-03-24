const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function compareValues(sum,luckyNumber)
{
if (sum%luckyNumber===0) {
    outputBox.value="Your Birthday is lucky";
} else {
    outputBox.value="your Birthday is not lucky"
}

}

function checkBirthDayIsLucky () {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value)
    else
    outputBox.innerText="please enter both the field";
}
function calculateSum(dob) {
    let sum=0;
    let toAdd = dob.split(dob[2]) 
    for(let index=0;index<toAdd.length;index++) {
      sum = sum + Number(toAdd[index]);
    }
    return sum;
}

checkButton.addEventListener('click', checkBirthDayIsLucky)
