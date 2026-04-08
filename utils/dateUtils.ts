export const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday.
  // We want Monday to be the first day of the week (index 0).
  const firstDayOfWeek = (firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1); // Adjust for Monday start

  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (Date | null)[] = [];

  // Add days from the previous month
  for (let i = firstDayOfWeek; i > 0; i--) {
    days.push(new Date(year, month, 1 - i));
  }

  // Add days of the current month
  for (let i = 1; i <= totalDaysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  // Add days from the next month to fill the grid (up to 42 cells for 6 weeks)
  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
};

export const isSameDay = (d1: Date, d2: Date) =>
  d1.toDateString() === d2.toDateString();

export const isInRange = (date: Date, start: Date, end: Date) =>
  date >= start && date <= end;

export const isCurrentMonth = (date: Date, currentMonth: Date) =>
  date.getMonth() === currentMonth.getMonth() &&
  date.getFullYear() === currentMonth.getFullYear();