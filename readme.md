# Javascript Quiz

## Overview

This is a quiz to test your knowledge of Javascript. The quiz will increment through a total of 10 questions. Each question has a set amount of time to be answered according to the difficulty of the question. There are question about basic javascript knoledge and then there are some questions contining code that you need to study and determine the correct output. The targeted users for this app are users that want to test their javascript knowledge and have fun while doing it.

![App displayed on various devices](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/am-i-responsive.png)

## Features

- Timer: Each question is time-bound. The time given depends on the difficulty level of the question.
  ![Timer and Question Counter](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/timer-question-counter.png)

- Question Counter: A counter displaying the current question number and total amount of questions.
  ![Timer and Question Counter](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/timer-question-counter.png)

- Code Snippets: Some questions include JavaScript code snippets for users to read and understand to answer the question correctly.
  ![Code snippets being displayed](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/code-snippet.png)

- Quiz Rules: Rules for the quiz are provided before the start of the quiz.
  ![Quiz start screen with rules](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/quiz-start-screen.png)

- Score Display: User's score is updated and displayed in real time.
  ![Score counter](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/score-counter.png)

- Responsive Design: The web page is designed to be viewed on screens of various sizes.
  ![App displayed on various devices](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/am-i-responsive.png)

### Existing Features

- A feature i would add is to use the localStorage of the browser to store the score in the browser.

### Features Left to Implement

- The feature to highlight the correct and wrong answers after the user submits their answer.
- A lifeline button that can be click once and it would remove two wrong answers to leave it 50/50

## Testing

| **TEST**                 | **ACTION**                                                                                           | **EXPECTATION**                                                                                                                                                                                                                         | **RESULT**                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Responsiveness           | Size to multiple device screens using Chrome Dev Tools                                               | Element resize and keep position                                                                                                                                                                                                        | Looks and works as expected |
| Start Button             | Clicked                                                                                              | Display the 1st quiz question and start the timer                                                                                                                                                                                       | Works as expected           |
| Answer buttons           | Clicked one answer to select it, then clicked another answer to make sure only one could be selected |                                                                                                                                                                                                                                         | Works as expected           |
| Submit button            | Click submit answer                                                                                  | The selected answer is check to see if correct and if depending on result user gets alert notifying them if answer is correct or incorrect, it then moves onto the next question                                                        | Works as expected           |
| Restart button           | Click Restart button                                                                                 | It will reset the quiz removing all the previous stats and go back to question one to start the quiz again                                                                                                                              | Works as expected           |
| Footer Icon              | Click icon                                                                                           | It will open the MDN website page in new tab explaining more about javascript                                                                                                                                                           | Works as expected           |
| Score & Question Counter | Answered questions                                                                                   | After answering a correct question the score counter will inrement by +1. Answering a question wrong will not cause the score counter to increment. The question counter will increment by +1 every time the user submits their answer. | Works as expected           |
| Timer                    | Start quiz                                                                                           | The timer amount should be whats set in the quiz data questions value timer.                                                                                                                                                            | Works as expected           |

### Validator Testing

- ## HTML

  ![HTML Validation test](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/html-validation.png)

- ## CSS
  ![CSS Validation test](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/css-validation.png)

### Unfixed Bugs

## Deployment

The process for setting up this site using GitHub pages was as follows:

- Log in to GitHub and locate the GitHub Repository
- At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
- On the left-hand side of the Settings page, under the code and automation section, click on "Pages".
- Under "Source", click the dropdown called "None" and select your master branch.
- On the right hand side of the page, under "Enviroments", you will see a link to the deployed site.

The live link can be found here - [Link](https://conroy9068.github.io/project-2-quiz-app/)

## Credits

- Leeds quiz app project, I used this project as a template to build my quiz app. [Link](https://github.com/andreas-ka/leeds-quiz)
- I used this youtube tutorial to desigmn the questions answers and timer. [Link](https://www.youtube.com/watch?v=dtKciwk_si4&t=4308s)

### Content

- The questions and answers where generated by chatGPT-4.

### Media

- The image used was obtained from google image under the free to use license.
