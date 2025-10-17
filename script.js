// Select all elements having class "option" (rock, paper, scissors buttons)
const options = document.querySelectorAll(".option");

// Select the div where the final message (win/lose/draw) will be displayed
const msg = document.querySelector("#finaldiv");

// Select elements where computer and user marks will be displayed
const compMarks = document.querySelector("#compMarks");
const yourMarks = document.querySelector("#yourMarks");

// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Function to display result of each round
// Parameters: userWin (boolean), user_choice_id (user's choice), compChoice (computer's choice)
const showResults = (userWin, user_choice_id, compChoice) => {
  if (userWin) {
    // If user wins → update message, background, and increment user's score
    msg.innerText = `You win! Your ${user_choice_id} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    yourMarks.innerText = userScore;
  } else {
    // If computer wins → update message, background, and increment computer's score
    msg.innerText = `You lose! ${compChoice} beats your ${user_choice_id}`;
    msg.style.backgroundColor = "darkred";
    msg.style.color = "white";
    compScore++;
    compMarks.innerText = compScore;
  }
};

// Function to display draw message when both choices are the same
const draw = (user_choice_id) => {
  msg.innerText = `Draw. You both choose ${user_choice_id}`;
  msg.style.backgroundColor = "black";
  msg.style.color = "white";
};

// Main function to handle the game logic after user clicks an option
const playGame = (user_choice_id) => {
  // Generate computer's random choice
  let compChoice = computerChoice();

  // If both choices are same → it's a draw
  if (user_choice_id === compChoice) {
    draw(user_choice_id);
  } else {
    let userWin = true;

    // Check all possible cases for user's win or loss
    if (user_choice_id === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (user_choice_id === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (user_choice_id === "scissor") {
      userWin = compChoice === "paper" ? true : false;
    }

    // Display the result based on whether the user won or lost
    showResults(userWin, user_choice_id, compChoice);
  }
};

// Function to randomly select computer's choice
const computerChoice = () => {
  const choices = ["rock", "paper", "scissor"]; // Possible choices for computer
  const randomIndex = Math.floor(Math.random() * 3); // Generate random number between 0 and 2
  return choices[randomIndex]; // Return random choice
};

// Add click event listeners to all option buttons
options.forEach((option) => {
  option.addEventListener("click", () => {
    // Get the id of the clicked option (user's choice)
    const user_choice_id = option.getAttribute("id");

    // Call main game function with user's choice
    playGame(user_choice_id);
  });
});
