import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header/Header';
import { Quicksand } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AuthProvider } from '@/contexts/authContext';
import { cookies } from 'next/headers';
import { AlertProvider } from '@/contexts/alertContext';
import Head from 'next/head';

const mainFont = Quicksand({ weight: '400', subsets: ['latin'], preload: false });

export const metadata: Metadata = {
  title: 'EatyList',
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'preconnect',
      url: '/_next/image',
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const token = cookies().get('JWT')?.value || null;

  return (
    <html lang={locale}>
      <Head>
        <link rel="preconnect" href="/_next/image" />
      </Head>
      <body className={mainFont.className} style={{ fontSize: '1.2rem' }}>
        <NextIntlClientProvider messages={messages}>
          <AlertProvider>
            <AuthProvider initialToken={token}>
              <Header />
              {children}
            </AuthProvider>
          </AlertProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
