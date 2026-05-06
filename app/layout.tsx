import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLens – Track Muscle Growth from Progress Photos",
  description: "Uses computer vision to analyze body composition changes in progress photos over time. Perfect for fitness enthusiasts and personal trainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="546d18aa-924e-4dc3-9dcf-3f84a5d7a9e9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
