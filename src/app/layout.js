import './globals.css';
import { Josefin_Sans, Amatic_SC } from 'next/font/google';

const josefin_Sans = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={josefin_Sans.className}>{children}</body>
    </html>
  );
}
