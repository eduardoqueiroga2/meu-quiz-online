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
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const finishButton = document.getElementById('finish-button');
const timerDisplay = document.getElementById('timer-display');
const quizContainer = document.querySelector('.quiz-container');

// Variáveis de Estado
let currentQuestionIndex = 0;
let score = 0;
let intervalId;
let seconds = 0;

// Novo array: armazena a resposta de cada questão, mesmo se a pessoa pular
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
    prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    // O botão de Próximo é sempre exibido, a menos que seja a última questão
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.textContent = 'Próxima Questão';
        nextButton.style.display = 'inline-block';
        finishButton.style.display = 'none';
    } else {
        // Na última questão, o botão "Próxima" vira "Finalizar"
        nextButton.textContent = 'Finalizar Quiz';
        nextButton.style.display = 'inline-block';
        finishButton.style.display = 'none';
    }
}

function showQuestion() {
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
        
        // Verifica se a questão já foi respondida e aplica o estilo/estado
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

    // Armazena o resultado no novo formato de userAnswers
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


// --- FUNÇÃO DE FINALIZAÇÃO E REVISÃO ---

function calculateScore() {
    score = userAnswers.filter(answer => answer && answer.isCorrect).length;
}

function showFinalScore() {
    calculateScore();
    const finalTime = formatTime(seconds);
    
    questionText.textContent = 'Quiz Finalizado!';
    optionsContainer.innerHTML = '';
    
    // Altera o conteúdo do container para o resumo final
    const finalScoreHTML = `
        <div class="final-score">
            <h2>Resultados da Avaliação</h2>
            <p>Pontuação: ${score} de ${questions.length} (${((score / questions.length) * 100).toFixed(0)}%)</p>
            <p>Tempo total gasto: ${finalTime}</p>
        </div>
    `;
    quizContainer.innerHTML = finalScoreHTML + getReviewHTML();
    
    // Adiciona o formulário de e-mail APÓS a revisão
    quizContainer.innerHTML += getEmailFormHTML();
    document.getElementById('send-email-button').addEventListener('click', sendEmail);
}

// Título de Revisão Completa
function getReviewHTML() {
    let reviewHTML = '<div class="review-section"><h3>Revisão Completa:</h3>';
    
    userAnswers.forEach((item, index) => {
        // Se a questão não foi respondida (pulada), mostra como erro para fins de revisão
        const isAnswered = item !== null;
        const isCorrect = isAnswered && item.isCorrect;
        const statusClass = isCorrect ? 'review-correct' : 'review-incorrect';
        const statusText = isCorrect ? 'CERTO' : (isAnswered ? 'ERRADO' : 'NÃO RESPONDIDA');
        
        reviewHTML += `
            <div class="error-item ${statusClass}">
                <p><strong>${index + 1}. ${questions[index].question}</strong> <span class="status-tag">(${statusText})</span></p>
                ${isAnswered ? 
                    `<p>Sua Resposta: <span class="${isCorrect ? 'text-correct' : 'text-incorrect'}">${item.selectedAnswer}</span></p>`
                    : '<p>Sua Resposta: Nenhuma (Questão pulada)</p>'}
                <p>Resposta Correta: <span class="text-correct">${questions[index].answer}</span></p>
            </div>
            <hr>
        `;
    });
    
    reviewHTML += '</div>';
    return reviewHTML;
}


// --- FUNÇÃO DE E-MAIL (Simulação) ---

function getEmailFormHTML() {
    return `
        <div class="email-form" style="margin-top: 30px; padding: 20px; border: 1px solid #555; border-radius: 8px;">
            <h3>Enviar Revisão por E-mail</h3>
            <p>Para que o envio de e-mail funcione, é necessário um serviço de back-end (servidor). Por enquanto, usamos um serviço de terceiros:</p>
            <input type="email" id="user-email" placeholder="Seu e-mail aqui" style="width: 100%; padding: 10px; margin-bottom: 10px; box-sizing: border-box; background-color: #444; color: white; border: 1px solid #555; border-radius: 4px;">
            <button id="send-email-button" style="background-color: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">Enviar Resultados</button>
            <p id="email-feedback" style="margin-top: 10px;"></p>
        </div>
    `;
}

function sendEmail() {
    const userEmail = document.getElementById('user-email').value;
    const feedback = document.getElementById('email-feedback');
    
    if (!userEmail || !userEmail.includes('@')) {
        feedback.textContent = 'Por favor, insira um e-mail válido.';
        feedback.style.color = '#f44336';
        return;
    }
    
    // ATENÇÃO: Envio de e-mail do navegador só funciona com serviços de terceiros (como EmailJS, FormSubmit, etc.)
    // O código abaixo é uma SIMULAÇÃO do que um serviço de back-end faria:
    
    feedback.textContent = `Preparando e-mail para ${userEmail}...`;
    feedback.style.color = 'yellow';
    
    // Simulação de delay de envio
    setTimeout(() => {
        feedback.textContent = `Sucesso! O e-mail foi "enviado" para ${userEmail}. (Lembre-se: usei um serviço simulado, você precisará de uma chave API real!)`;
        feedback.style.color = '#4CAF50';
    }, 2000);
}


// --- EVENT LISTENERS E INICIALIZAÇÃO ---

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
