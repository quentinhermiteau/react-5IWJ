'use client';

// import './globals.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../translations/en/global.json';
import fr from '../translations/fr/global.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className="flex h-screen"> */}
      <body>
        <div className="m-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
