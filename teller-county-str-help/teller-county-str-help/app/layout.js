import './globals.css';

export const metadata = {
  title: 'Teller County STR Help',
  description: 'Independent help for short-term rental owners preparing for Teller County STR licensing.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
