const questions = [
    {
        question: "Qual dos componentes abaixo é considerado um dispositivo de saída (output)?",
        options: ["Teclado", "Scanner", "Monitor", "Mouse"],
        answer: "Monitor"
    },
    {
        question: "O e-mail corporativo é classificado em três tipos, são eles:",
        options: [
            "Organizacional, Funcional, Pessoal", 
            "Organizacional, Civil, Pessoal", 
            "Global, Individual, Pessoal", 
            "Global, Organizacional, Funcional"
        ],
        answer: "Organizacional, Funcional, Pessoal"
    },
    {
        question: "Qual a legislação que trata da EaD (Educação a Distância) no âmbito da corporação?",
        options: ["D-03-PM", "I-51-PM", "I-44-PM", "IP-08-PM"],
        answer: "I-44-PM"
    },
    {
        question: "Os e-mails de caráter organizacional e funcional têm obrigatoriedade de consulta:",
        options: [
            "Exclusivamente quando determinado pelo Cmt/Ch/Dir", 
            "Não há obrigatoriedade com a LGPD", 
            "Obrigatoriamente uma vez na semana", 
            "No inicio e no término do turno de serviço"
        ],
        answer: "No inicio e no término do turno de serviço"
    },
    {
        question: "No Microsoft Word, qual é o atalho utilizado para sublinhar um texto?",
        options: ["Ctrl + S", "Ctrl + B", "Ctrl + I", "Ctrl + P"],
        answer: "Ctrl + S"
    },
    {
        question: "Qual é o principal objetivo de uma VPN em redes corporativas?",
        options: ["Melhorar a velocidade", "Proteger os dados", "Controlar o uso", "Acelerar downloads"],
        answer: "Proteger os dados"
    },
    {
        question: "Qual guia do Microsoft Excel contém os comandos para edição de células e formatação de texto?",
        options: ["Layout da Página", "Página Inicial", "Exibição", "Fórmulas"],
        answer: "Página Inicial"
    },
    {
        question: "No Microsoft Word, qual opção deve ser usada para salvar um arquivo com um novo nome e em um local diferente?",
        options: ["Salvar", "Exportar", "Salvar como", "Compartilhar"],
        answer: "Salvar como"
    },
    {
        question: "Qual das alternativas abaixo corresponde a um sistema operacional para dispositivos móveis?",
        options: ["Linux", "Windows", "MacOS", "Android"],
        answer: "Android"
    },
    {
        question: "O que caracteriza a computação em nuvem?",
        options: ["Instalar software físico", "Armazenamento e processamento em servidores remotos", "Exclusividade para grandes corporações", "Exigência de computadores de alto desempenho"],
        answer: "Armazenamento e processamento em servidores remotos"
    }
];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultBox = document.getElementById('result-box');
const quizContainer = document.querySelector('.quiz-container');

let currentQuestionIndex = 0;
let score = 0;
// Array para armazenar o resultado COMPLETO de cada pergunta
let questionResults = []; 

function showQuestion() {
    // ... (Mantém a lógica de mostrar a pergunta e o botão)
    nextButton.style.display = 'none';
    resultBox.textContent = '';
    
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        // Adiciona o contador de questão na exibição
        questionText.textContent = `${currentQuestionIndex + 1} de ${questions.length}: ${currentQuestion.question}`;
        optionsContainer.innerHTML = '';
    
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => checkAnswer(button, currentQuestion.answer, currentQuestion));
            optionsContainer.appendChild(button);
        });
    } else {
        showFinalScore();
    }
}

function checkAnswer(selectedButton, correctAnswer, questionData) {
    const selectedOption = selectedButton.textContent;
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    const isCorrect = selectedOption.includes(correctAnswer);
    
    allButtons.forEach(button => {
        if (button.textContent.includes(correctAnswer)) {
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
        resultBox.textContent = `Incorreto. A correta era: ${correctAnswer}`;
    }

    // Armazena o resultado completo da pergunta
    questionResults.push({
        question: questionData.question,
        correct: correctAnswer,
        selected: selectedOption,
        isCorrect: isCorrect
    });

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showFinalScore() {
    questionText.textContent = 'Quiz Finalizado!';
    optionsContainer.innerHTML = '';
    
    // Altera o conteúdo do container para o resumo final e a revisão
    const finalScoreHTML = `
        <div class="final-score">
            <h2>Pontuação Final: ${score} de ${questions.length} (${((score / questions.length) * 100).toFixed(0)}%)</h2>
            <p>Abaixo está a revisão completa de todas as ${questions.length} questões:</p>
        </div>
    `;
    quizContainer.innerHTML = finalScoreHTML + getReviewHTML();
}

// Nova função para gerar a revisão COMPLETA
function getReviewHTML() {
    let reviewHTML = '<div class="review-section"><h3>Revisão Detalhada:</h3>';
    
    questionResults.forEach((item, index) => {
        const statusClass = item.isCorrect ? 'review-correct' : 'review-incorrect';
        const statusText = item.isCorrect ? 'CERTO' : 'ERRADO';
        
        reviewHTML += `
            <div class="error-item ${statusClass}">
                <p><strong>${index + 1}. ${item.question}</strong> <span class="status-tag">(${statusText})</span></p>
                <p>Resposta Selecionada: <span class="${item.isCorrect ? 'text-correct' : 'text-incorrect'}">${item.selected}</span></p>
                ${!item.isCorrect ? `<p>Resposta Correta: <span class="text-correct">${item.correct}</span></p>` : ''}
            </div>
            <hr>
        `;
    });
    
    reviewHTML += '</div>';
    return reviewHTML;
}

nextButton.addEventListener('click', nextQuestion);

// Inicia o quiz
showQuestion();
