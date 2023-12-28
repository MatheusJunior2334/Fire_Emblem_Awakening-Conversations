'use client'

import React from 'react'
import { HomePage } from './components/home-page/HomePage';
import { LanguageProvider } from './contexts/LanguageContext';

import { FullScreenButton } from './components/fullscreen-modal/FullScreenButton';

export default function Home() {

  return (
    <LanguageProvider>
      <FullScreenButton />
      <HomePage />
    </LanguageProvider>
  )
}