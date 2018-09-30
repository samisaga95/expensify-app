"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML

var timepass = {
  title: "FuckOff",
  subtitle: "I am kidding I didn't mean it",
  options: ["One", "Two"]
};

function optionsExist(optionsArray) {
  if (optionsArray.length > 0) return React.createElement(
    "p",
    null,
    "Here are you options: ",
    optionsArray
  );else return React.createElement(
    "p",
    null,
    "There arer no options."
  );
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    timepass.title
  ),
  timepass.subtitle && React.createElement(
    "p",
    null,
    " ",
    timepass.subtitle,
    " "
  ),
  optionsExist(timepass.options)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, app);
