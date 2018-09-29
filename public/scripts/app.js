"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML

var timepass = {
  title: "FuckOff",
  subtitle: "I am kidding I didn't mean it"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    timepass.title
  ),
  React.createElement(
    "p",
    null,
    timepass.subtitle
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, app);
