function submit() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var num = document.getElementById("num");
    var pass = document.getElementById("pass");
    localStorage.setItem("Name", name.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Number", num.value);
    localStorage.setItem("Password", pass.value);
    if (name.value === "") {
        alert("plz check required field");
    }
    else if (email.value === "") {
        alert("plz check required field");
    }
    else if (num.value === "") {
        alert("plz check required field");
    }
    else if (pass.value === "") {
        alert("plz check required field");
    }



    else {
        window.location = "login.html";
    }
}
function log() {
    var em = document.getElementById("loemail");
    var pas = document.getElementById("password");
    var m = localStorage.getItem("Email");
    var n = localStorage.getItem("Password");
    if (em.value === m && pas.value === n) {

        window.location = "quiz.html";

    }
    else {
        alert("your email address is not valid");
    }
}



var questions = [

    {

        "question": "Which one is the capital of Kingdom of Saudi Arabia?",
        "option1": "Makkah",
        "option2": "Madinah",
        "option3": "Riyadh",
        "option4": "Jeddah",
        "answer": "3"
    },
    {

        "question": "Where was Cricket world cup 2007 played?",
        "option1": "Pakistan",
        "option2": "Westindies",
        "option3": "Australia",
        "option4": "England and Wales",
        "answer": "2"
    },
    {

        "question": "Where was Quaid-e-Azam Muhammad Ali Jinnah Born?",
        "option1": "Mumbai",
        "option2": "Hyderabad",
        "option3": "Karachi",
        "option4": "Aligarh",
        "answer": "3"
    },
    {

        "question": "Which one is the capital of Australia?",
        "option1": "Cannebra",
        "option2": "Sydney",
        "option3": "Perth",
        "option4": "Mellbourne",
        "answer": "1"
    },


    {

        "question": "In which continent Turkey situated?",
        "option1": "Africa",
        "option2": "Asia",
        "option3": "Europe",
        "option4": "Both in Asia and Europe",
        "answer": "4"
    },

    {

        "question": "Who is the president of USA?",
        "option1": "Barak Husain Obama",
        "option2": "Donald Trump",
        "option3": "Bill Clinton",
        "option4": "Vladimir Putin",
        "answer": "2"
    },

    {

        "question": "In which continent FIFA World Cup 2011 played?",
        "option1": "Europe",
        "option2": "Asia",
        "option3": "Africa",
        "option4": "South America",
        "answer": "3"
    },

    {

        "question": "Who is the last and final prophet of Allah?",
        "option1": "Hadhrat Isa (Alehissalaam)",
        "option2": "Hadhrat Moosa (Alehissalaam)",
        "option3": "Hadhrat Ibraheem (Alehissalaam)",
        "option4": "Hadhrat Muhammad Mustufa (Sal Allaho Alehe wa Sallam)",
        "answer": "4"
    },
    {

        "question": "What is the name of first battle fought between Muslims and polytheist of Makkah",
        "option1": "Ghazwah-e-Uhud",
        "option2": "Ghazwah-e-Badar",
        "option3": "Ghazwah-e-Khyber",
        "option4": "Ghazwah-e-Hunain",
        "answer": "2"
    },
    {

        "question": "Who was the first president of All India Muslim League?",
        "option1": "Sir Syed Ahmed Khan",
        "option2": "Maulana Muhammad Ali Johar",
        "option3": "Nawabzada Liaqat Ali Khan",
        "option4": "Nawab Salimullah Khan",
        "answer": "4"
    },



    {

        "question": "Who invented the Telephone?",
        "option1": "Bill Gates",
        "option2": "Steve Jobs",
        "option3": "Graham Bell",
        "option4": "Finlay Morris",
        "answer": "3"
    },
    {

        "question": "Who is Founder of Facebook",
        "option1": "Bill Gates",
        "option2": "Steve Jobs",
        "option3": "Mark Zukerburg",
        "option4": "Finlay Morris",
        "answer": "3"
    },
    {

        "question": "Who is inventer of Electric Bulb?",
        "option1": "Thomas Edison",
        "option2": "Ibn ul Haitam",
        "option3": "Albert Einstein",
        "option4": "Michael Faraday",
        "answer": "1"
    },
    {

        "question": "who is the current Champion of european Football",
        "option1": "Purtogal",
        "option2": "England",
        "option3": "France",
        "option4": "Germany",
        "answer": "1"
    },
    {

        "question": "who is the highest wicket taker in One day International Cricket",
        "option1": "Curtley Ambrose",
        "option2": "Wasim Akram",
        "option3": "Shane Warne",
        "option4": "Mutaya Murlitharan",
        "answer": "2"
    },
    {

        "question": "Who is current Tennis Wimbledon Man's Champion ",
        "option1": "Rafael Nadal",
        "option2": "Novak Djokovic",
        "option3": "Andy Murray",
        "option4": "Roger Federer",
        "answer": "4"
    },
    {

        "question": "Who is Highest Run Scorer in Cricket",
        "option1": "Virat Kohli",
        "option2": "Sachin Tendulkar",
        "option3": "Ricky Ponting",
        "option4": "Don Bradman",
        "answer": "2"
    },
    {

        "question": "Who was the Hockey Champion in 1994",
        "option1": "Pakistan",
        "option2": "Australia",
        "option3": "India",
        "option4": "Holand",
        "answer": "1"
    },
    {

        "question": "Who is the Founder of Apple",
        "option1": "Bill Gates",
        "option2": "Steve Jobs",
        "option3": "Graham Bell",
        "option4": "Finlay Morris",
        "answer": "2"
    }
];
var min = 2;
var sec = 59;
var marks;
var hr = false;
var millisec = 100;
function call() {
    millisec--;
    if (millisec > 0) {
        if (millisec === 1) {
            millisec = 100;
            sec--;
            if (sec === 0) {
                min--;
                if (min < 0) {
                    hr = true;
                    if (hr === true) {
                        document.getElementById("timer").style.display = "none";
                        document.getElementById("non").style.display = "none";
                        document.getElementById("finish").style.display = "block";
                        question.innerHTML = "Quiz End";
                        marks = (right / questions.length) * 100;
                        if (marks > 55) {
                            document.getElementById("fo").innerHTML = "Congratulation you are passed <br> your marks is " + marks.toFixed(2) + "%";
                        }
                        else {
                            document.getElementById("fo").innerHTML = "Sorry you are Failed <br>your marks is " + marks.toFixed(2) + "%";
                        }
                    }
                }
                else {
                    sec = 59;
                }
            }




        }

    }
    else {
        millisec = 0;
    }
    document.getElementById("timer").innerHTML = pad(min) + ":" + pad(sec);

}
function pad(num) {
    return (num < 10 ? "0" : "") + num;
}
function start() {
    setInterval(call, 10);
}
start();
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option3 = document.getElementById("option2");
var option2 = document.getElementById("option3");
var option4 = document.getElementById("option4");
question.innerHTML = questions[0].question;
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option3;
option3.innerHTML = questions[0].option2;
option4.innerHTML = questions[0].option4;
var load = 0;
var right = 0;


