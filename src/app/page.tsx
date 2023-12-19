'use client'

import React from 'react'
import { HomePage } from './components/home-page/HomePage';
import { LanguageProvider } from './contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  )
}

{/* <main className={styles.main}>
{isClient && clientRendered ? (shouldPromptOrientationChange(orientation) ? <HomePage /> : <ScreenOrientation />) : null}
</main> */}