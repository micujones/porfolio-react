// Thumbnails
import mwlThumbnail from '/work-thumbnails/thumbnail-mostwatchedlist.png';
import chatThumbnail from '/work-thumbnails/thumbnail-chat.png';
import meetThumbnail from '/work-thumbnails/thumbnail-meet.png';
import pokedexThumbnail from '/work-thumbnails/thumbnail-pokedex.png';
import movieApiThumbnail from '/screenshot_movie-api_documentation.png';

let projectObjectTemplate = {
    id: null,
    title: '',
    description: '',
    image: '',
    liveLink: '',
    githubLink: '',
    tools: [],
    additionalRemarks: '',
    gallery: [{ description: '', url: '' }],
};

// TOOLS OBJECTS

const angular = {
    name: 'Angular',
    link: 'https://angular.dev/overview',
    badge: 'https://img.shields.io/badge/Angular-0d0d0e?style=flat-square&logo=angular&logoColor=cb0025',
};

const angularMaterial = {
    name: 'Angular Material',
    link: 'https://material.angular.dev/',
    badge: 'https://img.shields.io/badge/Angular_Material-cedcfe?style=flat-square&logo=angular&logoColor=0847ad',
};

const awsLambda = {
    name: 'AWS Lambda',
    link: 'https://aws.amazon.com/lambda/?p=pm&c=la&z=4&refid=79c0db49-a2f5-438f-a757-26c3de2a4e4f',
    badge: 'https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat-square&logo=amazon-web-services&logoColor=white',
};

const bootstrap = {
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    badge: 'https://img.shields.io/badge/bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=ffffff',
};

const expo = {
    name: 'Expo',
    link: 'https://docs.expo.dev/',
    badge: 'https://img.shields.io/badge/Expo-1C2024?style=flat-square&logo=expo&logoColor=ffffff',
};

const express = {
    name: 'Express',
    link: 'https://expressjs.com/',
    badge: 'https://img.shields.io/badge/Express-000000?style=flat-square&logo=express',
};

const firebase = {
    name: 'Firebase',
    link: 'https://firebase.google.com/',
    badge: 'https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=ffffff',
};

const giftedChat = {
    ame: 'GitHub Pages',
    link: 'https://docs.github.com/en/pages/quickstart',
    badge: 'https://img.shields.io/badge/Gifted_Chat-181717?style=flat-square&logo=github&logoColor=ffffff',
};
const githubPages = {
    name: 'GitHub Pages',
    link: 'https://docs.github.com/en/pages/quickstart',
    badge: 'https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github%20pages&logoColor=ffffff',
};

const googleCalendar = {
    name: 'Google Calendar API',
    link: 'https://developers.google.com/workspace/calendar/api/guides/overview',
    badge: 'https://img.shields.io/badge/Google%20Calendar%20API-4285F4?style=flat-square&logo=google%20calendar&logoColor=ffffff',
};
const heroku = {
    name: 'Heroku',
    link: 'https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true',
    badge: 'https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=heroku&logoColor=ffffff',
};

const jest = {
    name: 'Jest',
    link: 'https://testing-library.com/docs/react-testing-library/intro/',
    badge: 'https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest',
};

const jQuery = {
    name: 'jQuery',
    link: 'https://jquery.com/',
    badge: 'https://img.shields.io/badge/jQuery-%230769AD?style=flat-square&logo=jQuery&logoColor=ffffff',
};

const mongoDB = {
    name: 'MongoDB',
    link: '',
    badge: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=ffffff',
};

const mongoose = {
    name: 'Mongoose',
    link: '',
    badge: 'https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=ffffff',
};

const movieApi = {
    name: 'Movie API',
    link: 'https://github.com/micujones/movie_api',
    badge: 'https://img.shields.io/badge/Movie_API-181717?style=flat-square&logo=github&logoColor=ffffff',
};

const nodeJs = {
    name: 'Node.js',
    link: 'https://nodejs.org/en/download',
    badge: 'https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=node.js&logoColor=ffffff',
};

