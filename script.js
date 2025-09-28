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
        options: ["Ctrl + S", "Ctrl + B", "Ctrl + I", "Ctrl + U"], // CORRIGIDO: Ctrl + U para Sublinhar
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
    if (timerInterval) clearInterval(timerInterval); // Garante que não haja múltiplos timers
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = `Tempo: ${formatTime(seconds)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// --- FUNÇÕES DE EXIBIÇÃO E NAVEGAÇÃO ---
function showQuestion() {
    mainContent.style.display = 'block';
    navigationControls.style.display = 'flex';
    const currentQuestion = questions[currentQuestionIndex];

    // Atualiza o texto da pergunta
    questionText.textContent = `${currentQuestionIndex + 1} de ${questions.length}: ${currentQuestion.question}`;
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    // Cria os botões de opção
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsContainer.appendChild(button);
    });
    
    // Se a pergunta já foi respondida, exibe o estado salvo
    if (userAnswers[currentQuestionIndex] !== null) {
        showSavedAnswer();
    }

    updateNavigationButtons();
}

function selectAnswer(selectedOption, selectedButton) {
    // Impede de responder a mesma pergunta duas vezes
    if (userAnswers[currentQuestionIndex] !== null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    // Salva a resposta do usuário
    userAnswers[currentQuestionIndex] = {
        selected: selectedOption,
        correct: currentQuestion.answer,
        isCorrect: isCorrect
    };

    // Atualiza a pontuação
    if (isCorrect) {
        score++;
    }

    // Aplica o feedback visual imediato
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedOption) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true; // Desabilita todos os botões após a resposta
    });
}

function showSavedAnswer() {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (!savedAnswer) return;

    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        if (btn.textContent === savedAnswer.correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === savedAnswer.selected) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
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

// --- FUNÇÕES DE FINALIZAÇÃO E REVISÃO ---
function showFinalScore() {
    stopTimer();
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
        const statusClass = userAnswer && userAnswer.isCorrect ? 'review-correct' : 'review-incorrect';
        const statusText = userAnswer ? (userAnswer.isCorrect ? 'CERTO' : 'ERRADO') : 'NÃO RESPONDIDA';
        const selectedText = userAnswer ? userAnswer.selected : 'Nenhuma (Questão pulada)';
        const selectedClass = userAnswer && userAnswer.isCorrect ? 'text-correct' : 'text-incorrect';

        reviewHTML += `
            <div class="error-item ${statusClass}">
                <p><strong>${index + 1}. ${question.question}</strong> <span class="status-tag">(${statusText})</span></p>
                <p>Sua Resposta: <span class="${selectedClass}">${selectedText}</span></p>
                ${!userAnswer || !userAnswer.isCorrect ? `<p>Resposta Correta: <span class="text-correct">${question.answer}</span></p>` : ''}
            </div>
            <hr>
        `;
    });

    reviewHTML += '</div><button id="restart-button">Tentar Novamente</button>';
    optionsContainer.innerHTML = reviewHTML;

    document.getElementById('restart-button').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    userAnswers.fill(null);
    optionsContainer.innerHTML = '';
    
    quizTitle.textContent = 'VC DO 2º MÓDULO / TIC / CFS I-25'; // Restaura o título original
    
    startTimer();
    showQuestion();
}

// --- INICIALIZAÇÃO ---
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

// Inicia o quiz
window.onload = () => {
    startTimer();
    showQuestion();
};
