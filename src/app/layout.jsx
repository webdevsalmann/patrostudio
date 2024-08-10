import { Archivo, Blinker, Rubik } from 'next/font/google'
import Header from '@/components/layouts/navbar/Header';
import Footer from '@/components/layouts/footer/Footer';
import Providers from '@/components/providers/providers';
import './globals.css'
import './helper.css'
import { siteMd } from '@/lib/datas/metaDatas';

// const rubik = Blinker({ subsets: ['latin'], weight:["100", "200", "300", "400", "600", "700", "800", "900"] });
const rubik = Archivo({ subsets: ['latin'], });

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
