export default function CalendarHeader({ currentDate, changeMonth, isAnimating }: any) {
  const month = currentDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

  const year = currentDate.getFullYear();

  return (
    <div className="absolute right-6 bottom-10 text-white text-right z-20 flex flex-col items-end">
      <div className="flex gap-4 mb-2 items-center">
        <button 
            onClick={() => changeMonth(-1)}
            className="nav-btn bg-white/10 p-2 rounded-full transition-colors backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Month"
            disabled={isAnimating}
          >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          onClick={() => changeMonth(1)}
          className="nav-btn bg-white/10 p-2 rounded-full transition-colors backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next Month"
          disabled={isAnimating}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="text-[14px] sm:text-[20px] font-bold mb-[-4px] tracking-wide relative z-10 text-white opacity-80">{year}</div>
      <div className="text-[24px] sm:text-[32px] font-extrabold tracking-wider text-white">{month}</div>
    </div>
  );
}