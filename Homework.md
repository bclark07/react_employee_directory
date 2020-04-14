# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

- As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render.

The user should be able to:

- Sort the table by at least one category

- Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

- Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

- Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

- Don't commit half done work, for the sake of your collaborators (and your future self!)

- Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

- the URL to the deployed application

- the URL to the Github repository

Demonstration of HW: https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a531ea75-f099-4b57-a7fb-ab7e010d7276
@1:37, 1:33 left

How to make a loop:
map over an array and return a new array:
const people = ["one", "two"] OR import an array from another file?
{people.map((person, index) => (

<div>Testing Person: {index}</div>
))}

api: https://randomuser.me/api/?results=200&nat=us

https://randomuser.me/api/?results=20&nat=us

Since the new user api doesnt return images you could do something like this to add random profile pics to all the users with the https://jsonplaceholder.typicode.com/users API: (edited)

let count = 0;
let usersWithPics = res.map(user => {
count++;
return {
...user,
pic: `https://i.pravatar.cc/90?random=${count}`
};
});

Dont feel like you have to do this just a way to add a random placeholder pic right after the api call and before setting the state with the users