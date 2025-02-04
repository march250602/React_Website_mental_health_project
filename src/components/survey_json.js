export const json = {
  title: "Privacy-aware student wellness monitoring system",
  // logo:"https://cdn.prod.website-files.com/674912352bcd45d433111393/674f866c6fdef5f3e048032a_thinder%20bird.PNG" ,
  // logoWidth: '150px',
  // logoHeight: 'auto',
  // logoPosition: "right",
  description: "Please complete the survey",
    completedHtml: "<h3>Thank you for taking the time to complete our survey!.</h5>",
    // completedHtmlOnCondition: [{
    //   expression: "{nps_score} > 8",
    //   html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h5>"
    // }, {
    //   expression: "{nps_score} < 7",
    //   html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you shared your ideas with us. They will help us make our product better.</h5>"
    // }],
    "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "title": "In the last 2 weeks, have you had chest or stomach pains as a result of your cough?",
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question2",
          "title": "In the last 2 weeks, have you been bothered by sputum (phlegm) production when you cough?",
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question3",
          "title": "In the last 2 weeks, have you been tired because of your cough?",
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question4",
          "title": "In the last 2 weeks, have you felt in control of your cough?",
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "boolean",
          "name": "question5",
          "title": "In the last 2 weeks, has your coughing been bad enough to cause you social distress?"
        },
        {
          "type": "panel",
          "name": "panel1",
          "elements": [
            {
              "type": "rating",
              "name": "question6",
              "title": "How often during the last 2 weeks have you felt embarassed by your coughing?",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question7",
              "title": "In the last 2 weeks, my cough has made me feel anxious",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question8",
              "title": "In the last 2 weeks, my cough has interfered with my job, or other daily tasks",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question9",
              "title": "In the last 2 weeks, I felt that my cough interfered with the overall enjoyment of my life",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question10",
              "title": "In the last 2 weeks, have you been concerned that other people think something is wrong with you, because of your cough?",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question11",
              "title": "In the last 2 weeks, my cough has interrupted conversation or phone calls",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question12",
              "title": "In the last 2 weeks, my cough has annoyed my partner, family, or friends",
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            }
          ],
          "visible": false,
          "visibleIf": "{question5} = true",
          "title": "Social Distress"
        },
        {
          "type": "rating",
          "name": "question13",
          "title": "In the last 2 weeks, exposure to paints or fumes has made me cough",
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question14",
          "title": "In the last 2 weeks, how many times a day have you had coughing bouts?",
          "rateMax": 7,
          "minRateDescription": "Continously",
          "maxRateDescription": "None "
        },
        {
          "type": "rating",
          "name": "question15",
          "title": "In the last 2 weeks, have you had a lot of energy?",
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "boolean",
          "name": "question16",
          "visibleIf": "{question1} <= 3 and {question2} <= 3 and {question14} <= 3 and {question15} >= 5",
          "title": "In the last 2 weeks, has your coughing been accompanied by wheezing as well?"
        },
    
]
},
],"showProgressBar": "top",
  "progressBarType": "questions",
  "widthMode": "static",
  "width": "864"
};