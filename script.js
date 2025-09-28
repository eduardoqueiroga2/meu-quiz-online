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

// Elementos HTML
const quizTitle = document.getElementById('quiz-title'); // Novo ID no HTML
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const timerDisplay = document.getElementById('timer-display');
const mainContent = document.getElementById('main-content'); // Novo ID para conteúdo que será substituído
const quizContainer = document.querySelector('.quiz-container');
const mainContent = document.getElementById('main-content'); 

// Variáveis de Estado
let currentQuestionIndex = 0;
let score = 0;
let intervalId;
let seconds = 0;
let userAnswers = Array(questions.length).fill(null); 
let questionAnsweredStatus = Array(questions.length).fill(false);


// --- FUNÇÕES DE CRONÔMETRO ---

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
}

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        timerDisplay.textContent = `Tempo: ${formatTime(seconds)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}


// --- FUNÇÕES DE NAVEGAÇÃO E EXIBIÇÃO ---

function updateNavigationButtons() {
    // Esconde/mostra o botão Voltar
    prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    // Altera o texto do botão de avançar na última questão
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.textContent = 'Próxima Questão';
    } else {
        nextButton.textContent = 'Finalizar Quiz';
    }
}

function showQuestion() {
    // Altera o título para o padrão do quiz
    quizTitle.textContent = 'VC DO 2º MÓDULO / TIC / CFS I-25';
    mainContent.style.display = 'block';

    if (currentQuestionIndex >= questions.length) {
        stopTimer();
        showFinalScore();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1} de ${questions.length}: ${currentQuestion.question}`;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        
        // Aplica o estado visual da resposta salva
        if (questionAnsweredStatus[currentQuestionIndex]) {
            button.disabled = true;
            if (option === userAnswers[currentQuestionIndex].correctAnswer) {
                button.classList.add('correct');
            } else if (option === userAnswers[currentQuestionIndex].selectedAnswer) {
                button.classList.add('incorrect');
            }
        } else {
            // Adiciona o evento de clique SÓ se a questão ainda não foi respondida
            button.addEventListener('click', () => checkAnswer(button, currentQuestion.answer, currentQuestion));
        }

        optionsContainer.appendChild(button);
    });

    updateNavigationButtons();
}

function navigate(direction) {
    // 1 para avançar, -1 para voltar
    currentQuestionIndex += direction;
    showQuestion();
}

function checkAnswer(selectedButton, correctAnswer, questionData) {
    const selectedOption = selectedButton.textContent;
    const isCorrect = selectedOption.includes(correctAnswer);

    // Marca a questão como respondida
    questionAnsweredStatus[currentQuestionIndex] = true;

    // Armazena o resultado
    userAnswers[currentQuestionIndex] = {
        question: questionData.question,
        correctAnswer: correctAnswer,
        selectedAnswer: selectedOption,
        isCorrect: isCorrect
    };

    // Aplica o feedback visual
    optionsContainer.querySelectorAll('.option-btn').forEach(button => {
        if (button.textContent.includes(correctAnswer)) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true; // Desabilita todos os botões após responder
    });
}


// --- FUNÇÃO DE FINALIZAÇÃO E REVISÃO CORRIGIDA ---

function calculateScore() {
    score = userAnswers.filter(answer => answer && answer.isCorrect).length;
}

function showFinalScore() {
    calculateScore();
    const finalTime = formatTime(seconds);
    
    // 1. Esconde o conteúdo principal do quiz (perguntas e navegação)
    // Se mainContent não for encontrado, esta linha pode estar falhando.
    // Garantir que o ID 'main-content' existe no seu HTML é crucial.
    mainContent.style.display = 'none'; 
    
    // 2. Altera o título principal para 'Revisão Completa'
    quizTitle.textContent = 'Revisão Completa'; 
    
    // 3. Altera o display do cronômetro para mostrar o tempo final
    timerDisplay.textContent = `Tempo: ${finalTime}`;
    
    // 4. Cria o HTML do cabeçalho de resultados
    const resultsHeaderHTML = `
        <div class="final-score">
            <h2>Resultados da Avaliação</h2>
            <p>Pontuação: ${score} de ${questions.length} (${((score / questions.length) * 100).toFixed(0)}%)</p>
        </div>
    `;

    // 5. Monta o HTML completo (Cabeçalho + Revisão + Botão)
    const finalReviewHTML = resultsHeaderHTML + 
                            getReviewHTML() + 
                            `<button id="restart-button" class="nav-btn next-btn" style="margin-top: 30px; margin-bottom: 20px;">Tentar Novamente</button>`;
    
    // 6. Insere o conteúdo completo NO optionsContainer.
    optionsContainer.innerHTML = finalReviewHTML;
    
    // 7. Adiciona o listener para o botão de Reiniciar APÓS ele ser inserido no DOM
    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
         restartButton.addEventListener('click', restartQuiz);
    }
}

function getReviewHTML() {
    let reviewHTML = '<div class="review-section"><h3>Revisão Detalhada:</h3>';
    
    userAnswers.forEach((item, index) => {
        const questionData = questions[index];
        const isAnswered = item !== null;
        const isCorrect = isAnswered && item.isCorrect;
        const statusClass = isCorrect ? 'review-correct' : 'review-incorrect';
        const statusText = isCorrect ? 'CERTO' : (isAnswered ? 'ERRADO' : 'NÃO RESPONDIDA');
        
        // Define a resposta selecionada ou a mensagem de pulada
        const selectedText = isAnswered ? item.selectedAnswer : 'Nenhuma (Questão pulada)';

        reviewHTML += `
            <div class="error-item ${statusClass}">
                <p><strong>${index + 1}. ${questionData.question}</strong> <span class="status-tag">(${statusText})</span></p>
                <p>Sua Resposta: <span class="${isCorrect ? 'text-correct' : 'text-incorrect'}">${selectedText}</span></p>
                <p>Resposta Correta: <span class="text-correct">${questionData.answer}</span></p>
            </div>
            <hr>
        `;
    });
    
    reviewHTML += '</div>';
    return reviewHTML;
}

function restartQuiz() {
    // Reseta todas as variáveis de estado
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    userAnswers = Array(questions.length).fill(null);
    questionAnsweredStatus = Array(questions.length).fill(false);
    optionsContainer.innerHTML = '';
    
    // Reinicia o quiz
    startTimer();
    showQuestion();
}


// --- EVENT LISTENERS E INICIALIZAÇÃO ---

// Inicialização: precisa que o cronômetro comece
nextButton.addEventListener('click', () => {
    // Se for a última questão, chame showFinalScore
    if (currentQuestionIndex === questions.length - 1) {
        stopTimer();
        showFinalScore();
    } else {
        navigate(1); // Caso contrário, avança
    }
});

prevButton.addEventListener('click', () => navigate(-1));

// Inicia o quiz e o cronômetro
startTimer();
showQuestion();



