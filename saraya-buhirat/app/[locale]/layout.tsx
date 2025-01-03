import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@radix-ui/react-toast";
import { Cairo } from "next/font/google";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const fontFamily = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "سرايا البحيرات",
  description: "مدن عقارية متطورة في مدينة جدة",
  icons: ['/assets/icons/logo.svg']
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${fontFamily.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <ToastProvider> */}
            {children}
            {/* <Toaster /> */}
          {/* </ToastProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
