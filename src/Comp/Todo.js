import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import LabelWInput from "./LabelWInput";
import { add } from "date-fns";
import testData from "../TestData";
import { FaCog, FaRegCheckCircle, FaRegCircle, FaRegWindowClose, FaAngleLeft, FaAngleDoubleLeft, FaAngleRight, FaAngleDoubleRight, FaCalendar } from "react-icons/fa";

export default function Todo() {
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

  const NewEvent = ["Task", "Email"];
  let data = {};

  let event = JSON.parse(localStorage.getItem("TodoList")) || [];

  function AddTask(e) {
    e.preventDefault();
    data["ID"] = uuid();
    data["Checked"] = false;
    data["Dot"] = "block";
    data["Edit"] = "none";
    data["CheckMark"] = "none";

    NewEvent.forEach((element) => {
      data[element] = document.getElementById(element).value;
      document.getElementById(element).value = "";
    });
    data["Comment"] = document.getElementById("Comment").value;
    data["Date"] = document.getElementById("Date").value;
    data["Color"] = document.getElementById("Color").value;
    event.push(data);
    localStorage.setItem("TodoList", JSON.stringify(event));
    setRerender(!rerender);
  }

  function EditTask(e) {
    e.preventDefault();
    // console.log(document.getElementById("NewID").value, "asdfasdf");
    console.log(e.target.elements.NewID.value);

    // NewEvent.forEach((element) => {
    //   data[element] = document.getElementById("New" + element).value;
    // });
    event.map((item) => {
      if (e.target.elements.NewID.value === item.ID) {
        // item["Checked"] = item.Checked;
        item.Color = e.target.elements.NewColor.value;
        item.Comment = e.target.elements.NewComment.value;
        item.Date = e.target.elements.NewDate.value;
        // item["Dot"] = item.Dot;
        // item["Edit"] = "none";
        item.Email = e.target.elements.NewEmail.value;
        item.ID = e.target.elements.NewID.value;
        item.Task = e.target.elements.NewTask.value;
        item.Edit = "none";
        setRerender(!rerender);
      }
      return item;
    });
    localStorage.setItem("TodoList", JSON.stringify(event));
    setRerender(!rerender);
  }

  let PlaceHolder = {};
  NewEvent.forEach((element) => {
    PlaceHolder[element] = "";
  });

  function handleChecked(ID) {
    event.map((item) => {
      if (ID === item.ID) {
        item.Checked = true;
        item.CheckMark = "block";
        item.Dot = "none";
      }
      return item;
    });
    localStorage.setItem("TodoList", JSON.stringify(event));
    // navigate(0);
    setRerender(!rerender);
  }

  function handleUnChecked(ID) {
    event.map((item) => {
      if (ID === item.ID) {
        item.Checked = false;
        item.CheckMark = "none";
        item.Dot = "block";
      }
      return item;
    });
    localStorage.setItem("TodoList", JSON.stringify(event));
    // navigate(0);

    setRerender(!rerender);
  }

  function deleteItem(ID, Task) {
    if (window.confirm("Are you sure you want to Delete:" + Task) === false) return;
    event.map((item, index) => {
      if (ID === item.ID) {
        event.splice(index, 1);
      }
      return item;
    });
    localStorage.setItem("TodoList", JSON.stringify(event));
    setRerender(!rerender);
  }

  function editItem(ID) {
    event.map((item) => {
      if (ID === item.ID) {
        item.Edit = "block";
      }
      return item;
    });
    localStorage.setItem("TodoList", JSON.stringify(event));
    setRerender(!rerender);
  }

  return (
    <div className="flex flex-col">
      <div className="sm:h-8 h-12 w-full bg-red-600 text-white text-sm flex flex-row justify-center items-center">
        Uses Local Storage :{" "}
        <button
          className="mx-2 px-3 border border-black bg-black rounded"
          onClick={() => {
            localStorage.removeItem("TodoList");
            setRerender(!rerender);
          }}
        >
          Clear Local Storage
        </button>
        <button
          className="mx-2 px-3 border border-black bg-black rounded"
          onClick={() => {
            localStorage.setItem("TodoList", JSON.stringify(testData));
            setRerender(!rerender);
          }}
        >
          Set Test Data
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="CalDisplay flex flex-col justify-center items-center w-96">
          <div className="MonthText">{month[today.getMonth()]}</div>
          <div className="flex flex-row">
            <button
              className="mx-1 px-2"
              onClick={() => {
                setAdjustDate(adjustDate - 2);
              }}
            >
              <FaAngleDoubleLeft />
            </button>
            <button
              className="mx-1 px-2"
              onClick={() => {
                setAdjustDate(adjustDate - 1);
              }}
            >
              <FaAngleLeft />
            </button>
            <button
              className="mx-1 px-2"
              onClick={() => {
                setAdjustDate(0);
              }}
            >
              <FaCalendar />
            </button>
            <button
              className="mx-1 px-2"
              onClick={() => {
                setAdjustDate(adjustDate + 1);
              }}
            >
              <FaAngleRight />
            </button>
            <button
              className="mx-1 px-2"
              onClick={() => {
                setAdjustDate(adjustDate + 2);
              }}
            >
              <FaAngleDoubleRight />
            </button>
          </div>

          <div className="CalBoxDiv flex sm:flex-row flex-col justify-center">
            {DateArray.map((item, index) => {
              let color = true;
              let backgroundColor = "rgb(222, 225, 244)";
              return (
                <div className="CalBox w-96 min-h-min" key={index}>
                  <div className="Header">
                    <div className="DayNumber">
                      {month[item.getMonth()]}
                      {item.getDate()}
                    </div>
                    <div className="DayText">{days[item.getDay()]} </div>
                    {event.map((event, index) => {
                      if (color !== true) {
                        backgroundColor = "white";
                        color = true;
                      } else {
                        backgroundColor = "rgb(222, 225, 244)";
                        color = false;
                      }
                      let checkBox;
                      if (event.Checked === false) {
                        checkBox = <FaRegCheckCircle onClick={() => handleChecked(event.ID)} className="Done" />;
                      } else {
                        checkBox = <FaRegCircle onClick={() => handleUnChecked(event.ID)} className="Done" />;
                      }
                      if (event.Date === formatDate(item.toISOString())) {
                        let overflowText;
                        if (event.Task.length > 16) {
                          overflowText = (
                            <h5 className="overFlow text-sm overflow-clip whitespace-nowrap" id="TaskString">
                              {event.Task}
                            </h5>
                          );
                        } else {
                          overflowText = (
                            <h5 className="text-sm overflow-clip whitespace-nowrap" id="TaskString">
                              {event.Task}
                            </h5>
                          );
                        }

                        return (
                          <div
                            key={index}
                            className="EventItem"
                            tabIndex="0"
                            style={{
                              backgroundColor: backgroundColor,
                            }}
                          >
                            <div className="EventType">
                              <span
                                className="Dot"
                                style={{
                                  backgroundColor: "transparent",
                                  display: event.CheckMark,
                                }}
                              >
                                <h4 className="CheckMark">&#x2713;</h4>
                              </span>
                              <span
                                className="Dot"
                                style={{
                                  backgroundColor: event.Color,
                                  display: event.Dot,
                                }}
                              ></span>
                            </div>
                            <div className="EventContent">
                              <div className="EventName">
                                <div className="EventTask">{overflowText}</div>
                                <div className="noActive">{checkBox}</div>
                                <div className="noActive">
                                  <FaRegWindowClose className="Done" onClick={() => deleteItem(event.ID, event.Task)} />
                                </div>
                                <div className="noActive">
                                  <FaCog className="Done" onClick={() => editItem(event.ID)} />
                                </div>
                              </div>
                              <div className="EventText trueText">{event.Comment}</div>
                              <div className="EventText">{event.Email}</div>
                            </div>
                            <div
                              className="editBox"
                              style={{
                                display: event.Edit,
                              }}
                            >
                              <form onSubmit={EditTask}>
                                <div className="flex flex-row justify-center items-end">
                                  <label>Edit Name</label>
                                  <input type="text" name={"NewTask"} defaultValue={event.Task} />
                                </div>
                                <div className="FlexRowCenterEnd">
                                  <label>Edit Comment</label>
                                  <textarea name={"NewComment"} defaultValue={event.Comment} rows="4" cols="25" className="trueText" />
                                </div>
                                <div className="FlexRowCenterEnd">
                                  <label>Edit Email</label>
                                  <input type="text" name={"NewEmail"} defaultValue={event.Email} />
                                </div>
                                <input type={"date"} name="NewDate" placeholder="DD-MMM-YYYY" defaultValue={event.Date} />
                                <input
                                  type={"text"}
                                  name="NewID"
                                  defaultValue={event.ID}
                                  style={{
                                    display: "none",
                                  }}
                                />
                                <input type={"color"} name="NewColor" defaultValue={event.Color} />
                                <input type={"submit"} />
                              </form>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="NewTaskFormDiv">
        <form onSubmit={AddTask}>
          <div className="flex sm:flex-row flex-col justify-center items-center">
            {NewEvent.map((item, index) => {
              return <LabelWInput command={item} dataInput={""} key={index} />;
            })}{" "}
            <div className="flex flex-col items-start">
              <label>Comment</label>
              <textarea id={"Comment"} placeholder={"Comment"} rows="3" cols="25" />
            </div>
          </div>

          <div>
            <input type={"date"} id="Date" placeholder="DD-MMM-YYYY" defaultValue={formatDate(today.toISOString())} />
            <input type={"color"} id="Color" />
            <input type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}
