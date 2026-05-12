import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://travel-hub.in"),

  title: {
    default: "Travel-Hub | Group Trips from Delhi",
    template: "%s | Travel-Hub",
  },

  description:
    "Book premium group trips, weekend getaways, corporate trips and couple packages across Himachal Pradesh, Uttarakhand and Rajasthan with Delhi and Chandigarh pickups.",

  applicationName: "Travel-Hub",

  authors: [{ name: "Travel-Hub" }],

  creator: "Travel-Hub",

  publisher: "Travel-Hub",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "Mqn_EWVJj7PfxDjkEmcsFDGusFwy92gBVNnvCzq754Y",
  },

  openGraph: {
    title: "Travel-Hub | Group Trips from Delhi",

    description:
      "Premium group trips, weekend getaways and adventure tours across Himachal, Uttarakhand and Rajasthan.",

    url: "https://travel-hub.in",

    siteName: "Travel-Hub",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Travel-Hub",

    description:
      "Premium group trips and weekend getaways from Delhi.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <Navbar />
        {children}
      </body>
      <Analytics/>
      <SpeedInsights/>
    </html>
  );
}
