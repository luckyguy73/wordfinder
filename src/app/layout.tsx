import Navbar from '@components/Navbar';
import FormProvider from '@context/form-context';
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
        className={`${mont.className} bg-orange-50 flex flex-col min-h-screen`}
      >
        <Navbar />
        <FormProvider>
          <main className='flex-grow m-4'>{children}</main>
        </FormProvider>
        <Footer />
      </body>
    </html>
  );
}
