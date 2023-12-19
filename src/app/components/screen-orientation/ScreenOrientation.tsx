'use client'

import React from "react";
import styles from './ScreenOrientation.module.scss';

export const ScreenOrientation: React.FC = () => {
    return (
        <div className={styles.screenOrientation} style={{ backgroundColor: '#fff' }}>
            <p>Gire o dispositivo para o modo paisagem para melhor experiência na plataforma</p>
        </div>
    )
}