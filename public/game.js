const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the national animal of Scotland?",
        choice1: 'Unicorn',
        choice2: 'Haggis',
        choice3: 'Loch Ness Monster',
        choice4: 'Sheep',
        answer: 1,
    },
    {
        question: "What happens if you drop a smartphone into the ocean?",
        choice1: 'It dials fish',
        choice2: 'It sinks',
        choice3: 'It gets salty',
        choice4: 'It becomes waterproof by default',
        answer: 2,
    },
    {
        question: "What is the correct way to eat a pizza?",
        choice1: 'With a fork and knife',
        choice2: 'Fold it in half',
        choice3: 'One bite at a time',
        choice4: 'Share it... reluctantly',
        answer: 3,
    },
    {
        question: "Why do we park on a driveway but drive on a parkway?",
        choice1: 'Because English is weird',
        choice2: 'Because roads are rebels',
        choice3: 'It’s a government conspiracy',
        choice4: 'Nobody knows',
        answer: 1,
    },
    {
        question: "What’s the square root of 81?",
        choice1: '9',
        choice2: '81',
        choice3: '42',
        choice4: 'Math is still hard',
        answer: 1,
    },
    {
        question: "What’s the first rule of Fight Club?",
        choice1: 'Talk about Fight Club',
        choice2: 'Do not talk about Fight Club',
        choice3: 'Bring snacks to Fight Club',
        choice4: 'Wear comfortable shoes',
        answer: 2,
    },
    {
        question: "Why is the sky blue?",
        choice1: 'Because the sun is shy',
        choice2: 'It reflects the ocean',
        choice3: 'It just is',
        choice4: 'Magic',
        answer: 3,
    },
    {
        question: "How many continents are there?",
        choice1: '7',
        choice2: '5',
        choice3: '12',
        choice4: 'At least one',
        answer: 1,
    },
    {
        question: "Which one of these is a programming language?",
        choice1: 'Python',
        choice2: 'Cobra',
        choice3: 'Viper',
        choice4: 'Boa',
        answer: 1,
    },
    {
        question: "What do pandas eat?",
        choice1: 'Pizza',
        choice2: 'Bamboo',
        choice3: 'Anything green',
        choice4: 'Sushi',
        answer: 2,
    },
];
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
};