const oAuth = {
    name: 'OAuth2',
    link: 'https://developers.google.com/identity/protocols/oauth2',
    badge: 'https://img.shields.io/badge/OAuth2-4285F4?style=flat-square&logo=google%20cloud&logoColor=ffffff',
};

const passport = {
    name: 'Passport',
    link: 'https://www.passportjs.org/docs/',
    badge: 'https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=passport&logoColor=000000',
};

const pokeApi = {
    name: 'PokeAPI',
    link: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
    badge: 'https://img.shields.io/badge/PokeAPI-4287f5?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMCAwIDc1IDMwIiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Ik0xLjIxIDBoNzIuNTh2MjlIMS4yMVptMCAwIi8%2BPC9jbGlwUGF0aD48L2RlZnM%2BPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik00NC4yMy4xNTZjLS42MDEuNDA2LTUuNDAyIDYuMjI3LTUuNDAyIDYuNTQ3IDAgLjIwMy4xMTcuNDg4LjI1OC42MjkuMjAzLjIwNy4xNzIuMzItLjE1Ni41NjYtMS4wMi43NzQtLjk4NS43ODYtMy4yNDYtMS4yNTMtMS4xOC0xLjA2Ny0yLjI5LTEuOTQyLTIuNDYxLTEuOTQyLS4xNzIgMC0uNDczLjI5Ny0uNjcyLjY2NGwtLjM2LjY2NC0uMDY2LS41NDNjLS4wNC0uMy0uMTc2LS41OS0uMzA5LS42NC0uMjY1LS4xMDItNy4zNzUgMi4xMDktNy42NCAyLjM3OS0uMjM4LjIzOC0uMDcgNC4wNy4xOTEgNC4zOS4xMy4xNTYuNDE4LjIxOS42OTUuMTQ5LjM2OC0uMDk0LjQ3Ny0uMDM2LjQ3Ny4yNSAwIC4zMjQtLjE1Ni4zNTktMS4zOS4yODktMS4yNTgtLjA3LTIuMTUzLjA2Mi0zLjE1Ny40NzItLjMwOC4xMjUtLjM2LjAyNC0uMzYtLjc1NCAwLTEuOTc2LTEuNzI2LTQuMTQ4LTQuMjU3LTUuMzQzLTEuMzQtLjYzNy0xLjQyMi0uNjQ5LTQuMjI3LS42MzMtMi41NS4wMTYtMy4wNS4wODItNC42MDEuNTktMi41NzguODQtNS45NjEgMi42MzYtNi4yMTEgMy4yOTMtLjE0NS4zNzUuMDk4Ljg4MyAxLjg3MSAzLjg3IDEuNTU1IDIuNjMgMS43MyAyLjgxIDIuNDUzIDIuNTM2LjI5LS4xMS41OS0uMTI1LjY2OC0uMDQuMDgyLjA5IDEuMzIgMi44MjkgMi43NTQgNi4wOSAxLjQzIDMuMjYyIDIuNzcgNi4xMDYgMi45NzcgNi4zMjUuMzcuMzg3LjQxOC4zNzkgMy4wMi0uNDYxIDEuNDUyLS40NzMgMi43NjUtMS4wMDQgMi45MTctMS4xODQuMjMtLjI4LjE1Ni0uNzg5LS40ODgtMy4zMjQtLjk3My0zLjgxNi0xLjA2My00LjI2Mi0uNTgyLTIuOTE4LjU1OCAxLjU2NyAxLjQ0NSAyLjY3NiAyLjY5MSAzLjM4Ljk1My41MzggMS4yOS42MTYgMi43MzguNjIgMS40NTQuMDA4IDEuODAxLS4wNjYgMi45My0uNjM3bDEuMjc3LS42NDR2LjU4NmMwIC44Mi41MjggMS4yODUgMS4zMSAxLjE0NGE5OS44IDk5LjggMCAwIDEgMi40NzItLjM1MWMxLjAxMS0uMTMzIDEuOTU3LS4zMzIgMi4wOTctLjQ0Mi4xNzItLjEzNi4yNTQtLjgyOC4yNTQtMi4xMTcgMC0xLjEzNi4wODItMS45MTguMjAzLTEuOTE4LjExNCAwIDIuMzUyIDEuMDc1IDQuOTggMi4zODcgMi45OTcgMS40OTYgNC45IDIuMzM2IDUuMTEgMi4yNTQuMjMtLjA5LjM0LS4zNzUuMzQtLjkwMnYtLjc3NGwzLjIxOS0uMDYyYzEuNzczLS4wMzUgMy4zOS0uMTE0IDMuNjAxLS4xNzYuMjUtLjA3NC45MDMtMS4xOTUgMS44ODctMy4yNTguODI4LTEuNzM0IDEuNTQzLTMuMTQ4IDEuNTktMy4xNDguMDQ3IDAgLjg5OCAxLjg5NCAxLjg5IDQuMjE0Ljk5MyAyLjMxNyAxLjkyNiA0LjI2MiAyLjA3OSA0LjMyLjE0OC4wNTUgMS41MjMtLjAyMyAzLjA1LS4xNzkgMy40MS0uMzQ0IDMuNDUtLjM3OSAyLjYxOC0yLjM0NC0uNTU1LTEuMzA0LS41NjctMS4zOTQtLjIyMy0xLjYwMSAyLjUwOC0xLjQ5NiAyLjM4Ny0xLjIgMS43NTgtNC40NDItLjM2LTEuODY3LS4zNzEtMi4xMjktLjA5OC0yLjQzMy40MzgtLjQ4IDEuNjg4LTEuMTI1IDEuODU2LS45NTMuMDc4LjA3OC0uMDcgMS42NTYtLjMyOCAzLjUxMS0uMzYgMi41NjctLjQxNSAzLjQzOC0uMjM1IDMuNjUzLjE1My4xODMgMS4xMDYuMzcgMi42OTIuNTMxIDIuNDguMjQ2IDMuMjYxLjE4NyAzLjI3My0uMjU0LjAwNC0uMTMzLjA5NC0uOTMuMjA3LTEuNzczLjExLS44NDQuMzk1LTMuNDIyLjYzMy01LjcyN2wuNTI3LTUuMTFjLjM2LTMuNDQuMzY3LTMuMzc4LS40OTYtNC4zMDQtMS42MS0xLjcyNy00LjI1LTEuMzM2LTUgLjczNGwtLjIzNC42NTctMS4xNDUtLjU0Yy0xLjA1LS40OTItMS4zNi0uNTM1LTMuOC0uNTM1LTIuMDgzIDAtMy4wNy4xMDItNC41Ni40Ny0xLjA0Mi4yNTctMS45NzIuNDE3LTIuMDcuMzU5LS4wOTMtLjA2LS40NjgtLjgzNi0uODI4LTEuNzMtLjYzNi0xLjU4Ny0uOTQ1LTEuOTU4LTEuMzg2LTEuNjg1LS4xMTcuMDctMS4xNzIgMi4wMzYtMi4zNDQgNC4zNmwtMi4xMjUgNC4yMy0uODk1LTEuMDM5Yy0uNjM2LS43MzgtMS4yOTYtMS4yMjYtMi4yODUtMS42OGwtMS4zODYtLjY0NCAxLjUyNy0uNzU4YzEuMjQyLS42MTMgMS41MjMtLjg0IDEuNTEyLTEuMjE5LS4wMTItLjQ3Mi0yLjc4Ni00LjY4My0zLjE1My00Ljc4OWEuNjA1LjYwNSAwIDAgMC0uNDI2LjA5bS0xLjU3IDQuMzI4Yy0xLjMyNCAxLjU1OS0xLjYxIDIuMDU5LTEuMTc2IDIuMDU5LjQzNCAwIDQuMDktMS45NDUgNC4wOS0yLjE3NiAwLS4zNC0xLjAwNC0xLjUwNC0xLjI5Ny0xLjUwNC0uMTI5IDAtLjg1OS43My0xLjYxNyAxLjYyMW0yNy4xMjEtLjAzNWMtLjM1NS4yNDItLjY5MSAxLS42OTEgMS41NyAwIDEuMjg2IDEuODI0IDEuODQgMi42NC44MDEuMjM1LS4yOTcuNDI2LS43NTguNDI2LTEuMDMgMC0uOTctMS41OS0xLjg2NC0yLjM3NS0xLjM0TTUxLjU1NSA5LjUwN2MtMS4yNjYgMi41MzEtMi4yOTcgNC42OTktMi4yOTcgNC44MiAwIC4xMTcuMTM3LjM1Ni4zMDQuNTI0LjU0LjUzOS4zNC45NTctMS4xMTMgMi4zNTEtLjk4NC45NS0xLjY0IDEuODA1LTIuMTQ0IDIuODA5LS40MDMuNzk3LS43MyAxLjUxNS0uNzMgMS42MDUgMCAuMDg2Ljg1LjExIDEuODkuMDU1bDEuODk0LS4xMDIuNjY4LTEuMzI4Yy4zNjgtLjczIDEuMTA2LTIuMjUgMS42MzctMy4zNzVsLjk2OS0yLjA0My45MTguMDdjLjUwNC4wMzYgMS4wMjcuMTU3IDEuMTU2LjI2Ni4xMzMuMTA2IDEuMDM1IDIuMDc0IDIuMDEyIDQuMzcxbDEuNzczIDQuMTc2IDEuMjU4LS4xMTNjMS43NS0uMTYgMS44NC0uMjAzIDEuNjkxLS43OTctLjA3LS4yNzctMS4xMjUtMi44NzUtMi4zNC01Ljc3NGEyMjExLjg2NiAyMjExLjg2NiAwIDAgMS0zLjYyLTguNjkxYy0uNzgyLTEuODgzLTEuNDY1LTMuNDI2LTEuNTI0LTMuNDI2LS4wNTkgMC0xLjE0IDIuMDctMi40MDIgNC42MDJtNy4yNjEtMy4zOWMtLjg3LjE5NC0xLjYyNS4zOTgtMS42OC40NDgtLjA5LjA5NC42NjkgMy4yNzguODIxIDMuNDMuMDQzLjA0My4yMjMtLjAzOS4zOTgtLjE4NC4xNzItLjE0NC4zNzItLjIwMy40NDYtLjEzMi4wNy4wNy41MjMgMS44MDggMS4wMTEgMy44NiAxLjA2IDQuNDY4IDEuNDkzIDUuODkgMS44MjUgNi4wMTkuNDM3LjE2OCAxLjcyNi0uNDk3IDEuNzMtLjg5MSAwLS4yMDMtLjE2LTEuMzc1LS4zNTUtMi42MDJsLS4zNTItMi4yMy44MTMtLjYyNWMxLjMtMS4wMDQgMy40OTItMy4yNjIgMy44NjMtMy45ODQuNjU2LTEuMjY2LS4yMzQtMi42NjUtMi4wNC0zLjIwNy0xLjMxMi0uMzk1LTQuNTAzLS4zNDgtNi40OC4wOTdtLTMwLjkyNSAxLjgyYy0xLjcxNS41MTItMS44NDQuNTktMS45MDcgMS4xMy0uMDYyLjU1LS4wMzUuNTc0LjU2My40NDUuNjAxLS4xMzMuNjI5LS4xMS42NC41NDMuMDQzIDIuMzEyLjM1MiAzLjk3Ni44NzIgNC43NDIgMS4wNDYgMS41MjcgMS4yMTQgMy4xNjguNTM1IDUuMTgtLjI2Mi43NzMtLjM5NSAxLjYyNS0uMzU2IDIuMjM4LjA2NyAxLjA5LjA2MyAxLjA5IDEuOTUzLjc3N2wuNjY0LS4xMTN2LTIuNjEzYzAtMS40MzguMDU1LTIuNjcyLjEyNS0yLjczOS4wNy0uMDcgMi40MTUgMS4wMiA1LjIxMSAyLjQxOCAyLjgwMSAxLjM5OSA1LjE0MSAyLjU0MyA1LjIgMi41NDMuMDYyIDAgLjA4Ni0uNjA1LjA1NC0xLjM1MWwtLjA2Mi0xLjM1Mi0xLjE4OC0uMzY3Yy0xLjE4Ny0uMzY3LTIuNzk3LTEuMjg1LTIuNzk3LTEuNTk0IDAtLjUyNy0xLjQwMi0xLjQ4OC0zLjA3LTIuMTA1LTEuMDEyLS4zNzUtMS44MzYtLjczLTEuODM2LS43OSAwLS4wNjIuOTU3LTEuMTI4IDIuMTMzLTIuMzc0bDIuMTMzLTIuMjY2LTEuNTI4LTEuNTE2Yy0uOTYtLjk1My0xLjU4Mi0xLjQzLTEuNjcxLTEuMjg1LS43MTEgMS4xMTQtMi44MTMgMy45NjEtMi45MjYgMy45NjEtLjIzNSAwLS4zODctLjg1MS0uMzg3LTIuMTgtLjAwNC0xLjI2MS0uMTM3LTEuOTIxLS4zODMtMS44OTgtLjA3NC4wMDgtLjk2LjI2Mi0xLjk3Mi41NjZtLTE2Ljg4Ny4wMzJjLTIuMDA0LjI1LTMuNzA3LjczNC01LjM1NiAxLjUyLTIuMjM4IDEuMDY2LTIuMTU2Ljg4Mi0xLjE2IDIuNiAxLjIzIDIuMTM0IDEuMTQ1IDIuMDU2IDEuOTQyIDEuNzIuNTItLjIxNS43My0uMjI3Ljg3LS4wNDMuMjEyLjI3IDIuMTMgNC41MDQgNC4zNDggOS41OTMuODIgMS44ODMgMS41ODIgMy40MjYgMS42OTIgMy40MjYuNDQxIDAgMi41OS0uODg3IDIuNTktMS4wNyAwLS4xMS0uMzItMS41MzEtLjcxNS0zLjE2NC0uMzk1LTEuNjMzLS43MTUtMy4xMzMtLjcxNS0zLjMzMiAwLS4yLjIxLS41LjQ2NS0uNjY4Ljc4MS0uNTEyIDIuNDA2LTIuMjQ2IDIuOTE0LTMuMTEzIDEuMDktMS44NTYgMS4wNDctNC4wNTUtLjEwMi01LjQ1LTEuMzc5LTEuNjcyLTMuOC0yLjM5NC02Ljc3My0yLjAybTI5Ljc0MiAxLjE0NWMtMS45ODQuNzI3LTMuMzUxIDIuNjA2LTMuMzQ0IDQuNTk4LjAwOCAxLjk2NSAxLjIxMSAzLjcwMyAyLjk3IDQuMjg1IDEuMjMuNDA2IDMuODYyLjE3MiA1LjI1My0uNDY1IDEuMTkxLS41NDcgMi42MS0xLjUxMSAyLjYxLTEuNzgxIDAtLjA4Mi0uNDczLS41NDctMS4wNDctMS4wMzEtLjg2NC0uNzI3LTEuMTEtLjg0LTEuMzgzLS42NDktMS4xNzYuODM2LTIuODg3IDEuNDUzLTIuODg3IDEuMDQgMC0uMTI2LjkyMi0xLjE5NiAyLjA1NS0yLjM4IDEuMTI5LTEuMTgzIDIuMDE1LTIuMjUzIDEuOTc2LTIuMzc4LS4wNDMtLjEzLS40NjktLjUwOC0uOTQ1LS44NDQtLjc5LS41NTUtMS4wNDMtLjYxNy0yLjY0NS0uNjYtMS4xNzItLjAyOC0yLjA1NC4wNjItMi42MTMuMjY1bTIxLjYxNy0uMTAxYy0uNDU3LjE4My0uNDguMjY1LS4zNTEgMS4zNi4wNzguNjM2LjE4MyAxLjIwMi4yMzggMS4yNi4wNTUuMDU2LjYxLS40MDIgMS4yMy0xLjAxbDEuMTI1LTEuMTE0LS40MzctLjM2Yy0uNDg0LS4zOS0xLjA1NS0uNDMzLTEuODA1LS4xMzZtNy4zNDguNDk2Yy0xLjc5My40OTItMi4yNTguODQ0LTIuMjU4IDEuNjk1IDAgLjM2LjA4Ni40NjEuMzEzLjM3NS41NS0uMjEuNTY2LjQwNi4xMDUgNC4wODYtLjI1IDEuOTc3LS40MSAzLjYzMy0uMzU1IDMuNjg0LjIyNi4yMyAzLjA0Ni40MDIgMy4xMTMuMTkxLjAzOS0uMTIxLjI2Mi0yLjI4OS40OTYtNC44Mi4yMzQtMi41MjguNDc3LTQuODUyLjU0LTUuMTYuMTMyLS42Ni4yNDUtLjY1Ny0xLjk1NC0uMDUxbS0xNi40NDUgMS45NjVjLS42MjEgMS40My0uNTQzIDEuNjA1LjcyMiAxLjYwOWwuNzQyLjAwNC0uMzEyLTEuMjc3Yy0uMTcyLS43MDQtLjM3OS0xLjM1Mi0uNDU3LTEuNDQyLS4wNzgtLjA5LS4zOTUuNDA2LS42OTUgMS4xMDZtLTEyLjQxNC0uMzc1Yy0uODUyLjU3NC0xLjI3IDEuNjY4LS45OTcgMi42MTMuMTg4LjY1Mi43NDMgMS40MTggMS4wMjQgMS40MTguMjAzIDAgMy4yNjYtMy40OTIgMy4yNjYtMy43MTkgMC0uMjctMS4zMTctLjc3Ny0yLjAwOC0uNzc3LS4zMjUgMC0uOTAzLjIxLTEuMjg1LjQ2NW0tMjguMTQxLjk3MmMtLjI1NC4xMDItLjQ2MS4zNDgtLjQ1Ny41NDcgMCAuNTU1IDEuMzcxIDQuNjQgMS41NzQgNC43MDcuMzI0LjExIDEuODM2LTEuMzQ0IDIuMi0yLjExMy40Ni0uOTY5LjI5Ni0yLjAwOC0uNDM0LTIuNzctLjQ2MS0uNDgtLjcyMy0uNTgyLTEuNDkyLS41Ny0uNTEyLjAwOC0xLjEzNy4wOTgtMS4zOTEuMk0xNC4yNDIgMTRjLjE0LjczLjUwOC44OTguNDI2LjE5NS0uMDM1LS4zMTItLjE2OC0uNjAxLS4yOTctLjY0NC0uMTQ0LS4wNDctLjE5MS4xMTctLjEyOS40NDltOC43My0uMTAyYy0zLjM1OS41MDgtNS42MzYgNC44MjktMy45MDIgNy40MDcgMS44OTUgMi44MTIgNi4zMzIgMi4wNjYgOC0xLjM1Mi41NDMtMS4xMDUuNzE1LTIuNjI1LjQwNy0zLjYyOS0uMjItLjcyMi0xLjA3LTEuNzczLTEuNjkyLTIuMDg2LS43My0uMzY3LTEuNzkzLS40OTYtMi44MTItLjM0bS0uNDIyIDEuMDI0Yy0xLjM0NC41NDMtMS43MjMgMi4zOS0uNzE5IDMuNTE1LjUyLjU4My43MTEuNjU3IDEuNjY0LjY1Ny45NzcgMCAxLjEzNy0uMDcgMS43NjItLjc1NC41MDgtLjU1LjY5MS0uOTQyLjY5MS0xLjQ1NyAwLS45NDItLjMyLTEuMDktLjcxLS4zMzItLjQuNzctMS4xNTcuOTkyLTEuODQ4LjUzOS0uNTg2LS4zODMtLjY5Ni0xLjM0OC0uMjAzLTEuNzU4LjYzNi0uNTIzLjI1Ny0uNzctLjYzNy0uNDFtMjAuODYgNS40MDJjLS4wNjMuMTU2LS4wODMuNTk0LS4wNDguOTY5bC4wNjcuNjg3LjQ2LS44NjNjLjI1NS0uNDcyLjQ1OC0uOTEuNDU4LS45NjkgMC0uMjUtLjgzNi0uMDktLjkzOC4xNzYiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIi8%2BPC9nPjwvc3ZnPg%3D%3D',
};

