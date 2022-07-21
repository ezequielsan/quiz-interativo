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

const correctAnswers = ['B', 'C', 'D', 'B', 'B', 'C', 'C', 'A'];

const handleFormSubmission = event => {
  event.preventDefault();

  let score = 0;

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value,
    form.inputQuestion7.value,
    form.inputQuestion8.value
  ];

  correctAnswers.forEach((correctAnswer, index) => {
    if(correctAnswer === userAnswers[index]) {
      score += 12.5;
    }
  });

  span.innerText = `${score}%`.replace('.', ',');

  popup.style.display = 'block';

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const handlePopup = event => {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

  if(shouldClosePopup) {
    popup.style.display = 'none';
  }
}

form.addEventListener('submit', handleFormSubmission);
popup.addEventListener('click', handlePopup); 