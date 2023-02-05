"use client";
import { useEffect } from 'react'
import LanguageStore from '@stores/LanguageStore';
import TR from '@localization/TR.json';
import EN from '@localization/EN.json';
import { b64d, b64e } from '@utils/hashService.utils';
import { getStorageItem, insertStorageItem } from '@utils/storageHash.utils';
import { Inter } from '@next/font/google';
import Navbar from '@/layout/Navbar';
import '@styles/global.css';
import { FudSpinProvider } from "@/context/appContext";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const store = LanguageStore();
  useEffect(() => {
    const GetLangugageList = async () => {
      const BrowserLang = navigator.language.split('-')[0].toLocaleLowerCase();
      const languages = getStorageItem("preferences");
      if (BrowserLang === "tr") {
        let TRLang = languages;
        if (TRLang == undefined || b64e(JSON.stringify(languages)) != b64e(JSON.stringify([...TR]))) {
          TRLang = [...TR];
          insertStorageItem("preferences", TRLang)
        }
        store.setCurrentLanguageList(TRLang)
      } else {
        let ENLang = languages;
        if (ENLang == undefined || b64e(JSON.stringify(languages)) != b64e(JSON.stringify([...EN]))) {
          ENLang = [...EN];
          insertStorageItem("preferences", ENLang)
        }
        store.setCurrentLanguageList(ENLang)
      }
    }

    GetLangugageList();
  }, [])
  return (
    <html lang="en" className={`dark ${interFontFamily.className}`}>
      <head />
      <body className=" bg-lightModeContainerColor dark:bg-darkModeContainerColor font-sans">
        <FudSpinProvider>
          <Navbar />
          <main>{children}</main>
        </FudSpinProvider>
      </body>
    </html>
  )
}
