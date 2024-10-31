
import "./globals.css";

export const metadata = {
  title: "Quiz app",
  description: "Fun full quiz for all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
