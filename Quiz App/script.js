const questions = [
    {
      question: "What is Next.js primarily used for?",
      answers: [
        { text: "Backend API development", correct: false },
        { text: "Mobile application development", correct: false },
        {
          text: "Building server-side rendered React applications",
          correct: true,
        },
        { text: "Database management", correct: false },
      ],
    },
    {
      question: "Which command is used to create a new Next.js project?",
      answers: [
        { text: "npx create-next-app", correct: true },
        { text: "npx create-react-app", correct: false },
        { text: "npm init next-app", correct: false },
        { text: "npm start", correct: false },
      ],
    },
    {
      question: "Which Next.js method is used for Static Site Generation (SSG)?",
      answers: [
        { text: "getServerSideProps", correct: false },
        { text: "getStaticProps", correct: true },
        { text: "getInitialProps", correct: false },
        { text: "getData", correct: false },
      ],
    },
    {
      question:
        "What file is required at the root of a Next.js project to define global styles?",
      answers: [
        { text: "_app.js", correct: true },
        { text: "_document.js", correct: false },
        { text: "global.js", correct: false },
        { text: "_style.js", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT a feature of Next.js?",
      answers: [
        { text: "API routes", correct: false },
        { text: "Static Site Generation", correct: false },
        { text: "Hot Module Replacement", correct: false },
        { text: "Database management", correct: true },
      ],
    },
    {
      question:
        "Which folder in a Next.js project is used to store API route files?",
      answers: [
        { text: "pages", correct: true },
        { text: "components", correct: false },
        { text: "api", correct: false },
        { text: "public", correct: false },
      ],
    },
    {
      question:
        "What hook is typically used for client-side data fetching in Next.js?",
      answers: [
        { text: "useData", correct: false },
        { text: "useEffect", correct: true },
        { text: "useFetch", correct: false },
        { text: "useStaticProps", correct: false },
      ],
    },
    {
      question: "Which command starts a Next.js development server?",
      answers: [
        { text: "npm build", correct: false },
        { text: "next dev", correct: true },
        { text: "npm init", correct: false },
        { text: "next start", correct: false },
      ],
    },
    {
      question: "How can you perform Server-Side Rendering (SSR) in Next.js?",
      answers: [
        { text: "By using getStaticProps", correct: false },
        { text: "By using getServerSideProps", correct: true },
        { text: "By using useServerRendering", correct: false },
        { text: "By using fetchData", correct: false },
      ],
    },
    {
      question:
        "Which file is used in Next.js to customize the HTML structure of the app?",
      answers: [
        { text: "_document.js", correct: true },
        { text: "_app.js", correct: false },
        { text: "index.js", correct: false },
        { text: "layout.js", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore(){
      resetState()
      questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
      nextButton.innerHTML="Play Again"
      nextButton.style.display="block"
  }
  
  function handleNextButton(){
      currentQuestionIndex++
      if(currentQuestionIndex < questions.length){
          showQuestion()
      }else{
          showScore()
      }
  }
  
  nextButton.addEventListener("click",()=>{
      if(currentQuestionIndex < questions.length){
          handleNextButton()
      }else{
          startQuiz()
      }
  })
  
  startQuiz();