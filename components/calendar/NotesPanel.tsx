import { useEffect, useState } from "react";

export default function NotesPanel({ range, currentDate }: any) {
  const [note, setNote] = useState("");

  // Create a unique key for the month and year, and optionally the range
  const monthYear = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;
  const rangeKey = range.start && range.end 
    ? `note-${range.start.getTime()}-${range.end.getTime()}`
    : `note-${monthYear}`;

  useEffect(() => {
    const saved = localStorage.getItem(rangeKey);
    setNote(saved || "");
  }, [rangeKey]);

  const saveNote = (val: string) => {
    setNote(val);
    localStorage.setItem(rangeKey, val);
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  return (
    <div className="mt-0 pr-2">
      <h3 className="text-[11px] font-extrabold text-gray-700 mb-3 pl-1 tracking-wide uppercase flex justify-between items-center">
        {range.start && range.end ? 'Range Notes' : `${monthName} Notes`}
        {note && (
          <button 
            onClick={() => saveNote("")} // Clear note and trigger save
            className="text-gray-400 hover:text-red-500 transition-colors text-xs font-normal flex items-center gap-1"
            aria-label="Clear Note"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Clear
          </button>
        )}
      </h3>
      <textarea
        className="w-full bg-transparent border-none outline-none text-xs leading-[22px] text-gray-600 resize-none h-[180px] font-medium placeholder:text-gray-300 p-2"
        placeholder="Type your notes here..."
        value={note}
        onChange={(e) => saveNote(e.target.value)}
        style={{
          backgroundImage: 'linear-gradient(transparent 21px, rgba(229, 231, 235, 0.5) 21px)',
          backgroundSize: '100% 22px',
          backgroundAttachment: 'local'
        }}
      />
    </div>
  );
}