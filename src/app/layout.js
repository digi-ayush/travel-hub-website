import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  metadataBase: new URL("https://travel-hub.in"),
  title: { default: "Travel-Hub | Group Trips from Delhi", template: "%s | Travel-Hub" },
  description: "Book premium group trips, weekend getaways, corporate trips and couple packages across Himachal Pradesh, Uttarakhand and Rajasthan with Delhi and Chandigarh pickups.",
  applicationName: "Travel-Hub",
  authors: [{ name: "Travel-Hub" }],
  creator: "Travel-Hub",
  publisher: "Travel-Hub",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
