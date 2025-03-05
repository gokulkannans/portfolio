import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Gokul Kannan Selvaraj | Portfolio",
  description: "I'm gokul kannan software developer in london, United Kingdom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="google-site-verification" content="mquOphr8WpScZL96q4lStFlYlNCCP3yFlAEwUwHhuj4" />
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
