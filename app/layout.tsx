import '@/app/ui/global.css';
import { lato } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Ledgerly Dashboard',
    default: 'Ledgerly Dashboard',
  },
  description: 'Ledgerly is a user-friendly billing application designed to simplify invoicing, payment tracking, and financial management. Streamline your billing processes and enhance efficiency with real-time updates and seamless integrations. Perfect for businesses of all sizes.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
