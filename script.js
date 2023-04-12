const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const ball = document.querySelector('img');
const answersArr = [
  'Yes!',
  'No!',
  'Maybe.',
  'Hard to say.',
  'You do not want to know...',
];

const checkInput = () => {
  if (input.value !== '' && input.value.slice(-1) === '?') {
    generateAnswer();
    error.textContent = '';
  } else if (input.value !== '' && input.value.slice(-1) !== '?') {
    error.textContent = 'Your question must end up with "?".';
    answer.textContent = '';
  } else {
    error.textContent = 'What is your question?';
    answer.textContent = '';
  }
  ball.classList.remove('shake-animation');
};

const shakeBall = () => {
  ball.classList.add('shake-animation');
  setTimeout(checkInput, 1000);
};

const generateAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  answer.innerHTML = answersArr[randomNumber];
};

ball.addEventListener('click', shakeBall);
