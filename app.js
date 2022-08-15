/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/
const form = document.querySelector('.quiz-form');
const span = document.querySelector('span');
const popup = document.querySelector('.popup-wrapper');

const correctAnswers = ['B', 'C', 'D', 'B', 'B', 'C', 'C', 'A', 'C', 'C'];

let score = 0;

const getUserAnswers = () => correctAnswers.map((_, index) => 
  form[`inputQuestion${index + 1}`].value);

const calculateUserScore = userAnswers => {  
  correctAnswers.forEach((correctAnswer, index) => {
    const isUserAnswerCorrect = correctAnswer === userAnswers[index];

    if(isUserAnswerCorrect) score += 10;
  });
}

const showFinalScore = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  popup.classList.remove('d-none');
}

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {

    if(counter === score) clearInterval(timer);

    popup.querySelector('span').textContent = `${counter++}%`.replace('.', ',');
  }, 30);
}

const resetUserScore = () => {
  score = 0;
}

const handleFormSubmission = event => {
  event.preventDefault();
  
  const userAnswers = getUserAnswers();
  
  resetUserScore();
  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalScore();
}

const handlePopupEvent = event => {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

  if(shouldClosePopup) {
    popup.classList.add('d-none');
  }
}

form.addEventListener('submit', handleFormSubmission);
popup.addEventListener('click', handlePopupEvent); 