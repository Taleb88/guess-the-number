// Use isNan() if input is not a number
function submit() {
    let guess = document.getElementById('guess').value;
    let result = document.getElementById('result');
    let number = Math.floor(Math.random() * 10) + 1;
    let text = '';
    
    if(isNaN(guess)) {
        text = 'Not a number. Please enter a number.';
    } else if(guess === '') {
        text = 'Please enter a numerical value.';
    } else if (guess < 1 || guess > 10) {
        text = 'Number is out of range.';
    } else if (guess == number) {
        text = 'Correct';
    } else {
        text = 'Incorrect';
    }

    result.innerHTML = text;
}
