console.log("App.js is running!");

// JSX - JavaScript XML

var timepass = {
  title: "FuckOff",
  subtitle: "I am kidding I didn't mean it",
  options: ["One", "Two"]
};

function optionsExist(optionsArray) {
  if (optionsArray.length > 0)
    return <p>Here are you options: {optionsArray}</p>;
  else return <p>There arer no options.</p>;
}

var template = (
  <div>
    <h1>{timepass.title}</h1>
    {timepass.subtitle && <p> {timepass.subtitle} </p>}
    {optionsExist(timepass.options)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, app);
