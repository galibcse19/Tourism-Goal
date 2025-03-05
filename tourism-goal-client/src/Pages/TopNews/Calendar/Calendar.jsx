import React, { useState } from "react";
import {
  addMonths,
  subMonths,
  addYears,
  subYears,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  // Navigation Handlers
  const nextMonth = () => setCurrentMonth((prev) => addMonths(prev, 1));
  const prevMonth = () => setCurrentMonth((prev) => subMonths(prev, 1));
  const nextYear = () => setCurrentMonth((prev) => addYears(prev, 1));
  const prevYear = () => setCurrentMonth((prev) => subYears(prev, 1));

  return (
    <div className="w-full mt-10 lg:p-6 md:p-6 p-1 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Calendar</h2>
      <CalendarHeader
        currentMonth={currentMonth}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        nextYear={nextYear}
        prevYear={prevYear}
      />
      <CalendarCells currentMonth={currentMonth} today={today} />
    </div>
  );
};

// Header Navigation
const CalendarHeader = ({ currentMonth, nextMonth, prevMonth, nextYear, prevYear }) => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex lg:gap-2 md:gap-2 gap-1">
      <NavButton onClick={prevMonth} label="&lt;" />
      <span className="lg:px-4 md:px-4 px-1 py-2 bg-blue-500 text-white rounded">{format(currentMonth, "MMMM")}</span>
      <NavButton onClick={nextMonth} label="&gt;" />
    </div>
    <div className="flex lg:gap-2 md:gap-2 gap-1">
      <NavButton onClick={prevYear} label="&lt;" />
      <span className="lg:px-4 md:px-4 px-1 py-2 bg-blue-500 text-white rounded">{format(currentMonth, "yyyy")}</span>
      <NavButton onClick={nextYear} label="&gt;" />
    </div>
  </div>
);

// Calendar Cells (Days)
const CalendarCells = ({ currentMonth, today }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="grid lg:grid-cols-11 md:grid-cols-7 grid-cols-5 gap-2">
      {days.map((day, index) => {
        const isToday = isSameDay(day, today);
        const isCurrentMonth = isSameMonth(day, currentMonth);
        return (
          <div
            key={index}
            className={`p-2 text-center rounded-lg font-semibold ${
              isToday ? "bg-blue-500 text-white" : isCurrentMonth ? "bg-gray-100" : "text-gray-400"
            }`}
          >
            <div className="font-bold text-xl">{format(day, "d")}</div>
            <div className="text-xs">{format(day, "EEE")}</div> {/* Weekday Name (e.g., "Mon") */}
          </div>
        );
      })}
    </div>
  );
};

// Reusable Navigation Button
const NavButton = ({ onClick, label }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
    {label}
  </button>
);

export default Calendar;
