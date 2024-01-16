import React from "react";
import styles from './ScreenOrientation.module.scss';

import { RotatePhoneIcon } from "../../../../public/assets/icons/RotatePhoneIcon";

import { TranslationsType1, useLanguage } from "@/app/contexts/LanguageContext";

const screenOrientationText: TranslationsType1 = {
    pt: "Gire o dispositivo para o modo paisagem para melhor experiência na plataforma",
    en: "Rotate the device to landscape mode for a better experience on the platform",
    de: "Drehen Sie das Gerät in den Querformatmodus für eine bessere Erfahrung auf der Plattform"
}

export const ScreenOrientation: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className={styles.screenOrientation}>
            <RotatePhoneIcon />
            <p>{screenOrientationText[language]}</p>
        </div>
    )
}