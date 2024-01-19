/* eslint-disable camelcase */
import { DM_Sans } from 'next/font/google';
import PropTypes from 'prop-types';
import './globals.css';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const openGraphImage = { images: ["https://github.com/ellendutra/coffee-collection/assets/36541266/8ce77cdb-3fcf-47bc-a4ba-426beab1aadc"] };

export const metadata = {
  title: 'Coffee Collection',
  description:
    'Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.',
  openGraph: {
    ...openGraphImage,
    title: 'Coffee Collection',
    description:'Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.',
    url: "https://coffee-collection.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
