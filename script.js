// O array 'questions' continua o mesmo que fizemos no passo anterior, com type e subject
const questions = [
    { type: 'multiple_choice', subject: 'TIC', question: "Qual dos componentes abaixo é considerado um dispositivo de saída (output)?", options: ["Teclado", "Scanner", "Monitor", "Mouse"], answer: "Monitor" },
    { type: 'dissertative', subject: 'TIC', question: "Como é chamado o conjunto de componentes eletrônicos que constituem a parte física de um computador, que você pode ver e tocar? Dê um exemplo.", standard_answer: "É chamado de HARDWARE. Exemplos: monitor, teclado, mouse, impressora, etc." },
    { type: 'multiple_choice', subject: 'Ética Profissional', question: "Segundo Freud, qual estrutura é formada por atitudes antigas do DNA humano, sendo o puro instinto animal?", options: ["ID", "Inconsciente", "Superego", "Ego"], answer: "ID" },
    { type: 'dissertative', subject: 'Ética Profissional', question: "Freud descreve três níveis de consciência. Qual deles é o único nível consciente, responsável por decidir a conduta a ser adotada?", standard_answer: "O EGO. É o núcleo da personalidade, o responsável por decidir qual conduta adotar, sendo o único nível plenamente consciente." },
    { type: 'multiple_choice', subject: 'Administração Geral', question: "Após a publicação da concessão da Licença Sem Vencimentos (LSV), qual o prazo que o policial militar tem para iniciar o gozo, sob pena de caducidade?", options: ["15 dias", "30 dias", "60 dias", "20 dias"], answer: "15 dias" },
    { type: 'dissertative', subject: 'Administração Geral', question: "Cite 02 requisitos necessários para a movimentação por união de cônjuges, conforme as I-02-PM.", standard_answer: "Dois dos seguintes: 1) Não prejudicar o serviço; 2) Não ter havido movimentação pelo mesmo fundamento nos últimos 5 anos; 3) O município de exercício e residência do cônjuge serem os mesmos; 4) Não ter sido movimentado por conveniência da disciplina ou da justiça; 5) Existir vaga no município do cônjuge." },
    { type: 'multiple_choice', subject: 'Direito Militar', question: "De acordo com o CPPM, qual o prazo para conclusão do Inquérito Policial Militar (IPM) com o indiciado PRESO?", options: ["20 dias a partir da instauração", "40 dias a partir da instauração", "20 dias a partir da execução da prisão", "30 dias a partir da execução da prisão"], answer: "20 dias a partir da execução da prisão" },
    { type: 'dissertative', subject: 'Direito Militar', question: "Um policial de serviço apreende R$ 5.000,00 e se apropria de R$ 500,00, dando a um terceiro. Essa conduta configura crime militar? Justifique e tipifique.", standard_answer: "Sim, configura o crime militar de Peculato (Art. 303 do CPM). O policial se apropriou de dinheiro que detinha em razão do cargo/função, desviando-o em proveito de outra pessoa." }
];

// --- ELEMENTOS HTML ---
const menuContainer = document.getElementById('menu-container');
const quizWrapper = document.getElementById('quiz-wrapper');
const subjectButtonsContainer = document.getElementById('subject-buttons');
const quizTitle = document.getElementById('quiz-title');
const timerDisplay = document.getElementById('timer-display');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const mainContent = document.getElementById('main-content');
const reviewContainer = document.getElementById('review-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const navigationControls = document.querySelector('.navigation-controls');

// --- VARIÁVEIS DE ESTADO ---
let activeQuestions = []; // NOVO: Armazena as questões do quiz atual
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;
let userAnswers = [];

// --- FLUXO PRINCIPAL ---
window.onload = createMenu; // Inicia criando o menu

function createMenu() {
    subjectButtonsContainer.innerHTML = ''; // Limpa botões antigos
    const subjects = [...new Set(questions.map(q => q.subject))];

    subjects.forEach(subject => {
        const button = document.createElement('button');
        button.className = 'subject-btn';
        button.textContent = subject;
        button.onclick = () => startQuiz(subject);
        subjectButtonsContainer.appendChild(button);
    });

    const allButton = document.createElement('button');
    allButton.className = 'subject-btn all-subjects';
    allButton.textContent = 'Simulado Completo (Todas as Matérias)';
    allButton.onclick = () => startQuiz('all');
    subjectButtonsContainer.appendChild(allButton);
}

function startQuiz(subject) {
    // Filtra as questões com base na disciplina escolhida
    if (subject === 'all') {
        activeQuestions = [...questions];
    } else {
        activeQuestions = questions.filter(q => q.subject === subject);
    }
    
    // Reseta o estado do quiz
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    userAnswers = Array(activeQuestions.length).fill(null);

    // Alterna a visibilidade dos contêineres
    menuContainer.style.display = 'none';
    quizWrapper.style.display = 'block';
    
    startTimer();
    showQuestion();
}

// --- FUNÇÕES DE CRONÔMETRO (sem alteração) ---
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


// --- LÓGICA DO QUIZ (MODIFICADA para usar activeQuestions) ---
function showQuestion() {
    const currentQuestion = activeQuestions[currentQuestionIndex];
    quizTitle.textContent = `Matéria: ${currentQuestion.subject}`;
    questionText.textContent = `${currentQuestionIndex + 1} de ${activeQuestions.length}: ${currentQuestion.question}`;
    optionsContainer.innerHTML = '';

    if (currentQuestion.type === 'multiple_choice') {
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectAnswer(option));
            optionsContainer.appendChild(button);
        });
    } else if (currentQuestion.type === 'dissertative') {
        const textArea = document.createElement('textarea');
        textArea.classList.add('dissertative-input');
        textArea.placeholder = 'Digite sua resposta aqui...';
        
        const showAnswerBtn = document.createElement('button');
        showAnswerBtn.textContent = 'Ver Resposta Padrão';
        showAnswerBtn.classList.add('nav-btn');
        showAnswerBtn.style.marginTop = '15px';

        showAnswerBtn.addEventListener('click', () => {
            const userAnswerText = textArea.value || 'Não respondida.';
            userAnswers[currentQuestionIndex] = { type: 'dissertative', answer: userAnswerText };
            textArea.disabled = true;
            showAnswerBtn.style.display = 'none';

            const standardAnswerBox = document.createElement('div');
            standardAnswerBox.classList.add('standard-answer-box');
            standardAnswerBox.innerHTML = `<h4>Resposta Padrão:</h4><p>${currentQuestion.standard_answer}</p>`;
            optionsContainer.appendChild(standardAnswerBox);
        });
        
        optionsContainer.appendChild(textArea);
        optionsContainer.appendChild(showAnswerBtn);
    }
    
    if (userAnswers[currentQuestionIndex] !== null) {
        showSavedAnswer();
    }
    updateNavigationButtons();
}