function next() {

    var val = document.querySelector("input[name='option']:checked");
    if (val == null) {
        alert("select any option");
    }

    else {
        if (questions[load].answer === val.value) {
            console.log("right");
            right++;

        }

        else {
            console.log("wrong");
            right = right;
        }
        if (questions.length - 1 === load) {
            document.getElementById("non").style.display = "none";
            document.getElementById("timer").style.display = "none";
            document.getElementById("finish").style.display = "block";

            question.innerHTML = "Quiz End";
            marks = (right / questions.length) * 100;

            if (marks > 55) {
                document.getElementById("fo").innerHTML = "Congratulation you are passed <br> your marks is " + marks.toFixed(2) + "%";
            }
            else {
                document.getElementById("fo").innerHTML = "Sorry you are Failed <br>your marks is " + marks.toFixed(2) + "%";
            }
        }


        else {
            if (document.getElementById("rad1").checked = true) {
                document.getElementById("rad1").checked = false;
            }
            else if (document.getElementById("rad2").checked = true) {
                document.getElementById("rad2").checked = false;
            }
            else if (document.getElementById("rad3").checked = true) {
                document.getElementById("rad3").checked = false;
            }
            else if (document.getElementById("rad4").checked = true) {
                document.getElementById("rad4").checked = false;
            }


            load++;
            question.innerHTML = questions[load].question;
            option1.innerHTML = questions[load].option1;
            option2.innerHTML = questions[load].option3;
            option3.innerHTML = questions[load].option2;
            option4.innerHTML = questions[load].option4;

        }


    }
}
function finish() {
    window.location = "index.html";
}
