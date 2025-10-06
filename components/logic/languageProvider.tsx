'use client';
import { useState, createContext, ReactNode } from 'react';

type languageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const languageContext = createContext<languageContextType>({
  language: 'english',
  setLanguage: () => {},
});

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState('english');
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}
