import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./Survey.css";
//import "survey-react/survey.css";

function App() {
  let json = {
    questions: [
      {
        type: "checkbox",
        name: "car",
        title: "What car are you driving?",
        isRequired: true,
        hasSelectAll: true,
        hasNone: true,
        noneText: "None of the above",
        colCount: 4,
        choicesOrder: "asc",
        choices: [
          "Ford",
          "Tesla",
          "Vauxhall",
          "Volkswagen",
          "Nissan",
          "Audi",
          "Mercedes-Benz",
          "BMW",
          "Peugeot",
          "Toyota",
          "Citroen"
        ]
      }
    ]
  };
  var surveyRender = <Survey.Survey json={json} />;
  return (
    <div className="App">
      <h1>SurveyJS react example</h1>
      <h2>Checkbox - none of the above and select all</h2>
      {surveyRender}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);