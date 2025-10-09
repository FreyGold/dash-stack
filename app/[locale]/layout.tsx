import type { Metadata } from "next";
import { Nunito_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import UiProvider from "@/services/context/UiProvider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "@ant-design/v5-patch-for-react-19";
import LazyAppProviders from "@/services/context/LazyAppProviders";
import { SEOUtils } from "@/libs/seo-utils";
import { StructuredData } from "@/components/shared/StructuredData";
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Dash Stack - Advanced Dashboard & Analytics Platform",
    template: "%s | Dash Stack"
  },
  description: "Powerful dashboard and analytics platform for businesses. Track performance, manage data, and gain insights with our comprehensive dashboard solution.",
  keywords: ["dashboard", "analytics", "business intelligence", "data visualization", "performance tracking", "management"],
  authors: [{ name: "Dash Stack Team" }],
  creator: "Dash Stack",
  publisher: "Dash Stack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL ? new URL(process.env.NEXT_PUBLIC_BASE_URL) : new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Dash Stack - Advanced Dashboard & Analytics Platform',
    description: 'Powerful dashboard and analytics platform for businesses. Track performance, manage data, and gain insights with our comprehensive dashboard solution.',
    siteName: 'Dash Stack',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dash Stack Dashboard Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dash Stack - Advanced Dashboard & Analytics Platform',
    description: 'Powerful dashboard and analytics platform for businesses. Track performance, manage data, and gain insights with our comprehensive dashboard solution.',
    images: ['/og-image.png'],
    creator: '@dashstack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION && { google: process.env.GOOGLE_SITE_VERIFICATION }),
    ...(process.env.YANDEX_VERIFICATION && { yandex: process.env.YANDEX_VERIFICATION }),
    ...(process.env.YAHOO_VERIFICATION && { yahoo: process.env.YAHOO_VERIFICATION }),
    ...(process.env.BING_VERIFICATION && { other: { 'msvalidate.01': process.env.BING_VERIFICATION } }),
  },
};
const notoSans = Noto_Sans_Arabic({
  variable: "--font-noto-sans",
  subsets: ["arabic"],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
               (function() {
                const lightTheme = {
                  primary: "#4880FF",
                  foreground: "#ffffff",
                  "background-dark": "#F5F6FA",
                  border: "#D5D5D5",
                  text: "#202224",
                  "text-inverse": "#FFFFFF",
                  "text-light": "#fff",
                  background: "#F5F6FA",
                  warning: "#FEC53D",
                  danger: "#F93C65",
                  "danger-light": "#FF9066",
                  success: "#00B69B",
                  purple: "#8280FF",
                  "purple-opacity": "#8280FF33",
                  "warning-opacity": "#FEC53D33",
                  "danger-opacity": "#F93C6533",
                  "success-opacity": "#00B69B33",
                  delivered: "#00B69B",
                  pending: "#FCBE2D",
                  rejected: "#FD5454",
                  "bg-table-header": "#F1F4F9"
                };
                
                const root = document.documentElement;
                Object.entries(lightTheme).forEach(([key, value]) => {
                  root.style.setProperty('--c-' + key, value);
                });
                
                // Add smooth transitions for theme changes
                root.style.setProperty('transition', 'background-color 0.2s ease, color 0.2s ease');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${nunitoSans.variable} antialiased ${notoSans.variable}`}
      >
        <StructuredData data={SEOUtils.generateOrganizationStructuredData()} />
        <StructuredData data={SEOUtils.generateWebSiteStructuredData()} />
        <NextIntlClientProvider>
          <UiProvider locale={locale}>
            <LazyAppProviders licenseKey="your-license-key">
              {children}
            </LazyAppProviders>
          </UiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
