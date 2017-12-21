$(document).ready(function() {
  //Define variables
  var questions = [
    {
      question: "What is the population of Brazil?",
      choices: ["145 million", "199 million", "182 million", "205 million"],
      correctAnswer: 1,
      img:
        "<img src= 'http://assets.sbnation.com/assets/2860717/neymarstrikes.gif'>"
    },
    {
      question: "What is Earth's largest continent?",
      choices: ["Asia", "Europe", "Antartica", "Africa"],
      correctAnswer: 0,
      img:
        "<img src= 'http://freedesignfile.com/upload/2016/07/Asia-map-with-infographic-vector.jpg'>"
    },
    {
      question: "What is the busiest train station in the world?",
      choices: [
        "Grand Central, NY",
        "Shibuya, Tokyo",
        "Beijing Central, China",
        "Gard du Nord, Paris"
      ],
      correctAnswer: 1,
      img:
        "<img src= 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/8/28/15/anigif_enhanced-buzz-19577-1377717795-8.gif'>"
    },
    {
      question: "Which is the longest river?",
      choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
      correctAnswer: 0,
      img:
        "<img src= 'https://www.internationalrivers.org/sites/default/files/images/blog_entry/Sarah%20Bardeen/nile_night.jpg'>"
    },
    {
      question:
        "What is the largest country in the world in terms of land area??",
      choices: ["Canada", "China", "Russia", "United States"],
      correctAnswer: 2,
      img: "<img src= 'https://i.giphy.com/media/IBWvS5HrS9iIo/giphy.webp'>"
    },
    {
      question: "What country has the most natural lakes?",
      choices: ["United States", "Australia", "Canada", "India"],
      correctAnswer: 2,
      img: "<img src= 'https://i.giphy.com/media/l0Ex0GiS5QZSrMO6k/giphy.webp'>"
    },
    {
      question: "What is the only sea without any coasts?",
      choices: ["Sargasso Sea", "Mediterranean Sea","Adriatic Sea", "Celebs Sea"],
      correctAnswer: 0,
      img: "<img src= 'https://www.bibliotecapleyades.net/imagenes_misterios/bermuda_sargasso.jpg'>"
    },
    {
      question: "What is the only major city located on two continents?",
      choices: ["Rome", "Istanbul", "New Delhi", "London"],
      correctAnswer: 1,
      img:
        "<img src= 'https://78.media.tumblr.com/fb0818155c590fc524e2a5d38bcb7d70/tumblr_o3mdrebeB71s22rc8o1_500.gif'>"
    },
    {
      question: "In which royal palace would you find the Hall of Mirrors?",
      choices: ["The Palace of Versailles", "Buckingham Palace", "Winter Palace", "Palazzo Pitti"],
      correctAnswer: 0,
      img:
        "<img src= 'https://www.thegoodlifefrance.com/wp-content/uploads/2015/09/Versailles.gif'>"
    },
    {
      question: "What is the oldest active volcano on Earth?",
      choices: ["Mount Fuji", "Mount Olympus", "Mount Etna", "Mount Yasur"],
      correctAnswer: 2,
      img: "<img src= 'https://i.giphy.com/media/r5gHt2TCIiHK0/giphy.webp'>"
    }
  ];

  var currentQuestion = 0;
  var correct = 0;
  var wrong = 0;

  function reset() {
    var countDown = 11;
    var counter = setInterval(timer, 1000);
    //if timer runs out, then display correct answer and add to the tally of wrong answers
    function timer() {
      countDown = countDown - 1;
      if (countDown == 0) {
        wrong++;
        $("button").hide();
        $(".question").html(
          "<p>Time is Up!!</p><p>The correct answer was: " +
            questions[currentQuestion].choices[
              questions[currentQuestion].correctAnswer
            ] +
            "</p>"
        );
        currentQuestion++;
        clearInterval(counter);
         setTimeout(reset, 6000);
      }
      $(".clock").text(countDown + " seconds");
    }

    //display question and answers
    if (currentQuestion !== questions.length) {
      $(".question").html(questions[currentQuestion].question);
      for (i = 0; i < questions[currentQuestion].choices.length; i++) {
        $(".choices").append(
          "<p><button class= btn-warning value =" +
            i +
            ">" +
            questions[currentQuestion].choices[i] +
            "</p></button>"
        );
      }
    } else {
      $(".clock").empty();
      $(".question").html(
        "<p>All done, here is how you did:</p><p>Correct Answers: " +
          correct +
          "</p><p> Incorrect Answers: " +
          wrong +
          "</p>"
      );
      clearInterval(counter);
    //   $(".choices").html(
    //     "<button type='button' class='btn btn-warning btn-lg'>Start Over?</button>");
    //     $("button").click(function() {
    //         $("button").hide()    
    //     });
        
    }

    //when user clicks an answer button, stop the timer
    $("button").click(function(e) {
      var userChoice = e.target.value;
      clearInterval(counter);

      if (questions[currentQuestion].correctAnswer == userChoice) {
        correct++;
        $("button").hide();
        $(".question").html(
          "<p>Correct!</p><p>" + questions[currentQuestion].img + "</p>"
        );
        currentQuestion++;
         setTimeout(reset, 6000);
      } else {
        wrong++;
        $("button").hide();
        $(".question").html(
          "<p>Wrong!</p><p>The correct answer was:" +
            questions[currentQuestion].choices[
              questions[currentQuestion].correctAnswer
            ] +
            "</p><p>" +
            questions[currentQuestion].img +
            "</p>"
        );

        currentQuestion++;
         setTimeout(reset, 6000);
      }
    });
  }

  //click start to begin, displays counter

  $(".btn").click(function() {
    $(".start").hide();
    

    var countDown = 11;
    var counter = setInterval(timer, 1000);
    //if timer runs out, then display correct answer and add to the tally of wrong answers
    function timer() {
      countDown = countDown - 1;
      if (countDown == 0) {
        wrong++;
        $("button").hide();
        $(".question").html(
          "<p>Time is Up!!</p><p>The correct answer was: " +
            questions[currentQuestion].choices[
              questions[currentQuestion].correctAnswer
            ] +
            "</p><p>" +
            questions[currentQuestion].img +
            "</p>"
        );
        currentQuestion++;
        clearInterval(counter);
         setTimeout(reset, 6000);
      }
      $(".clock").text(countDown + " seconds");
    }
    $(".question").html(questions[currentQuestion].question);
    for (i = 0; i < questions[currentQuestion].choices.length; i++) {
      $(".choices").append(
        "<p><button class= btn-warning value =" +
          i +
          ">" +
          questions[currentQuestion].choices[i] +
          "</p></button>"
      );
    }

    //when user clicks an answer button, stop the timer
    $("button").click(function(e) {
      var userChoice = e.target.value;
      clearInterval(counter);

      if (questions[currentQuestion].correctAnswer == userChoice) {
        correct++;
        $("button").hide();
        $(".question").html(
          "<p>Correct!</p><p>" + questions[currentQuestion].img + "</p>"
        );
        currentQuestion++;
         setTimeout(reset, 6000);
      } else {
        wrong++;
        $("button").hide();
        $(".question").html(
          "<p>Wrong!</p><p>The correct answer was: " +
            questions[currentQuestion].choices[
              questions[currentQuestion].correctAnswer
            ] +
            "</p><p>" +
            questions[currentQuestion].img +
            "</p>"
        );

        currentQuestion++;
         setTimeout(reset, 6000);
      }
    });
  });
});
