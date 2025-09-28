// Array 'questions' com type e subject
const questions = [
    // --- Início: Ética Profissional ---
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "A base ética de um determinado grupo damos o nome de moral. Assinale a alternativa que melhor descreve o conceito de MORAL:",
        options: ["É o agrupamento concordante das éticas coletivas de um determinado grupo comum.", "É o agrupamento discordante das éticas coletivas de um determinado grupo comum.", "É o agrupamento concordante dos distúrbios éticos de um determinado grupo comum.", "É o agrupamento concordante das éticas individuais de um determinado grupo comum."],
        answer: "É o agrupamento concordante das éticas individuais de um determinado grupo comum."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "Complete a frase: 'Caráter é o ______ de traços ______ e/ou morais que caracterizam um indivíduo ou um grupo. É uma ______ inerente a um indivíduo desde o nascimento, que acompanha o ______ e a ______.'",
        options: ["Conjunto, sociológicos, quantidade, atitude, índole.", "Objetivo, psicológicos, qualidade, atitude, índole.", "Conjunto, psicológicos, qualidade, temperamento, índole.", "Objetivo, sociológicos, qualidade, temperamento, índole."],
        answer: "Conjunto, psicológicos, qualidade, temperamento, índole."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "Complete as lacunas: 'A Filosofia nasceu com os egípcios, há mais de dois mil anos antes do período cristão, porém, foram os ______ que, principalmente por meio da ______, sistematizaram a arte de pensar sobre a existência humana, a ética e moral, o conhecimento, dentre outros.'",
        options: ["Pensadores atenienses / escrita.", "Filósofos gregos / escrita.", "Estudiosos ingleses / oratória."],
        answer: "Filósofos gregos / escrita."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "Segundo Freud, é nele que são formadas as atitudes mais antigas do DNA humano, nascidas a partir de milênios de evolução. É o instinto animal puro. Estamos falando do:",
        options: ["ID", "Inconsciente", "Superego", "Ego"],
        answer: "ID"
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "'Reúne valores úteis e lógicos a valores espirituais superiores, destinados a elevar a profissão policial-militar à condição de missão'. Estamos falando:",
        options: ["Do Código Penal.", "Da Deontologia policial-militar (Art. 6º do RDPM).", "Do Estatuto dos Militares (Lei N.º 6880/80).", "Do Código de Ética da Administração Pública Estadual."],
        answer: "Da Deontologia policial-militar (Art. 6º do RDPM)."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "A violação, por parte de um dos integrantes da Polícia Militar, dos valores estipulados na Deontologia policial-militar acarretará em:",
        options: ["Crime ou transgressão disciplinar, conforme legislação própria ou específica.", "Contravenção penal, haja vista tal violação não incorrer em perigo concreto, apenas abstrato.", "Crime de menor potencial ofensivo, por estar tipificada apenas no RDPM.", "Transgressão disciplinar apenas, pois tal violação não pode incorrer em crime."],
        answer: "Crime ou transgressão disciplinar, conforme legislação própria ou específica."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "O 3º Sgt PM Haroldo, ao comandar o efetivo em uma manifestação, presencia manifestantes ateando fogo em uma bandeira nacional, o que o fez sentir-se desrespeitado, pois fere um de seus valores e que é, também, um valor policial-militar, previsto no art. 7º do RDPM, que seria:",
        options: ["A honestidade.", "O civismo.", "A disciplina.", "A constância."],
        answer: "O civismo."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "O policial militar tem a opção de decidir como atuar em uma ocorrência, considerando seus ensinamentos, valores, crenças e o próprio desejo. De qual expressão estamos nos referindo?",
        options: ["Deveres éticos.", "Essência.", "Livre-arbítrio.", "Doutrinas filosóficas."],
        answer: "Livre-arbítrio."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "Sabemos que os valores de um ser humano se constroem, principalmente, até os oito anos de idade e que são assimilados, principalmente, por quatro grandes grupos influenciadores:",
        options: ["A família, a escola, o esporte e as mídias sociais.", "A amizade, a família, a religião e as mídias sociais.", "A amizade, a escola, o esporte e as mídias sociais.", "A família, a escola, a religião e as mídias sociais."],
        answer: "A família, a escola, a religião e as mídias sociais."
    },
    {
        type: 'multiple_choice',
        subject: 'Ética Profissional',
        question: "Ao orientar o efetivo recém-formado, você enaltece o valor regido pelo cumprimento dos procedimentos, transmissão de segurança e confiança, bem como persistência e obstinação. A citação corresponde a qual valor do Artigo 7º do RDPM?",
        options: ["Lealdade.", "Civismo.", "Honestidade.", "Constância."],
        answer: "Constância."
    },
    {
        type: 'dissertative',
        subject: 'Ética Profissional',
        question: "Freud, em sua teoria, descreve três níveis de consciência humana. Qual deles é o único nível consciente, que seria o núcleo da personalidade de uma pessoa, o responsável por decidir qual conduta adotar?",
        standard_answer: "O EGO. É o núcleo da personalidade, o responsável por decidir qual conduta adotar, sendo o único nível plenamente consciente."
    },
    {
        type: 'dissertative',
        subject: 'Ética Profissional',
        question: "Considerando os institutos sociais transmissores de valores, cite apenas um que você considera o mais importante, e explique o porquê, considerando a forma como tal instituto influencia na profissão policial-militar.",
        standard_answer: "O aluno deverá citar um dos 04 (quatro) institutos (família, religião, escola ou mídias sociais) e explicar o motivo baseado nos conceitos: Família (educação continuada e exemplos); Religião (valores rígidos como compaixão e bondade); Escola (valores de conhecimento, respeito e autoridade); Mídias Sociais (reflexão sobre condutas socialmente aceitas)."
    },
    // --- Fim: Ética Profissional ---
    // --- Início: TIC ---
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "Qual dos componentes abaixo é considerado um dispositivo de saída (output)?",
        options: ["Teclado", "Scanner", "Monitor", "Mouse"],
        answer: "Monitor"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "O e-mail corporativo é classificado em três tipos, são eles:",
        options: ["Organizacional, Funcional, Pessoal", "Organizacional, Civil, Pessoal", "Global, Individual, Pessoal", "Global, Organizacional, Funcional"],
        answer: "Organizacional, Funcional, Pessoal"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "A internet trouxe vários avanços para a área da educação, entre eles a EaD (Educação a Distância). Qual a legislação que trata do assunto no âmbito da corporação?",
        options: ["D-03-PM", "I-51-PM", "I-44-PM", "IP-08-PM"],
        answer: "I-44-PM"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "Os e-mails de caráter organizacional e funcional têm obrigatoriedade de consulta:",
        options: ["Exclusivamente quando determinado pelo Cmt/Ch/Dir", "Não há obrigatoriedade com a LGPD", "Obrigatoriamente uma vez na semana", "No início e no término do turno de serviço"],
        answer: "No início e no término do turno de serviço"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "No Microsoft Word (versão PT-BR), qual é o atalho utilizado para sublinhar um texto?",
        options: ["Ctrl + S", "Ctrl + B", "Ctrl + I", "Ctrl + P"],
        answer: "Ctrl + S"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "Qual é o principal objetivo de uma VPN em redes corporativas?",
        options: ["Melhorar a velocidade da conexão", "Proteger os dados transmitidos, garantindo segurança e privacidade", "Controlar o uso da internet pelos funcionários", "Acelerar o download de arquivos grandes"],
        answer: "Proteger os dados transmitidos, garantindo segurança e privacidade"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "Qual guia do Microsoft Excel contém os principais comandos para edição de células e formatação de texto?",
        options: ["Layout da Página", "Página Inicial", "Exibição", "Fórmulas"],
        answer: "Página Inicial"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "No Microsoft Word, qual opção deve ser usada para salvar um arquivo com um novo nome e em um local diferente?",
        options: ["Salvar", "Exportar", "Salvar como", "Compartilhar"],
        answer: "Salvar como"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "Qual das alternativas abaixo corresponde a um sistema operacional para dispositivos móveis?",
        options: ["Linux", "Windows", "MacOS", "Android"],
        answer: "Android"
    },
    {
        type: 'multiple_choice',
        subject: 'TIC',
        question: "O que caracteriza a computação em nuvem?",
        options: ["A necessidade de instalar software físico em cada dispositivo.", "O armazenamento e o processamento de dados em servidores remotos acessíveis via internet.", "A exclusividade para grandes corporações.", "A exigência de computadores com alto desempenho para o usuário."],
        answer: "O armazenamento e o processamento de dados em servidores remotos acessíveis via internet."
    },
    {
        type: 'dissertative',
        subject: 'TIC',
        question: "Como é chamado o conjunto de componentes eletrônicos que constituem a parte física de um computador, que você pode ver e tocar? Dê um exemplo.",
        standard_answer: "É chamado de HARDWARE. Exemplos: monitor, teclado, mouse, impressora, etc. Será considerado certo a resposta que contiver 'hardware' e um exemplo."
    },
    {
        type: 'dissertative',
        subject: 'TIC',
        question: "Durante as aulas falamos de duas principais legislações da PMESP sobre TIC, cite quais são e diga resumidamente o que trata cada uma.",
        standard_answer: "1-30-PM: Instruções para utilização da rede mundial de computadores (internet) e rede interna (intranet) pela PMESP;<br>1-31-PM: Instruções para utilização das ferramentas eletrônicas de comunicação na PMESP."
    },
    // --- Fim: TIC ---
    // --- Início: Administração Geral ---
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "As férias podem ser reduzidas a 20 dias por mais de dez não comparecimentos. Das alternativas abaixo, qual NÃO é um motivo para essa redução?",
        options: ["Licença para Tratamento de Saúde (LTS) do próprio policial.", "Cumprimento de condenação à pena restritiva de liberdade.", "Faltas ao serviço, justificadas ou não.", "Licença à policial militar casada com servidor público que foi mandado para servir em outro local."],
        answer: "Licença para Tratamento de Saúde (LTS) do próprio policial."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Sobre a Licença-Prêmio (LP), qual das afirmativas é FALSA?",
        options: ["A fruição pode ocorrer em parcelas de pelo menos 15 dias.", "É possível converter uma parcela de 30 dias em pecúnia para blocos a partir de 04/08/2007.", "Para solicitar a pecúnia, o policial PODE possuir punição de detenção ou falta injustificada no ano anterior.", "Não se pode fruir e converter a LP do mesmo bloco no mesmo ano."],
        answer: "Para solicitar a pecúnia, o policial PODE possuir punição de detenção ou falta injustificada no ano anterior."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Para fazer jus à dispensa por doação de sangue, o policial militar deve solicitar prévia permissão, observando um limite de doações por ano e intervalos mínimos. Qual a regra correta?",
        options: ["4 doações/ano, intervalo de 30 dias (homens) e 60 dias (mulheres).", "3 doações/ano, intervalo de 60 dias (homens) e 90 dias (mulheres).", "Pode ir direto, apresentando o atestado depois.", "Apenas apresentar o atestado, sem necessidade de permissão prévia."],
        answer: "3 doações/ano, intervalo de 60 dias (homens) e 90 dias (mulheres)."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "O Cb PM Paulo teve seu filho nascido em 14MAR25 às 23h30. Ele trabalhou no turno das 06h00 às 18h00 do mesmo dia. A quantos dias de Licença-Paternidade ele tem direito e a partir de qual data?",
        options: ["8 dias, a contar de 14MAR25.", "5 dias, a contar de 14MAR25.", "8 dias, a contar de 15MAR25.", "5 dias, a contar de 15MAR25."],
        answer: "5 dias, a contar de 15MAR25."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Um policial fratura o braço e recebe 20 dias de afastamento. Qual tipo de afastamento ele irá fruir e onde será publicado?",
        options: ["Licença Tratamento Saúde, Bol Int PM.", "Convalescença Médica, Bol G PM.", "Licença Tratamento Saúde, Bol G PM.", "Convalescença Médica, Bol Int PM."],
        answer: "Licença Tratamento Saúde, Bol G PM."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Após a publicação da concessão da Licença Sem Vencimentos (LSV), qual o prazo que o policial militar tem para iniciar o gozo, sob pena de caducidade?",
        options: ["15 dias", "30 dias", "60 dias", "20 dias"],
        answer: "15 dias"
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "A partir de qual semana de gestação a licença-gestante pode ser iniciada, mediante prescrição médica, conforme as I-36-PM?",
        options: ["A partir da 20ª semana de gestação.", "A partir da 25ª semana de gestação.", "A partir da 30ª semana de gestação.", "A partir da 32ª semana de gestação."],
        answer: "A partir da 32ª semana de gestação."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Após término do CFS, o 3º Sgt PM Pedro se apresentou no 89º BPM/M. Conforme as I-2 PM, qual a espécie de movimentação neste caso?",
        options: ["Transferência por conveniência do serviço.", "Adição.", "Classificação.", "À disposição."],
        answer: "Classificação."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Qual a espécie de movimentação processada quando a permanência do Policial Militar na OPM é nociva ou prejudicial à disciplina?",
        options: ["Conveniência do serviço.", "Conveniência da disciplina.", "Conveniência da justiça.", "Conveniência própria."],
        answer: "Conveniência da disciplina."
    },
    {
        type: 'multiple_choice',
        subject: 'Administração Geral',
        question: "Em 10 de fevereiro, foi publicada a movimentação de policiais para o 88º BPM/M. Considerando que a apresentação ocorrerá no prazo limite (5 dias), a partir de qual data eles poderão ser empenhados em uma operação?",
        options: ["A partir de 12 de fevereiro.", "A partir de 20 de fevereiro.", "A partir de 16 de fevereiro.", "A partir de 11 de fevereiro."],
        answer: "A partir de 16 de fevereiro."
    },
    {
        type: 'dissertative',
        subject: 'Administração Geral',
        question: "Cite dois afastamentos que geram desconto no adicional de insalubridade e em qual rotina do SIPA é realizado esse desconto.",
        standard_answer: "Dois dos seguintes afastamentos: Missão/estudo por mais de 30 dias; Participação em congressos por mais de 30 dias; Licença-prêmio; Desincompatibilização; Competições esportivas por mais de 30 dias. O desconto é realizado na Rotina 24 do SIPA."
    },
    {
        type: 'dissertative',
        subject: 'Administração Geral',
        question: "Com base nas I-02-PM, cite 02 requisitos necessários para a movimentação por união de cônjuges.",
        standard_answer: "Dois dos seguintes: 1) Não prejudicar o serviço; 2) Não ter havido movimentação pelo mesmo fundamento nos últimos 5 anos; 3) O município de exercício e residência do cônjuge serem os mesmos; 4) Não ter sido movimentado por conveniência da disciplina ou da justiça; 5) Existir vaga no município do cônjuge."
    },
    // --- Fim: Administração Geral ---
    // --- Início: Direito Militar ---
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "As I-40-PM trazem as formas de delegação para o exercício das atribuições de Polícia Judiciária Militar. Assinale a alternativa em que NÃO há possibilidade de delegação:",
        options: ["Por escrito.", "Verbalmente quando uma autoridade de PJM originária comparecer ao local.", "Por rádio ou telefone quando a autoridade de PJM for cientificada.", "Declaração de deserção de militar."],
        answer: "Declaração de deserção de militar."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "De acordo com o artigo 88, do CPPM, qual a regra geral para determinar a competência do foro militar?",
        options: ["Pelo domicílio do acusado.", "Pela sede do serviço militar.", "Pelo local onde a infração foi cometida.", "Pela data de nascimento do acusado."],
        answer: "Pelo local onde a infração foi cometida."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Assinale a alternativa que representa a composição de juízes do Tribunal de Justiça Militar do Estado de São Paulo:",
        options: ["Quatro Coronéis PM da ativa, um juiz promovido da primeira instância, um juiz eleito dos quadros do MP e um juiz eleito dos quadros da OAB.", "Quatro Coronéis PM da ativa e três juízes promovidos da primeira instância.", "Quatro Coronéis PM da reserva, um juiz promovido da primeira instância, um juiz eleito dos quadros do MP e um juiz eleito dos quadros da OAB.", "Quatro Coronéis PM da ativa, um juiz promovido da primeira instância e dois juízes eleitos dos quadros do MP."],
        answer: "Quatro Coronéis PM da ativa, um juiz promovido da primeira instância, um juiz eleito dos quadros do MP e um juiz eleito dos quadros da OAB."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Qual crime é caracterizado pela ação de um militar que, ao receber uma ordem direta e clara de seu superior, opta deliberadamente por não cumpri-la?",
        options: ["Peculato", "Recusa de obediência", "Não cumprimento de ordem", "Insubmissão"],
        answer: "Recusa de obediência"
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "De acordo com o CPPM, quais são os prazos para conclusão do Inquérito Policial Militar (IPM)?",
        options: ["30 dias (preso) ou 60 dias (solto), contados da instauração.", "20 dias (preso) ou 40 dias (solto), contados da instauração.", "20 dias (preso, a partir da prisão) ou 40 dias (solto, a partir da instauração).", "30 dias (preso, a partir da prisão) ou 60 dias (solto, a partir da instauração)."],
        answer: "20 dias (preso, a partir da prisão) ou 40 dias (solto, a partir da instauração)."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Assinale a alternativa correta quanto à finalidade do Inquérito Policial Militar:",
        options: ["Apuração sumaríssima de fato (crime militar), deixando a autoria para a fase processual.", "Apuração sumária de fato (crime militar), e de sua autoria.", "Apuração sumária de fato (infração comum), e de sua autoria.", "Apuração sumaríssima de fato (ilícito administrativo), e de sua autoria."],
        answer: "Apuração sumária de fato (crime militar), e de sua autoria."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Uma vez instaurado o Inquérito Policial Militar, mesmo que concluído pela inexistência de crime:",
        options: ["Será arquivado pela própria autoridade de polícia judiciária militar.", "Ficará suspenso por determinação da própria autoridade de polícia judiciária militar.", "Não poderá ser arquivado pela própria autoridade de polícia judiciária militar.", "Ficará suspenso por determinação do promotor até que surjam fatos novos."],
        answer: "Não poderá ser arquivado pela própria autoridade de polícia judiciária militar."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Considerando a lavratura de um Auto de Prisão em Flagrante Delito de crime militar, para onde é enviada a via original?",
        options: ["Presídio da Polícia Militar Romão Gomes.", "Justiça Militar do Estado.", "Corregedoria PM.", "Respectiva OPM do preso."],
        answer: "Justiça Militar do Estado."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Após uma prisão em flagrante por violência contra superior, qual documento deve ser entregue ao preso e em qual prazo máximo?",
        options: ["Citação, no prazo de 24 horas.", "Citação, no prazo de 48 horas.", "Nota de culpa, no prazo de 48 horas.", "Nota de culpa, no prazo de 24 horas."],
        answer: "Nota de culpa, no prazo de 24 horas."
    },
    {
        type: 'multiple_choice',
        subject: 'Direito Militar',
        question: "Após a lavratura do APFD por crime militar, antes de apresentar o preso no Presídio Militar, para qual estabelecimento ele deverá ser encaminhado?",
        options: ["Ao Centro Médico para exame de corpo de delito (crime militar).", "Ao Centro Médico para exame de corpo de delito (crime comum).", "Ao pronto-socorro mais próximo para exame de corpo de delito (crime militar).", "Ao Instituto Médico Legal para exame de corpo de delito (crime comum)."],
        answer: "Ao Centro Médico para exame de corpo de delito (crime militar)."
    },
    {
        type: 'dissertative',
        subject: 'Direito Militar',
        question: "A primeira instância da Justiça Militar de SP possui seis auditorias. Responda, de forma sucinta, a qual matéria ou competência cada auditoria se destina.",
        standard_answer: "A 1ª, 3ª e 4ª Auditorias têm competência criminal; a 2ª e 6ª Auditorias têm competência civil; e a 5ª Auditoria destina-se à Correição Permanente, Distribuição e Execuções Criminais."
    },
    {
        type: 'dissertative',
        subject: 'Direito Militar',
        question: "Um policial de serviço apreende R$ 5.000,00 e se apropria de R$ 500,00, repassando-o a um terceiro. Essa conduta configura crime militar? Justifique e tipifique.",
        standard_answer: "Sim, configura o crime militar de Peculato (Art. 303 do CPM). O policial se apropriou de dinheiro que detinha em razão do cargo/função, desviando-o em proveito alheio."
    }
    // --- Fim: Direito Militar ---
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
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;
let userAnswers = [];

