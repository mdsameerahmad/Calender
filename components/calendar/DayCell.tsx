import { isCurrentMonth, isInRange, isSameDay } from "@/utils/dateUtils";
import React from "react";

const DayCell = ({ date, range, onClick, currentDate }: any) => {
  if (!date) return <div className="cal-day" />;

  const isStart = range.start && isSameDay(date, range.start);
  const isEnd = range.end && isSameDay(date, range.end);
  const inRange = range.start && range.end && isInRange(date, range.start, range.end);
  const isNotCurrentMonth = !isCurrentMonth(date, currentDate);
  const isWeekend = date.getDay() === 0 || date.getDay() === 6; // Sunday (0) or Saturday (6)
  const isToday = isSameDay(date, new Date());

  let cellClasses = "cal-day relative date-cell";

  const hasRange = range.start && range.end;

  if (isNotCurrentMonth) {
    cellClasses += " disabled";
  } else if (isStart && isEnd) {
    cellClasses += " range-start range-end single-selection";
  } else if (isStart) {
    cellClasses += ` range-start ${hasRange ? "has-range" : ""}`;
  } else if (isEnd) {
    cellClasses += " range-end has-range";
  } else if (inRange) {
    cellClasses += " range-middle";
  } else if (isToday) {
    cellClasses += " today";
  } else if (isWeekend) {
    cellClasses += " text-primary hover:bg-gray-50";
  } else {
    cellClasses += " text-gray-700 hover:bg-gray-50";
  }

  return (
    <div
      onClick={() => onClick(date)}
      className={cellClasses}
      title={date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    >
      {isToday && (
        <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
      )}
      {date.getDate()}
    </div>
  );
};

export default React.memo(DayCell);
