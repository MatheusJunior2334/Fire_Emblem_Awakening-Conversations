import React from "react";
import styles from './ScreenOrientation.module.scss';

import { RotatePhoneIcon } from "../../../../public/assets/icons/RotatePhoneIcon";

export const ScreenOrientation: React.FC = () => {
    return (
        <div className={styles.screenOrientation} style={{ backgroundColor: '#fff' }}>
            <RotatePhoneIcon />
            <p>Gire o dispositivo para o modo paisagem para melhor experiência na plataforma</p>
        </div>
    )
}