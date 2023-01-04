import { add } from "date-fns";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

let today = new Date();
const currentDate = formatDate(add(today, { days: 0 }));
const tomorrow = formatDate(add(today, { days: 1 }));
const yesterdayTwo = formatDate(add(today, { days: -2 }));

let testData = [
  {
    "ID": "8098c309-1d2b-4d7b-b8e6-50dcd9436494",
    "Checked": false,
    "Dot": "block",
    "Edit": "none",
    "CheckMark": "none",
    "Task": "Learn React Development",
    "Email": "travis.h.dev@gmail.com",
    "Comment": "-Read Documentation for on ReactJS.org. \n-Learn more about React Hooks. \n-Develop Understanding of useContext\n\n",
    "Date": currentDate,
    "Color": "#06fe8a",
  },
  {
    "ID": "01df9809-d48e-4e55-a45e-f962b16e2804",
    "Checked": false,
    "Dot": "block",
    "Edit": "none",
    "CheckMark": "none",
    "Task": "Agile Meeting",
    "Email": "MyTeam.Agile@Agile.com",
    "Comment": "- 0900\n- 757-555-1023\n- Discuss User Stories status\n- Ask Jim about getting more paper.",
    "Date": tomorrow,
    "Color": "#ff0000",
  },
  {
    "ID": "d2731e28-84bd-4799-b874-51ca96fa4bb8",
    "Checked": false,
    "Dot": "block",
    "Edit": "none",
    "CheckMark": "none",
    "Task": "Lunch with Pam",
    "Email": "PamAgile@Agile.com",
    "Comment": "- 1230\n- Pam at reception is married to Jim from sales. \n- Offer Pam the Scrum Master Job",
    "Date": yesterdayTwo,
    "Color": "#1100ff",
  },
  {
    "ID": "90ef25e9-d40c-4848-be48-79f339a272d8",
    "Checked": false,
    "Dot": "block",
    "Edit": "none",
    "CheckMark": "none",
    "Task": "End of Day Code Review With Team",
    "Email": "Team@Agile.com",
    "Comment": "- Offer Travis Heidelberger the Job\n- Let him know this was a unique way to build a todo list\n- Ask about how he managed so much state in this one little project. ",
    "Date": "2023-01-03",
    "Color": "#ffbb00",
  },
];

export default testData;
