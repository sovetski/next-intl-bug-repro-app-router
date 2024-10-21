import {routing} from '@/src/i18n/routing';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>next-intl-bug-repro-app-router</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
