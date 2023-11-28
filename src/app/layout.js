'use client';

// import './globals.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../translations/en/global.json';
import fr from '../translations/fr/global.json';
import { createContext, useState } from "react";
import { AuthProvider } from "@/contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

export const ThemeContext = createContext();

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <html lang="en">
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
      </head>
      {/* <body className="flex h-screen"> */}
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeContext.Provider value={{theme, setTheme}}>
              <div className="m-auto">
                {children}
              </div>
            </ThemeContext.Provider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
