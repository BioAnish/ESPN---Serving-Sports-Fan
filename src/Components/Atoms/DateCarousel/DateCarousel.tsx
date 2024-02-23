"use client";
import React, { useState } from "react";
import style from "./DateCarousel.module.scss";
import { IoCalendarOutline } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateCarousel = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const handleCalendarButtonClick = () => {
    setShowCalendar(!showCalendar); // Toggle calendar visibility
  };

  // Function to handle clicking on the left button
  const handleLeftButtonClick = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7); // Move one week backward
    setCurrentDate(newDate);
  };

  // Function to handle clicking on the right button
  const handleRightButtonClick = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7); // Move one week forward
    setCurrentDate(newDate);
  };

  const handleCalendarChange = (value: Value) => {
    if (value instanceof Date) {
      setCurrentDate(value); // Update current date to the selected date
    } else if (value === null) {
      // Handle null case, e.g., reset to current date
      setCurrentDate(new Date());
    }
  };

  // Function to get day name
  const getDayName = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  // Function to get month and day
  const getMonthAndDay = (date: Date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  // Render the days of the week
  const renderDays = () => {
    const days = [];
    const startingDate = new Date(currentDate);
    startingDate.setDate(startingDate.getDate() - startingDate.getDay()); // Get the previous Sunday
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(startingDate);
      date.setDate(date.getDate() + i);
      const isCurrentDate = date.toDateString() === today.toDateString();
      days.push(
        <div
          tabIndex={0}
          className={`${style.day} ${isCurrentDate ? style.currentDate : ""}`}
          key={i}
        >
          <div
            className={`${style.day__Container} ${
              isCurrentDate ? style.currentDate : ""
            }`}
          >
            <p className={style.day__Name}>{getDayName(date)}</p>
            <span className={style.day__Number}>
              <span>{getMonthAndDay(date)}</span>
            </span>
          </div>
        </div>
      );
    }

    return days;
  };
  return (
    <div className={style.date__picker}>
      <div className={style.datePicker__wrapper}>
        <div className={style.date__Carousel}>
          <button
            className={`${style.arrow__button} ${style.left__button}`}
            onClick={handleLeftButtonClick}
          ></button>
          <div className={style.react__swipe__container}>
            <div className={style.container}>
              <div className={style.week}>
                <div className={style.Week__wrapper}>{renderDays()}</div>
              </div>
            </div>
          </div>
          <button
            className={`${style.arrow__button} ${style.right__button}`}
            onClick={handleRightButtonClick}
          ></button>
        </div>
        <div className={style.calendar__container}>
          <button
            className={style.DateCarousel__MonthTrigger}
            onClick={handleCalendarButtonClick}
          >
            <IoCalendarOutline size={"2em"} className={style.calendar__icon} />
          </button>
          {/* Render calendar based on visibility */}
          {showCalendar && (
            <Calendar onChange={handleCalendarChange} value={currentDate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DateCarousel;
