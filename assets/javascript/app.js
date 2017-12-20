$(document).ready(function() {
    //Define variables
    var questions = [
      {
        question: "What is the population of Brazil?",
        choices: ["145 million", "199 million", "182 million", "205 million"],
        correctAnswer: 1
      },
      {
        question: "What is Earth's largest continent?",
        choices: ["Asia", "Europe", "Antartica", "Africa"],
        correctAnswer: 2
      },
      {
        question: "What is the busiest train station in the world?",
        choices: [
          "Grand Central, NY",
          "Shibuya, Tokyo",
          "Beijing Central, China",
          "Gard du Nord, Paris"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the longest river?",
        choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        correctAnswer: 0
      },
      {
        question: "What is the busiest tube station in the London?",
        choices: ["Victoria", "Baker Street", "Kings Cross", "Waterloo"],
        correctAnswer: 3
      },
      {
        question: "What country has the most natural lakes?",
        choices: ["United States", "Australia", "Canada", "India"],
        correctAnswer: 3
      },
      {
        question: "What is the only sea without any coasts?",
        choices: [
          "Sargasso Sea",
          "Mediterranean Sea",
          "Adriatic Sea",
          "Celebs Sea"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the only major city located on two continents?",
        choices: ["Rome", "Istanbul", "New Delhi", "London"],
        correctAnswer: 1
      },
      {
        question: "What is the oldest city in the world?",
        choices: ["Damascus", "Jericho", "Athens", "Jerusalem"],
        correctAnswer: 0
      },
      {
        question: "What is the oldest active volcano on Earth?",
        choices: ["Mount Fuji", "Mount Olympus", "Mount Etna", "Mount Yasur"],
        correctAnswer: 2
      }
    ];
  
    var currentQuestion = 0;
    var correct = 0;
    var wrong = 0;
  
   
  
    //click start to begin, displays counter
  
    $(".btn").click(function() {
      $(".start").hide();
      
      var countDown = 5;
      var counter = setInterval(timer, 1000);
      //if timer runs out, then display correct answer and add to the tally of wrong answers
      function timer() {
        countDown = countDown - 1;
        if (countDown == 0) {
          console.log("time is up");
          wrong++;
          $("button").hide();
          $(".question").html(
            "<p>Time is Up!!</p><p>The correct answer was:" +
              questions[currentQuestion].choices[
                questions[currentQuestion].correctAnswer
              ] +
              "</p>"
          );
          currentQuestion++;
          clearInterval(counter);
          reset();
        }
        $(".clock").text(countDown + " seconds");
      }
  
      //display question and answers
      $(".question").html(questions[currentQuestion].question);
      for (i = 0; i < questions[currentQuestion].choices.length; i++) {
        $(".choices").append(
          "<p><button class= btn-info value =" +
            i +
            ">" +
            questions[currentQuestion].choices[i] +
            "</p></button>"
        );
      }
      console.log(questions[currentQuestion].correctAnswer);
  
      //when user clicks an answer button, stop the timer
      $("button").click(function(e) {
        var userChoice = e.target.value;
        console.log(userChoice);
        clearInterval(counter);
  
        if (questions[currentQuestion].correctAnswer == userChoice) {
          console.log("right!");
          correct++;
          $("button").hide();
          $(".question").html("<p>Correct!</p>");
          currentQuestion++;
          reset();
        } else {
          console.log("wrong");
          wrong++;
          $("button").hide();
          $(".question").html(
            "<p>Wrong!</p><p>The correct answer was:" +
              questions[currentQuestion].choices[
                questions[currentQuestion].correctAnswer
              ] +
              "</p>"
          );
          currentQuestion++;
          reset();
        }
      });
    });
  });
  
