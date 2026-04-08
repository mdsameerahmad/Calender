export const metadata = {
  title: "Interactive Calendar",
  description: "Wall-style interactive calendar with date range & notes",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}