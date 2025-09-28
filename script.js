// Array de questões (sem alterações, exceto a correção que já fiz no atalho do Word)
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
        options: ["Ctrl + S", "Ctrl + B", "Ctrl + I", "Ctrl + U"],
        answer: "Ctrl + U"
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

// --- ELEMENTOS HTML ---
const quizTitle = document.getElementById('quiz-title');
const timerDisplay = document.getElementById('timer-display');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const mainContent = document.getElementById('main-content');
const reviewContainer = document.getElementById('review-container'); // <-- NOVO ELEMENTO
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const navigationControls = document.querySelector('.navigation-controls');

// --- VARIÁVEIS DE ESTADO ---
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;
let userAnswers = Array(questions.length).fill(null);

// --- FUNÇÕES DE CRONÔMETRO ---
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = `Tempo: ${formatTime(seconds)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// --- FUNÇÕES DE EXIBIÇÃO E LÓGICA DO QUIZ ---
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1} de ${questions.length}: ${currentQuestion.question}`;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });

    if (userAnswers[currentQuestionIndex] !== null) {
        showSavedAnswer();
    }

    updateNavigationButtons();
}

function selectAnswer(selectedOption) {
    if (userAnswers[currentQuestionIndex] !== null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    userAnswers[currentQuestionIndex] = {
        selected: selectedOption,
        correct: currentQuestion.answer,
        isCorrect: isCorrect
    };

    if (isCorrect) {
        score++;
    }

    // Aplica feedback visual e desabilita botões
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedOption) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });
}

function showSavedAnswer() {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (!savedAnswer) return;

    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === savedAnswer.correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === savedAnswer.selected) {
            btn.classList.add('incorrect');
        }
    });
}

function updateNavigationButtons() {
    prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Finalizar Quiz' : 'Próxima Questão';
}

function navigate(direction) {
    currentQuestionIndex += direction;
    showQuestion();
}

// --- FUNÇÕES DE FINALIZAÇÃO E REVISÃO (VERSÃO CORRIGIDA) ---
function showFinalScore() {
    stopTimer();
    // Esconde a área de perguntas e os botões de navegação
    mainContent.style.display = 'none';
    navigationControls.style.display = 'none';

    quizTitle.textContent = 'Revisão Completa';
    timerDisplay.textContent = `Tempo Final: ${formatTime(seconds)}`;

    const percentage = ((score / questions.length) * 100).toFixed(0);
    let reviewHTML = `
        <div class="final-score">
            <h2>Resultados da Avaliação</h2>
            <p>Pontuação: ${score} de ${questions.length} (${percentage}%)</p>
        </div>
        <div class="review-section">
            <h3>Revisão Detalhada:</h3>
    `;

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isAnswered = userAnswer !== null;
        const isCorrect = isAnswered && userAnswer.isCorrect;

        const statusClass = isCorrect ? 'review-correct' : 'review-incorrect';
        const statusText = isAnswered ? (isCorrect ? 'CERTO' : 'ERRADO') : 'NÃO RESPONDIDA';
        const selectedText = isAnswered ? userAnswer.selected : 'Nenhuma (Questão pulada)';
        const selectedClass = isCorrect ? 'text-correct' : 'text-incorrect';

        reviewHTML += `
            <div class="error-item ${statusClass}">
                <p><strong>${index + 1}. ${question.question}</strong> <span class="status-tag">(${statusText})</span></p>
                <p>Sua Resposta: <span class="${selectedClass}">${selectedText}</span></p>
                ${!isCorrect ? `<p>Resposta Correta: <span class="text-correct">${question.answer}</span></p>` : ''}
            </div>
            <hr>
        `;
    });

    reviewHTML += '</div><button id="restart-button" class="nav-btn next-btn" style="width: 100%; margin-top: 20px;">Tentar Novamente</button>';
    
    // Injeta o HTML no container de revisão, que está VISÍVEL
    reviewContainer.innerHTML = reviewHTML;
    reviewContainer.style.display = 'block';

    document.getElementById('restart-button').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    // Reseta o estado
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    userAnswers.fill(null);
    
    // Limpa e esconde a revisão
    reviewContainer.innerHTML = '';
    reviewContainer.style.display = 'none';

    // Restaura a tela do quiz
    quizTitle.textContent = 'VC DO 2º MÓDULO / TIC / CFS I-25';
    mainContent.style.display = 'block';
    navigationControls.style.display = 'flex';
    
    startTimer();
    showQuestion();
}

// --- EVENT LISTENERS E INICIALIZAÇÃO ---
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        navigate(1);
    } else {
        showFinalScore();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        navigate(-1);
    }
});

window.onload = () => {
    startTimer();
    showQuestion();
};
