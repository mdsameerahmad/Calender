# 📅 Premium SaaS Calendar App

A modern, high-performance, and visually stunning calendar application built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This project focuses on premium UX, smooth micro-interactions, and month-specific productivity tracking.

---

## 🚀 Key Functionalities

### 1. **Interactive Date Selection**
- **Single Click**: Select a specific date.
- **Range Selection**: Select a start and end date to highlight a continuous range.
- **Engaging Visuals**: Ranges are displayed as a connected "capsule" ribbon with smooth `cubic-bezier` pulse animations upon selection.

### 2. **Monthly Notes System**
- **Month-Specific Storage**: Notes are partitioned by month and year. Writing a note in April will not show it in May, ensuring organized monthly planning.
- **Persistence**: All notes are automatically saved to `localStorage`, so your data remains even after refreshing the page.
- **Clear Functionality**: Easily clear notes for the current month with a single click.

### 3. **Dynamic Navigation**
- **Smooth Transitions**: Switching between months features a directional slide animation (left/right) powered by Framer Motion.
- **Real-time Header**: The hero section dynamically updates the Month and Year display with a premium typography hierarchy.

---

## 🎨 Design System & UX

- **Color Palette**: A curated SaaS-style color system using deep blues (`#2563eb`) and soft background gradients.
- **Depth & Elevation**: Layered card design with complex shadows and glassmorphism effects in the header.
- **Micro-Polish**:
  - Hover scaling and shadows on date cells.
  - Interactive navigation buttons with vertical translation on hover.
  - "Today" indicator with a subtle primary color dot.
  - Weekend styling for better visual scanning.

---

## 🛠 Technical Highlights

- **Next.js 14 (App Router)**: Utilizing the latest stable React framework for optimal performance.
- **Image Optimization**: Powered by `next/image` with lazy loading and priority rendering for the hero background.
- **Performance**:
  - Component memoization (`React.memo`) for `DayCell` to prevent unnecessary re-renders.
  - Standalone build output configuration in `next.config.js`.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

---

## 📦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm start
   ```

---

## 📂 Project Structure

- [Calendar.tsx](file:///e:/Calender/cal/components/calendar/Calendar.tsx): Main component orchestration.
- [NotesPanel.tsx](file:///e:/Calender/cal/components/calendar/NotesPanel.tsx): Logic for month-specific persistence.
- [DayCell.tsx](file:///e:/Calender/cal/components/calendar/DayCell.tsx): Individual date rendering and selection logic.
- [globals.css](file:///e:/Calender/cal/app/globals.css): Custom design system, animations, and ribbon-range styles.
- [useCalendar.ts](file:///e:/Calender/cal/hooks/useCalendar.ts): Core state management for dates and ranges.
