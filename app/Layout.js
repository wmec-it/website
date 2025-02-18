import './globals.css';

export const metadata = {
  title: 'IT Security',
  description: 'IT Security - Class of 2026',
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
