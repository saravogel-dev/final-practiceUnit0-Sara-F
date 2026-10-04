//LaunchCode Unit 0 Final Practice
//Dream Application
//Speech Buddy: An app where young kids with Down syndrome practice saying words and earn stars.

// EXAMPLE 1: Daily word list and star counter
// PSEUDOCODE:
// 1. Store the child's name, stars earned, and a goal of stars per day
// 2. Add a new star
// 3. Work out how many stars are left to reach today's goal
// 4. Print a summary
// SKILL (Values, Data Types, and Operations):
// strings, numbers, and a boolean are stored in variables with const/let, and the math operators + and - update and compare the star count.

const childName = "Alice"; //Store the child's name
let starsEarned = 2; //Stars earned
const dailyGoal = 5; //Daily Goal of earning stars
let goalReached = false;
 
starsEarned = starsEarned + 1; //Add a new star since the kid hasn't reached the goal
const starsLeft = dailyGoal - starsEarned; //Work out how many stars are left to reach today's goal
goalReached = starsEarned >= dailyGoal; //Compare stars earned to the daily goal
 
console.log("Stars earned:", starsEarned);
console.log("Stars left for today's goal:", starsLeft);
console.log("Goal reached?", goalReached);

//==============================================================================================================

// EXAMPLE 2: Friendly messages for the child
// PSEUDOCODE:
// 1. Take the word the child practiced
// 2. Build a cheerful message using the child's name and the word
// 3. Show the first letter and how many letters the word has so a parent can point at the letters
 
const practicedWord = "banana"; // Take the word the child practiced
 
// SKILL (Stringing Characters Together):
// a template literal builds the message, and string methods/properties
// (.toUpperCase(), .length, [0] index) work with the characters.
const cheerMessage = `Great job, ${childName}! You said "${practicedWord}"!`; //Build a cheerful message using the child's name and the word
const firstLetter = practicedWord[0].toUpperCase(); //Show the first letter and how many letters the word has
const letterCount = practicedWord.length;
 
console.log(cheerMessage);
console.log(`It starts with ${firstLetter} and has ${letterCount} letters.`); //    so a parent can point at the letters

//==============================================================================================================

// EXAMPLE 3: Decide how many stars a try earns
// PSEUDOCODE:
// 1. Get a score from 0 to 100 for how close the child's sound was
// 2. If the score is 80 or more, award 3 stars
// 3. Else if it is 50 or more, award 2 stars
// 4. Else award 1 star (every try gets encouragement!)
 
const attemptScore = 65; // Get a score from 0 to 100 for how close the child's sound was
let starsForAttempt; 
 
// SKILL (Control Structures and Logic):
// if / else if / else chooses one path, using comparison operators (>=).

if (attemptScore >= 80) { 
  starsForAttempt = 3; // If the score is 80 or more, award 3 stars
} else if (attemptScore >= 50) {
  starsForAttempt = 2; // Else if it is 50 or more, award 2 stars
} else {
  starsForAttempt = 1; // Else award 1 star (every try gets encouragement!)
}
 
console.log("Stars for this try:", starsForAttempt);

//==============================================================================================================
// EXAMPLE 4: Build the practice word list
// PSEUDOCODE:
// 1. Start with an array of easy first words
// 2. Add a new word a parent chose
// 3. Add a new word to the front of the list
// 4. Print the list

// SKILL (Building Arrays):
// an array literal holds the words, and .push() / .unshift()
// add items to the end and the beginning.

const practiceWords = ["mama", "ball", "dog", "milk"]; //Start with an array of easy first words
practiceWords.push("banana"); //Add a new word a parent chose
practiceWords.unshift("hi"); //Add a new word to the front of the list
 
console.log("Practice words:", practiceWords); //Print the list
//==============================================================================================================
// EXAMPLE 5: Pick today's word and remove it once mastered 
// PSEUDOCODE:
// 1. Get the first word in the list as today's word
// 2. Find the position of the word "dog"
// 3. Remove it from the list because the child has mastered it
// 4. Print the new list and its length
 
// SKILL (Using Arrays):
// index access [0], .indexOf() to find a position,
// .splice() to remove an item, and .length to count items.
const todaysWord = practiceWords[0]; //Get the first word in the list as today's word
const dogIndex = practiceWords.indexOf("dog"); //Find the position of the word "dog"
practiceWords.splice(dogIndex, 1); //Remove it from the list because the child has mastered it
 
console.log("Today's word:", todaysWord);
console.log("Words left to practice:", practiceWords.length, practiceWords); //Print the new list and its length

//==============================================================================================================
//EXAMPLE 6: Show a progress report for each word
// PSEUDOCODE:
// 1. Make an array of how many times the child tried each word
// 2. Loop through every word in the practice list
// 3. For each word, print the word and its number of tries
// 4. Add the tries together to get a total

const triesPerWord = [4, 2, 5, 1, 3]; //Make an array of how many times the child tried each word
let totalTries = 0;
 
// SKILL (Working With Loops):
// a for loop uses a counter (i) to visit every array index,
// and += keeps a running total across the loop.
for (let i = 0; i < practiceWords.length; i++) { //Loop through every word in the practice list
  console.log(`${practiceWords[i]}: tried ${triesPerWord[i]} times`); //For each word, print the word and its number of tries
  totalTries += triesPerWord[i];
} 
 
console.log("Total tries today:", totalTries); //Add the tries together to get a total


//==============================================================================================================
 

