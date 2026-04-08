"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import { useCalendar } from "@/hooks/useCalendar";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import NotesPanel from "./NotesPanel";

export default function Calendar() {
  const { currentDate, range, handleDateClick, changeMonth, direction } = useCalendar();
  const [isAnimating, setIsAnimating] = useState(false);
  const calendarGridRef = useRef<HTMLDivElement>(null);

  const handleMonthChange = (offset: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      changeMonth(offset);
    }
  };

  return (
    <div className="cal-container font-sans">
      <div className="flex flex-col relative">
        {/* HERO - IMAGE BG WITH OVERLAYS */}
        <div className="cal-hero">
          {/* The Photo */}
          <Image
            src="/wal.jpg"
            alt="Calendar background"
            layout="fill"
            objectFit="cover"
            objectPosition="center 73%"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 hero-overlay" />

          {/* Wavy separator - Full width responsive SVG */}
          <svg 
            className="absolute bottom-[-2px] left-0 w-full h-[100px] z-10 pointer-events-none translate-y-[5px]"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path 
              d="M 0 50 C 300 0, 700 100, 1000 50 L 1000 100 L 0 100 Z" 
              fill="white" 
            />
          </svg>
          
          {/* RIGHT-ALIGNED YEAR/MONTH OVERLAY */}
          <CalendarHeader 
            currentDate={currentDate} 
            changeMonth={handleMonthChange} 
            isAnimating={isAnimating}
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="cal-main">
          {/* NOTES */}
          <div className="cal-notes">
            <NotesPanel range={range} currentDate={currentDate} />
          </div>

          {/* GRID */}
          <div className="cal-grid-wrap calendar-container" ref={calendarGridRef}>
            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={currentDate.toISOString()}
                initial={{ 
                  x: direction === "next" ? 100 : -100, 
                  opacity: 0, 
                  scale: 0.98 
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1, 
                  scale: 1 
                }}
                exit={{ 
                  x: direction === "next" ? -100 : 100, 
                  opacity: 0, 
                  scale: 0.98 
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 w-full h-full"
              >
                <CalendarGrid
                  currentDate={currentDate}
                  range={range}
                  handleDateClick={handleDateClick}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


      </div>
    </div>
  );
}
