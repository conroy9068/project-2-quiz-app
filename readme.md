# Javascript Quiz

## Overview

This is a quiz to test your knowledge of Javascript. The quiz will increment through a total of 10 questions. Each question has a set amount of time to be answered according to the difficulty of the question. There are question about basic javascript knoledge and then there are some questions contining code that you need to study and determine the correct output. The targeted users for this app are users that want to test their javascript knowledge and have fun while doing it.

Click here to view live site - [Link](https://conroy9068.github.io/project-2-quiz-app/)

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

### Features Left to Implement

- A feature i would add is to use the localStorage of the browser to store the score in the browser.
- The feature to highlight the correct and wrong answers after the user submits their answer.
- A lifeline button that can be click once and it would remove two wrong answers to leave it 50/50
- I would like to update highlight.js and use a dark theme for the code snippets so that it would work better with the rest of the design.

## Testing

| **TEST**                 | **ACTION**                                                                                           | **EXPECTATION**                                                                                                                                                                                                                         | **RESULT**                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| Responsiveness           | Size to multiple device screens using Chrome Dev Tools                                               | Element resize and keep position                                                                                                                                                                                                        | Looks and works as expected |
| Start Button             | Clicked                                                                                              | Display the 1st quiz question and start the timer                                                                                                                                                                                       | Works as expected           |
| Answer buttons           | Clicked one answer to select it, then clicked another answer to make sure only one could be selected | Only one answer button can be selected, cliking on a second answer button will deselect the previous answer and select the newly clicked button.                                                                                        | Works as expected           |
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

### Lighthouse Results

![Desktop Lighthouse test](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/desktop-lighthouse-test.png)
![Mobile Lighthouse test](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/mobile-lighthouse-test.png)

### Figma Wireframes

I used figma to create the wireframes for this project. I created a wireframe for mobile and desktop. I used these wireframes as a guide to build the project.
![Link](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/macbook-pro-16.png)
![Link](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/iphone-8-plus.png)

### Design Choice

- I went with a style choice that matached the terminal screen design on the app iTerm on mac. It has a black background and bright green text.

### Unfixed Bugs

- hightlight.js is throwing up a deprecation warning. I left it to late to upgrade to the latest version of highlight.js.

![Link](https://github.com/conroy9068/project-2-quiz-app/blob/main/assets/images/highlight-js-warning.png)

## Deployment

# Cloning CI Template

First step was to clone the Code Institute Template.

- Navigate to this link, [Link](https://github.com/Code-Institute-Org/gitpod-full-template)
- Click on the green button that says "Use this template"
- Give the repository a name and click "Create repository from template"

# Setting up GitHub Pages

The process for setting up this site using GitHub pages was as follows:

- Log in to GitHub and locate the GitHub Repository
- At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
- On the left-hand side of the Settings page, under the code and automation section, click on "Pages".
- Under "Source", click the dropdown called "None" and select your master branch.
- On the right hand side of the page, under "Enviroments", you will see a link to the deployed site.

# Cloning the repository

- Navigate to this link, [Link](https://github.com/conroy9068/project-2-quiz-app)
- Click on the green button that says "Code"
- To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
- Open Git Bash
- Change the current working directory to the location where you want the cloned directory to be made.
- Type git clone, and then paste the URL you copied earlier.
- Press Enter. Your local clone will be created.

```
git clone
```

# Forking the repository

- Navigate to this link, [Link](https://github.com/conroy9068/project-2-quiz-app)
- Click on the Fork button in the top right corner.
- This will create a copy in your personal repository.

## Credits

- Leeds quiz app project, I used this project as a template to build my quiz app. [Link](https://github.com/andreas-ka/leeds-quiz)
- I used this youtube tutorial to desigmn the questions answers and timer. [Link](https://www.youtube.com/watch?v=dtKciwk_si4&t=4308s)

### Content

- The questions and answers where generated by chatGPT-4.

### Media

- The image used was obtained from google image under the free to use license.
