import React, { useState, createContext } from "react";
import NavBase from "./Nav/NavBase";
import TopDate from "./TopDate/TopDate";
import CalenderDay from "./Calender/CalenderDay";
import { add } from "date-fns";

export const AdjustDate = createContext();

export default function TodoHome() {
  const [adjustDate, setAdjustDate] = useState(0);
  const [rerender, setRerender] = useState(false);
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
  today = add(today, { days: adjustDate });
  const currentDate = add(today, { days: 0 });
  const yesterday = add(today, { days: -1 });
  const tomorrow = add(today, { days: 1 });
  const yesterdayTwo = add(today, { days: -2 });
  const tomorrowTwo = add(today, { days: 2 });

  let DateArray = [yesterdayTwo, yesterday, currentDate, tomorrow, tomorrowTwo];

  let data = {};

  let event = JSON.parse(localStorage.getItem("TodoList")) || [];

  React.useEffect(() => {
    console.log(adjustDate);
  }, [adjustDate]);

  return (
    <div>
      <AdjustDate.Provider value={{ adjustDate, setAdjustDate }}>
        <TopDate date={formatDate(currentDate)} />
        <CalenderDay date={formatDate(yesterday)} events={event} />
        <NavBase />
      </AdjustDate.Provider>
    </div>
  );
}
