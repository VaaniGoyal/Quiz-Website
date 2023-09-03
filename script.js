const questions = [
    {
        question: "This Little Master is undoubtedly one of the greatest players in the history of cricket. He would be an ideal opener. Want to know why? Well, he had an average of 65.45 against the West Indies in their Golden Age (with 4 pacers) and he was the first player in Test Cricket to reach 10,000 runs. Who is he?",
        answers: [

            { text: "Virat Kohli", correct: false },
            { text: "Rahul Dravid", correct: false },
            { text: "Sunil Gavaskar", correct: true },
            { text: "Saurav Ganguly", correct: false },
        ]
    },
    {
        question: "Who is known as the father of Indian cricket?",
        answers: [

            { text: "K.S. Rengith Singhi", correct: true },
            { text: "Sachin Tendulkar", correct: false },
            { text: "Kapil Dev", correct: false },
            { text: "Sunil Gavaskar", correct: false },
        ]
    },
    {
        question: "The only indian cricketer who has won four successive Man of the Match awards in One-day internationals.",
        answers: [

            { text: "Saurav Ganguly", correct: true },
            { text: "Virat Kohli", correct: false },
            { text: "MS Dhoni", correct: false },
            { text: "Zaheer Khan", correct: false },
        ]
    },
    {
        question: "Which bowler once took five wickets in seven balls in Ashes cricket?",
        answers: [

            { text: "Andy Caddick", correct: false },
            { text: "Brett Lee", correct: false },
            { text: "Steve Harmison", correct: false },
            { text: "Jason Gillespie", correct: true },
        ]
    },
    {
        question: "Which country hosted The Women's Cricket World Cup 2022?",
        answers: [

            { text: "Australia", correct: false },
            { text: "India", correct: false },
            { text: "England", correct: false },
            { text: "New Zealand", correct: true },
        ]
    },
    {
        question: "Virat Kohli's run-out was a huge moment on Day 1 of the first Test in Border- Gavaskar Trophy 2020-21. Name the fielder who inflicted the dismissal.",
        answers: [

            { text: "Mitchell Starc", correct: false },
            { text: "Cameron Green", correct: false },
            { text: "Josh Hazelwood", correct: true },
            { text: "Pat Cummins", correct: false },
        ]
    },
    {
        question: "Who among these players received India's Test cap number 300?",
        answers: [

            { text: "Navdeep Saini", correct: false },
            { text: "Washington Sundar", correct: false },
            { text: "Shubman Gill", correct: false },
            { text: "T Natarajan", correct: true },
        ]
    },
    {
        question: "X: I can't wait to get you to the Gabba. I'll tell you what, woo hoo. Y: Just like we want to get you to India that will be your last series. Who were the two players involved in this infamous banter in Sydney? (BGT 2020-21)",
        answers: [

            { text: "Tim Paine, Ravichandran Ashwin", correct: true },
            { text: "Tim Paine, Rishabh Pant", correct: false },
            { text: "Mathew Wade, Ravindra Jadeja", correct: false },
            { text: "Marnus Labuchangne, Shubman Gill", correct: false },
        ]
    },
    {
        question: "Who is the only man to play Test cricket for England against Australia and for Australia against England?",
        answers: [

            { text: "Darren Pattinson", correct: false },
            { text: "Billy Midwinter", correct: true },
            { text: "Albert Trott", correct: false },
            { text: "John Ferris", correct: false },
        ]
    },
    {
        question: "England is the defending champions at Womens World Cup 2022. Who is the captain of Team England?",
        answers: [

            { text: "Nat Sciver", correct: false },
            { text: "Meg Lanning", correct: false },
            { text: "Danni Wyatt", correct: false },
            { text: "Heather Knight", correct: true },
        ]
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

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAsnwer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAsnwer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();
