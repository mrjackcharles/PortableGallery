import localFont from "next/font/local";
import "./globals.css";

const googleSansCode = localFont({
    src: [
        {
            path: "./fonts/GoogleSansCode-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-google-sans-code",
    display: "swap",
});

export const metadata = {
    title: "Portable Gallery",
    description: "A personal photography gallery by Jack Charles.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${googleSansCode.variable} ${googleSansCode.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
