import Footer from "./components/Footer/footer";
import "./globals.scss";

export const metadata = {
  title: "Car Store",
  description: "Book Your Car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
