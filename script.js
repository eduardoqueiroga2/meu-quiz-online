const questions = [
    {
        question: "Qual a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
        answer: "Brasília"
    },
    {
        question: "Quantos planetas há no sistema solar?",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
        answer: "Da Vinci"
    }
];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultBox = document.getElementById('result-box');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    resultBox.textContent = '';
    nextButton.style.display = 'none';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    const isCorrect = selectedOption === correctAnswer;

    allButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (isCorrect) {
        score++;
        resultBox.textContent = 'Correto!';
    } else {
        resultBox.textContent = `Incorreto. A resposta correta é: ${correctAnswer}`;
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionText.textContent = 'Quiz Finalizado!';
    optionsContainer.innerHTML = '';
    resultBox.textContent = `Sua pontuação final é ${score} de ${questions.length}.`;
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', nextQuestion);

// Inicia o quiz

showQuestion();

/* Adicione isso ao final do seu style.css */

.final-score {
    margin-bottom: 25px;
}

.review-section {
    text-align: left;
    margin-top: 30px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.error-item {
    margin-bottom: 15px;
}

.error-item p {
    margin: 5px 0;
    line-height: 1.4;
}

.error-item strong {
    font-weight: bold;
}
