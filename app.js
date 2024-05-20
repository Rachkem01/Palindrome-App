const inputContainer = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const outputResult = document.getElementById('result')

const checkPalindrome = (input) =>{
const InputedWord = input
    if(input === ""){
        alert("Enter a valid word")
       return;
      
    }
    const lowerCaseInputedWord = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const reverse = lowerCaseInputedWord.split('').reverse().join('');
    if (lowerCaseInputedWord === reverse){
        outputResult.innerHTML = `
        <p><strong>${input}</strong> is a palindrome<p>`
    }
    else{
        outputResult.innerHTML = `
        <p><strong>${input}</strong> is not a palindrome<p>`
    }
}
checkBtn.addEventListener('click', () => {
    checkPalindrome(inputContainer.value);
    inputContainer.value = '';
  });
inputContainer.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkPalindrome(inputContainer.value);
    inputContainer.value = '';
  }
});


