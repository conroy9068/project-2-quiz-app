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

The live link can be found here - https://conroy9068.github.io/project-2-quiz-app/[Font Awesome](https://fontawesome.com/)

## Credits

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

### Content

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site

Congratulations on completing your Readme, you have made another big stride in the direction of being a developer!

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work!

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write a Git Commit Message

  - Make sure to keep the messages in the imperative mood

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.

  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept.

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process!
