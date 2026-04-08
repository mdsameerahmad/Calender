import { getDaysInMonth } from "@/utils/dateUtils";
import DayCell from "./DayCell";

export default function CalendarGrid({
  currentDate,
  range,
  handleDateClick,
}: any) {
  const days = getDaysInMonth(currentDate);

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="grid grid-cols-7 gap-x-1 sm:gap-x-2 gap-y-1 sm:gap-y-2 text-center pb-4 sm:pb-0">
      {/* WEEKDAY HEADER */}
      {weekdays.map((day, index) => (
        <div key={day} className={`cal-weekday ${index >= 5 ? 'cal-weekend' : ''}`}>
          {day}
        </div>
      ))}

      {/* DAYS GRID */}
      {days.map((day, idx) => (
        <DayCell
          key={idx}
          date={day}
          range={range}
          onClick={handleDateClick}
          currentDate={currentDate}
        />
      ))}
    </div>
  );
}
