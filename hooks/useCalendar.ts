import { useEffect, useState } from "react";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  // Load range from localStorage on mount
  useEffect(() => {
    const savedRange = localStorage.getItem("calendar-range");
    if (savedRange) {
      const parsed = JSON.parse(savedRange);
      setRange({
        start: parsed.start ? new Date(parsed.start) : null,
        end: parsed.end ? new Date(parsed.end) : null,
      });
    }
  }, []);

  // Save range to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("calendar-range", JSON.stringify(range));
  }, [range]);

  const changeMonth = (offset: number) => {
    setDirection(offset > 0 ? "next" : "prev");
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      // If end is before start, swap them
      if (date < range.start) {
        setRange({ start: date, end: range.start });
      } else if (date.getTime() === range.start.getTime()) {
        // Clicking same date resets
        setRange({ start: null, end: null });
      } else {
        setRange({ start: range.start, end: date });
      }
    }
  };

  return {
    currentDate,
    range,
    changeMonth,
    handleDateClick,
    direction,
  };
};