function selectAnswer(selectedOption) {
    if (userAnswers[currentQuestionIndex] !== null) return;

    const currentQuestion = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    userAnswers[currentQuestionIndex] = { type: 'multiple_choice', selected: selectedOption, correct: currentQuestion.answer, isCorrect: isCorrect };

    if (isCorrect) score++;

    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.answer) btn.classList.add('correct');
        else if (btn.textContent === selectedOption) btn.classList.add('incorrect');
    });
}

function showSavedAnswer() {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (!savedAnswer) return;

    if (savedAnswer.type === 'multiple_choice') {
        const optionButtons = optionsContainer.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === savedAnswer.correct) btn.classList.add('correct');
            else if (btn.textContent === savedAnswer.selected) btn.classList.add('incorrect');
        });
    } else if (savedAnswer.type === 'dissertative') {
        const textArea = optionsContainer.querySelector('.dissertative-input');
        const showAnswerBtn = optionsContainer.querySelector('.nav-btn');
        if(textArea) textArea.value = savedAnswer.answer;
        if(textArea) textArea.disabled = true;
        if(showAnswerBtn) showAnswerBtn.style.display = 'none';

        const standardAnswerBox = document.createElement('div');
        standardAnswerBox.classList.add('standard-answer-box');
        standardAnswerBox.innerHTML = `<h4>Resposta Padrão:</h4><p>${activeQuestions[currentQuestionIndex].standard_answer}</p>`;
        optionsContainer.appendChild(standardAnswerBox);
    }
}

function updateNavigationButtons() {
    prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    nextButton.textContent = currentQuestionIndex === activeQuestions.length - 1 ? 'Finalizar Quiz' : 'Próxima Questão';
}

function navigate(direction) {
    currentQuestionIndex += direction;
    showQuestion();
}

// --- REVISÃO E REINÍCIO (MODIFICADOS) ---
function showFinalScore() {
    stopTimer();
    mainContent.style.display = 'none';
    navigationControls.style.display = 'none';
    quizTitle.textContent = 'Revisão Completa';
    timerDisplay.textContent = `Tempo Final: ${formatTime(seconds)}`;
    
    const multipleChoiceQuestions = activeQuestions.filter(q => q.type === 'multiple_choice');
    const totalPossibleScore = multipleChoiceQuestions.length;
    const percentage = totalPossibleScore > 0 ? ((score / totalPossibleScore) * 100).toFixed(0) : 0;

    let reviewHTML = `
        <div class="final-score">
            <h2>Resultados da Avaliação</h2>
            <p>Pontuação (Múltipla Escolha): ${score} de ${totalPossibleScore} (${percentage}%)</p>
        </div>
        <div class="review-section"><h3>Revisão Detalhada:</h3>`;

    activeQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (question.type === 'multiple_choice') {
            // ... (código de revisão para múltipla escolha, sem alteração)
        } else if (question.type === 'dissertative') {
            const userAnswerText = userAnswer ? userAnswer.answer : 'Não respondida.';
            reviewHTML += `
                <div class="error-item review-dissertative">
                    <p><strong>${index + 1}. (${question.subject}) ${question.question}</strong> <span class="status-tag">(DISSERTATIVA)</span></p>
                    <p><strong>Sua Resposta:</strong></p><p class="user-written-answer">${userAnswerText}</p>
                    <p><strong>Resposta Padrão:</strong></p><p class="standard-answer-text">${question.standard_answer}</p>
                </div><hr>`;
        }
    });

    reviewHTML += '</div><button id="restart-button">Voltar ao Menu</button>';
    reviewContainer.innerHTML = reviewHTML;
    reviewContainer.style.display = 'block';

    document.getElementById('restart-button').addEventListener('click', goToMenu);
}

function goToMenu() {
    quizWrapper.style.display = 'none';
    menuContainer.style.display = 'block';
    reviewContainer.innerHTML = '';
    reviewContainer.style.display = 'none';
    mainContent.style.display = 'block';
    navigationControls.style.display = 'flex';
    createMenu(); // Recria o menu para garantir que está limpo
}


// --- EVENT LISTENERS ---
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
        navigate(1);
    } else {
        showFinalScore();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) navigate(-1);
});
