import Navbar from '@app/components/Navbar';
import { Montserrat } from 'next/font/google';
import './globals.css';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Wordfinder',
  description: 'Find words based on user criteria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
