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
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
      </head>
      {/* <body className="flex h-screen"> */}
      <body>
        <div className="m-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
