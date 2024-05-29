'use client'

import styles from './styles/loading.module.scss';
import { loadingText } from "./data/translations/charactersSelection";
import { useLanguage } from "./contexts/languageContextProvider";

export default function Loading() {
    const { language } = useLanguage()

    const text = loadingText[language];
    const spans = text.split('').map((char, index) => <span key={index}>{char}</span>)

    return (
        <div className={styles.loadingDiv}>
            <p>{spans}</p>
        </div>
    )
}