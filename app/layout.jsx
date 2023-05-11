import '@styles/globals.css';

import { Footer } from '@components/Footer';

export const metadata = {
  title: 'Frontend Mentor | Dine Restaurant',
  description: 'Challenge by Frontend Mentor. Coded by Mateus Belício.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main className='app'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
