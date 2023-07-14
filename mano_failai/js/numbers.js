document.getElementById('number').addEventListener('blur', function() {
let number = this.value;
let result = document.createElement('p');
let forma = document.querySelector('form');
      if (!isNaN(number) && number >= 0 && number <= 99) {
      result.textContent = 'Your number is between 0 and 99';
      result.style.backgroundColor = 'green';
      forma.prepend(result);  }
      else {    result.textContent = 'You entered not a number or a number that is not between 0 and 99';
      result.style.backgroundColor = 'red';
      forma.append(result);  }});