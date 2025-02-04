import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import axios from "axios";
import { json } from "../components/survey_json.js";
import { Theme } from "../components/theme.js";
import { PlainLight,ThreeDimensionalLight } from "survey-core/themes";
//import plainLight from "survey-core/themes/plain-light.js";


function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

async function onComplete(survey) {
  console.log("Survey complete! Results: ", survey.data);

  try {
    // 
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/survey/`, survey.data);
    
    // 
    console.log("Survey data sent successfully:", response.data);
    alert("Survey submitted successfully!"); // 
    
  } catch (error) {
    
    console.error("Error submitting survey:", error);
    alert("Failed to submit survey."); // 
}
}

function SurveyPage() {
  const model = new Model(json);
  model.completeText = "Submit";
  model.applyTheme(Theme);
  return (
   
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
        
      />
    
  );
}
export default SurveyPage;