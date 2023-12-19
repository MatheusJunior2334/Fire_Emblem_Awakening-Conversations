import React, { createContext, useContext, useState } from "react";

interface LanguageContextType {
    language: string;
    changeLanguage: (newLanguage: string) => void;
    islanguageConfirmed: boolean;
    confirmLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('pt');
    const [islanguageConfirmed, setIsLanguageConfirmed] = useState<boolean>(false);

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    }

    const confirmLanguage = () => {
        setIsLanguageConfirmed(true);
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, islanguageConfirmed, confirmLanguage }} >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
      throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export interface TranslationsType1 {
    [key: string] : string;
}

export interface TranslationsType2 {
    [key: string] : {
        text1: string;
        text2: string;
    }
}