// --- FLUXO PRINCIPAL ---

function createMenu() {
    subjectButtonsContainer.innerHTML = '';
    const subjectColors = {
        'TIC': '#007bff', 'Ética Profissional': '#28a745', 'Administração Geral': '#ffc107', 'Direito Militar': '#dc3545', 'default': '#6c757d'
    };
    const subjects = [...new Set(questions.map(q => q.subject))];

    subjects.forEach(subject => {
        const button = document.createElement('button');
        const color = subjectColors[subject] || subjectColors['default'];
        button.className = 'subject-btn';
        button.textContent = subject;
        button.style.borderColor = color;
        button.style.color = color;
        button.onmouseover = () => { button.style.backgroundColor = color; button.style.color = '#FFFFFF'; };
        button.onmouseout = () => { button.style.backgroundColor = 'transparent'; button.style.color = color; };
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
    activeQuestions = subject === 'all' ? [...questions] : questions.filter(q => q.subject === subject);
    currentQuestionIndex = 0;
    score = 0;
    seconds = 0;
    userAnswers = Array(activeQuestions.length).fill(null);
    menuContainer.style.display = 'none';
    quizWrapper.style.display = 'block';
    startTimer();
    showQuestion();
}

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

// --- LÓGICA DO QUIZ ---
function showQuestion() {
    optionsContainer.innerHTML = ''; // Limpa a área de opções primeiro
    const currentQuestion = activeQuestions[currentQuestionIndex];
    quizTitle.textContent = `Matéria: ${currentQuestion.subject}`;
    questionText.textContent = `${currentQuestionIndex + 1} de ${activeQuestions.length}: ${currentQuestion.question}`;

    if (currentQuestion.type === 'multiple_choice') {
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectMultipleChoiceAnswer(option));
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
        showAnswerBtn.onclick = () => selectDissertativeAnswer(textArea, showAnswerBtn, currentQuestion.standard_answer);
        optionsContainer.appendChild(textArea);
        optionsContainer.appendChild(showAnswerBtn);
    }
    
    if (userAnswers[currentQuestionIndex]) {
        showSavedAnswer();
    }
    updateNavigationButtons();
}

function selectMultipleChoiceAnswer(selectedOption) {
    if (userAnswers[currentQuestionIndex]) return;
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    userAnswers[currentQuestionIndex] = { type: 'multiple_choice', selected: selectedOption, correct: currentQuestion.answer, isCorrect };
    if (isCorrect) score++;
    showSavedAnswer(); // Reusa a função para aplicar o feedback visual
}

function selectDissertativeAnswer(textArea, button, standardAnswer) {
    if (userAnswers[currentQuestionIndex]) return;
    const userAnswerText = textArea.value.trim() === '' ? 'Não respondida.' : textArea.value;
    userAnswers[currentQuestionIndex] = { type: 'dissertative', answer: userAnswerText };
    showSavedAnswer(); // Reusa a função para mostrar a resposta padrão
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
        optionsContainer.querySelector('.dissertative-input').value = savedAnswer.answer;
        optionsContainer.querySelector('.dissertative-input').disabled = true;
        const btn = optionsContainer.querySelector('.nav-btn');
        if (btn) btn.style.display = 'none';
        
        // CORREÇÃO: Evita adicionar respostas duplicadas
        if (!optionsContainer.querySelector('.standard-answer-box')) {
            const standardAnswerBox = document.createElement('div');
            standardAnswerBox.classList.add('standard-answer-box');
            standardAnswerBox.innerHTML = `<h4>Resposta Padrão:</h4><p>${activeQuestions[currentQuestionIndex].standard_answer}</p>`;
            optionsContainer.appendChild(standardAnswerBox);
        }
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

// --- REVISÃO E REINÍCIO ---
function showFinalScore() {
    stopTimer();
    mainContent.style.display = 'none';
    navigationControls.style.display = 'none';
    quizTitle.textContent = 'Revisão Completa';
    timerDisplay.textContent = `Tempo Final: ${formatTime(seconds)}`;
    
    const multipleChoiceQuestions = activeQuestions.filter(q => q.type === 'multiple_choice');
    const totalPossibleScore = multipleChoiceQuestions.length;
    const percentage = totalPossibleScore > 0 ? ((score / totalPossibleScore) * 100).toFixed(0) : 0;

    let reviewHTML = `<div class="final-score"><h2>Resultados</h2><p>Pontuação (Múltipla Escolha): ${score} de ${totalPossibleScore} (${percentage}%)</p></div><div class="review-section"><h3>Revisão Detalhada:</h3>`;

    activeQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (question.type === 'multiple_choice') {
            const isAnswered = userAnswer !== null;
            const isCorrect = isAnswered && userAnswer.isCorrect;
            const statusClass = isCorrect ? 'review-correct' : 'review-incorrect';
            const statusText = isAnswered ? (isCorrect ? 'CERTO' : 'ERRADO') : 'NÃO RESPONDIDA';
            const selectedText = isAnswered ? userAnswer.selected : 'Nenhuma (Questão pulada)';
            const selectedClass = isCorrect ? 'text-correct' : 'text-incorrect';
            reviewHTML += `<div class="error-item ${statusClass}"><p><strong>${index + 1}. (${question.subject}) ${question.question}</strong> <span class="status-tag">(${statusText})</span></p><p>Sua Resposta: <span class="${selectedClass}">${selectedText}</span></p>${!isCorrect ? `<p>Resposta Correta: <span class="text-correct">${question.answer}</span></p>` : ''}</div><hr>`;
        } else if (question.type === 'dissertative') {
            const userAnswerText = userAnswer ? userAnswer.answer : 'Não respondida.';
            reviewHTML += `<div class="error-item review-dissertative"><p><strong>${index + 1}. (${question.subject}) ${question.question}</strong> <span class="status-tag">(DISSERTATIVA)</span></p><p><strong>Sua Resposta:</strong></p><p class="user-written-answer">${userAnswerText}</p><p><strong>Resposta Padrão:</strong></p><p class="standard-answer-text">${question.standard_answer}</p></div><hr>`;
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
}

// --- EVENT LISTENERS E INICIALIZAÇÃO ---
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
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

window.onload = createMenu;





