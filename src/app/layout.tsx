"use client";
import '@styles/tailwind.css';
import '@styles/index.css';
import { b64d, b64e } from '@/utils';
import Navbar from '@/components/Navbar/Navbar';
import { useEffect } from 'react'
import LanguageStore from '@stores/LanguageStore';
import TR from '@localization/TR.json';
import EN from '@localization/EN.json';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const store = LanguageStore();
  useEffect(() => {
    Storage.prototype.setObjectHash = (key: string, myObject: any) => {
      localStorage.setItem(key, b64e(JSON.stringify(myObject)));
    }
    Storage.prototype.getObjectHash = (key: string) => {
      var myObject: any = localStorage.getItem(key);
      if (myObject === null)
        return null;
      return b64d(myObject) && JSON.parse(b64d(myObject));
    }
    const GetLangugageList = async () => {
      const BrowserLang = navigator.language.split('-')[0].toLocaleLowerCase();
      const languages = localStorage.getObjectHash("preferences");
      if (BrowserLang === "tr") {
        let TRLang = languages;
        if (TRLang == undefined || b64e(JSON.stringify(languages)) != b64e(JSON.stringify([...TR]))) {
          TRLang = [...TR];
          localStorage.setObjectHash("preferences", TRLang)
        }
        store.setCurrentLanguageList(TRLang)
      } else {
        let ENLang = languages;
        if (ENLang == undefined || b64e(JSON.stringify(languages)) != b64e(JSON.stringify([...EN]))) {
          ENLang = [...EN];
          localStorage.setObjectHash("preferences", ENLang)
        }
        store.setCurrentLanguageList(ENLang)
      }
    }

    GetLangugageList();
  }, [])
  return (
    <html lang="en" className='dark'>
      <head />
      <body className=" bg-lightModeContainerColor dark:bg-darkModeContainerColor font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
