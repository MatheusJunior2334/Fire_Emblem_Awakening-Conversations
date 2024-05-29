'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
    language: string;
    changeLanguage: (newLanguage: string) => void;
    isLanguageConfirmed: boolean;
    confirmLanguage: () => void;
    handleChangeLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>("pt");
    const [isLanguageConfirmed, setIsLanguageConfirmed] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem("language");
            if (savedLanguage) {
                setLanguage(savedLanguage);
            }
        }
    }, []);

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        if (typeof window !== 'undefined') {
            localStorage.setItem("language", newLanguage);
        }
    };

    const confirmLanguage = () => {
        setIsLanguageConfirmed(true);
    };

    const handleChangeLanguage = () => {
        setIsLanguageConfirmed(false);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, isLanguageConfirmed, confirmLanguage, handleChangeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
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