const postman = {
    name: 'Postman',
    link: 'https://www.postman.com/product/what-is-postman/',
    badge: 'https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=ffffff',
};

const react = {
    name: 'React',
    link: 'https://react.dev/',
    badge: 'https://img.shields.io/badge/React-1b1d23?style=flat-square&logo=react&logoColor=61dbfb',
};

const reactNative = {
    name: 'React Native',
    link: 'https://reactnative.dev/',
    badge: 'https://img.shields.io/badge/React-1b1d23?style=flat-square&logo=react&logoColor=61dbfb',
};

const recharts = {
    name: 'Recharts',
    link: 'https://recharts.org/en-US',
    badge: 'https://img.shields.io/badge/Recharts-23a7b2?style=flat-square',
};

const vercel = {
    name: 'Vercel',
    link: 'https://vercel.com/guides/deploying-react-with-vercel',
    badge: 'https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel',
};

const vite = {
    name: 'Vite',
    link: 'https://vite.dev/',
    badge: 'https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=ffffff',
};

export const projectData = [
    {
        id: 0,
        title: 'Most Watched List',
        description:
            'Angular application for viewing movie details from movie API and tracking favorites.',
        image: mwlThumbnail,
        liveLink: 'https://most-watched-list.firebaseapp.com/welcome',
        githubLink:
            'https://github.com/micujones/mostwatchedlist-Angular-client',
        tools: [
            angular,
            nodeJs,
            angularMaterial,
            movieApi,
            mongoDB,
            heroku,
            githubPages,
        ],
        additionalRemarks:
            'I use the Angular framework to recreate a movie app I made. It is an adjustment from the flexibility of React but its two-way binding makes data easier to work with. Angular Material here is instrumental in working with professional guidelines.',
        gallery: [
            {
                description: 'Home screen',
                url: 'https://raw.githubusercontent.com/micujones/mostwatchedlist-Angular-client/refs/heads/main/screenshots/screenshot_main-view.png',
            },
            {
                description: 'Providing details about director',
                url: 'https://github.com/micujones/mostwatchedlist-Angular-client/blob/main/screenshots/screenshot_main-view_details.png?raw=true',
            },
            {
                description: 'Profile screen',
                url: 'https://raw.githubusercontent.com/micujones/mostwatchedlist-Angular-client/main/screenshots/screenshot_profile-view.png',
            },
            {
                description: 'Updating profile',
                url: 'https://raw.githubusercontent.com/micujones/mostwatchedlist-Angular-client/main/screenshots/screenshot_profile-view_update.png',
            },
        ],
    },
    {
        id: 1,
        title: 'Chat',
        description:
            'React Native/Firebase application for messaging, sending images and location information, and reading offline.',
        image: chatThumbnail,
        liveLink: '',
        githubLink: 'https://github.com/micujones/chat',
        tools: [nodeJs, reactNative, expo, firebase, giftedChat],
        additionalRemarks: '',
        gallery: [
            {
                description: 'Home screen',
                url: 'https://raw.githubusercontent.com/micujones/chat/main/screenshots/screenshot_home-screen.png',
            },
            {
                description: 'Chat room',
                url: 'https://raw.githubusercontent.com/micujones/chat/main/screenshots/screenshot_chat-screen.png',
            },
            ,
            {
                description: 'Messages sent',
                url: 'https://raw.githubusercontent.com/micujones/chat/main/screenshots/screenshot_chat-screen_actions.png',
            },
            {
                description: 'Read offline',
                url: 'https://raw.githubusercontent.com/micujones/chat/main/screenshots/screenshot_chat-screen_offline.png',
            },
        ],
    },
    {
        id: 2,
        title: 'Meet',
        description:
            'React application for finding events in various cities and visualization event data with Recharts.',
        image: meetThumbnail,
        liveLink: 'https://meet-blush-nine.vercel.app/',
        githubLink: 'https://github.com/micujones/meet',
        tools: [
            nodeJs,
            react,
            vite,
            googleCalendar,
            oAuth,
            awsLambda,
            recharts,
            jest,
            vercel,
        ],
        additionalRemarks:
            'A focus for this app is the use of test-driven development and authtentication. I use Jest for unit testing, which guides the development process and helps me ensure each component renders and operates as expected. I use OAuth2 to familiarize myself with a common authentication experience found in modern applications: logging in through a third-party application.',
        gallery: [
            {
                description: 'Home screen',
                url: 'https://raw.githubusercontent.com/micujones/meet/main/screenshots/screenshot_home.png',
            },
            {
                description: 'City search',
                url: 'https://raw.githubusercontent.com/micujones/meet/main/screenshots/screenshot_city-search.png',
            },

            {
                description: 'Number filter',
                url: 'https://raw.githubusercontent.com/micujones/meet/main/screenshots/screenshot_number-of-events.png',
            },

            {
                description: 'Data visualization',
                url: 'https://raw.githubusercontent.com/micujones/meet/main/screenshots/screenshot_data-visualization.png',
            },

            {
                description: 'Show details',
                url: 'https://raw.githubusercontent.com/micujones/meet/main/screenshots/screenshot_show-details.png',
            },
        ],
    },
    {
        id: 3,
        title: 'Pokédex',
        description:
            'An application for viewing basic Pokémon data from the PokeAPI',
        image: pokedexThumbnail,
        liveLink: 'https://micujones.github.io/pokedex/',
        githubLink: 'https://github.com/micujones/pokedex',
        tools: [nodeJs, pokeApi, jQuery, bootstrap],
        additionalRemarks:
            'A introductory project for understanding the relationship between HTML, CSS, and JavaScript. I scour PokéAPI for type badges that will be available for each Pokémon (and still look cute). I return to the project later to implement a search function that does not utilize hooks.',
        gallery: [
            {
                description: 'Main screen',
                url: 'https://raw.githubusercontent.com/micujones/pokedex/main/image/screenshot_home.png',
            },
            {
                description: 'Search function',
                url: 'https://raw.githubusercontent.com/micujones/pokedex/main/image/screenshot_search.png',
            },
            ,
            {
                description: 'Pokémon card',
                url: 'https://raw.githubusercontent.com/micujones/pokedex/main/image/screenshot_card.png',
            },
        ],
    },
    {
        id: 4,
        title: 'Movie API',
        description:
            'Server-side for a movies application with access to movie data and ability to manipulate user details.',
        image: movieApiThumbnail,
        liveLink: '',
        githubLink: 'https://github.com/micujones/movie_api',
        tools: [nodeJs, express, passport, heroku, mongoDB, mongoose, postman],
        additionalRemarks:
            'This API was built in tandem with a database of movies. It provides user authentication (e.g., JWTs) and endpoint authorization, and offers multiple user actions, including editing profile, adding/removing favorite movies, and deleting the account.',
        gallery: [],
    },
];

/**
 * A brief description of the project’s goal or purpose (1 to 2 sentences). You can use the project brief as inspiration.
 * A screenshot that represents the project.
 * A link to the project’s GitHub repository.
 * A link to the live, hosted version of your app (if possible). If you don’t have a live version (e.g., your React Native app), include screenshots that show the app’s functionality or a recording of your app in use.
 * A list of the technologies used for each project (e.g., React, CSS).
 * Any other relevant materials you created for the project, for example, user flows, user stories, and/or a Kanban board. Be sure to explain how you worked with these materials during the project.
 */
