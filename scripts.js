
const questions =
["What's something you think people often misunderstand about you at first glance?",
"What do you think my first impression of you was?",
"What's a small detail about yourself that you're oddly proud of?",
"If you had to describe your current energy as a weather pattern, what would it be?",
"What's something you've recently realized about yourself?",
"What's a compliment you receive often but don't fully believe?",
"What do you think makes someone instantly likable?",
"What's one thing you wish more people asked you about?",
"What's a stereotype you think you break?",
"What’s one thing you think I notice about people quickly?",
"What's something you're currently working through that most people don't know?",
"What lesson did the last person who hurt you teach you?",
"What emotion do you tend to avoid the most, and why?",
"How has your upbringing shaped the way you handle conflict?",
"What's a belief you had a year ago that you no longer stand by?",
"What's a way you self-sabotage that you're trying to outgrow?",
"What's something you want from relationships that you've never fully received?",
"What are you afraid people will see if they get too close to you?",
"What's something you want to be more honest with yourself about?",
"What's a truth you think you're currently avoiding?",
"What’s something about me that you're genuinely grateful for?",
"What do you think I need to hear right now, even if it's hard?",
"In what ways do you feel I understand you? In what ways don't I?",
"What's a part of yourself you're learning to love again?",
"When do you feel the most like yourself, and why?",
"What fear do you think has held you back the most in life?",
"What’s one memory you hope you never forget?",
"What do you think our relationship is teaching you?",
"What's a version of yourself you miss?",
"What's the most meaningful thing someone could do to support you right now?",
"What about me caught your attention first—honestly?",
"What’s one thing you wish I knew about how to love you better?",
"What’s something you feel but haven’t said out loud yet?",
"What’s a moment between us that you think about more than you admit?",
"What would you ask me if you weren’t afraid of the answer?"];


function displayQuestion() {
    let questionbank = document.getElementById("question").innerHTML = questions[Math.floor(questions.length * Math.random())];
}

function nextQuestionClicked(){
    displayQuestion();
}
function Main(){
    displayQuestion();
}

Main();