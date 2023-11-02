import '@styles/globals.css';

import { Footer } from '@components/Footer';

import { League_Spartan as LeagueSpartan } from 'next/font/google'

const leagueSpartan = LeagueSpartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Frontend Mentor | Dine Restaurant',
  description: 'Challenge by Frontend Mentor. Coded by Mateus Belício.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`${leagueSpartan.variable} font-sans`}>
        <main className='app'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
