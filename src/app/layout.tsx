import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rymal Gage Dental — Hamilton's Trusted Dentist | Same-Day Emergency Care",
  description: "Decades of expertise. Same-day emergencies. 500+ 5-star reviews. Hamilton's choice for gentle, modern dentistry. Book in 60 seconds.",
  openGraph: {
    title: "Rymal Gage Dental — Hamilton's Trusted Dentist",
    description: "Decades of expertise. Same-day emergencies. 500+ 5-star reviews.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Rymal Gage Dental Office",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Rymal Rd E",
                addressLocality: "Hamilton",
                addressRegion: "ON",
                postalCode: "L9B 1B9",
                addressCountry: "CA"
              },
              telephone: "+1-905-555-0199",
              url: "https://rymalgagedental.ca",
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "14:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "09:00", closes: "13:00" }
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "527",
                bestRating: "5"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
