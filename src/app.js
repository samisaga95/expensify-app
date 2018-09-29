console.log("App.js is running!");

// JSX - JavaScript XML

var timepass = {
  title: "FuckOff",
  subtitle: "I am kidding I didn't mean it"
};

var template = (
  <div>
    <h1>{timepass.title}</h1>
    <p>{timepass.subtitle}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, app);
