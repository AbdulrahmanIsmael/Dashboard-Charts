'use client';
import { MouseEvent } from 'react';
import { useContext } from 'react';
import { languageContext } from '../logic/languageProvider';

export default function Header({ font }: { font: string }) {
  const { language, setLanguage } = useContext(languageContext);
  const translations = {
    firstHeading: {
      english: 'Welcome Back, Super Admin',
      arabic: 'مرحبًا بعودتك، الأدمن',
    },
    secondHeading: {
      english: 'Dashboard',
      arabic: 'لوحة التحكم',
    },
  };

  const handleLanguageChange = function (e: MouseEvent<HTMLButtonElement>) {
    const language = (e.currentTarget.textContent || '').toLowerCase();
    setLanguage(language === 'english' ? 'english' : 'arabic');
  };

  return (
    <header
      dir={language === 'english' ? 'ltr' : 'rtl'}
      className={`${font} pb-3 border-b border-b-[#0000001A] flex justify-between`}
    >
      <h2 className="text-primary text-[23px] font-medium">
        {language === 'english'
          ? translations.firstHeading.english
          : translations.firstHeading.arabic}
      </h2>
      <div className="flex gap-2">
        <button
          type="button"
          className={`text-sm ${language === 'english' ? 'active-btn' : 'btn'}`}
          onClick={handleLanguageChange}
        >
          English
        </button>
        <button
          type="button"
          className={`text-sm ${language === 'arabic' ? 'active-btn' : 'btn'}`}
          onClick={handleLanguageChange}
        >
          العربية
        </button>
      </div>
      <h3 className="text-black text-lg font-medium">
        {' '}
        {language === 'english'
          ? translations.secondHeading.english
          : translations.secondHeading.arabic}
      </h3>
    </header>
  );
}
