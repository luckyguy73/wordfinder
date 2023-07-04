import Navbar from '@components/Navbar';
import { Montserrat } from 'next/font/google';
import Footer from '../components/Footer';
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
      <body
        className={`${mont.className} bg-orange-50 flex flex-col min-h-full sm:min-h-screen`}
      >
        <Navbar />
        <main className='flex-grow m-4'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
