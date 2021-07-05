## Benky

A studying tool designed to help students in need.

### Purpose

As students get increasingly stressed, productivity sites and apps have been on the rise. Developers are scrambling to create effective productivity applications with a minimal, refreshing design to attract users. To compensate for the heavy amount of learning that is experienced in the classroom, flashcards have been a popular method of reviewing content learned in class.
However, flashcards are expensive and wasteful. They may be used once, and then stored and forgotten about. **benky** serves as an online platform for students to be able to study without needing to spend the money and paper for an actual flashcard.

### Technologies Used

#### Frontend
* React.JS
* Material UI

#### Backend
* Node.JS
* Express.JS
* MongoDB
* Firebase

### Overview

1. The user can create a new set, where he/she will define the title and the terms and definitions of their items. The title, terms, and definitions can be edited if necessary.
<img src="/client/public/assets/create.jpg" alt="drawing" width="350"/>

2. The user can then practice the set using a online flashcard-like system. This can save paper and can help create a pleasant studying experience.
<img src="/client/public/assets/practice.jpg" alt="drawing" width="350"/>

3. The user can finally test their knowledge by ensuring that they can connect a particular term to its correct definition. After taking the test, the user can view their results, find out their mistakes, and continue practicing or retake the test.
<img src="/client/public/assets/testresults.jpg" alt="drawing" width="350"/>

4. In addition to the mentioned features, benky uses authentification - thus, sets and test results are connected to an email. Authentification for this application is managed using Firebase.
