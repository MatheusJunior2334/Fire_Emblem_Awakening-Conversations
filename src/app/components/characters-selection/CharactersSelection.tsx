import React, { useEffect, useState } from "react";
import { GamePage } from "../game-page/GamePage";
import styles from './CharactersSelection.module.scss';
import { CharactersCard } from "./CharactersCard";

import { useLanguage } from "@/app/contexts/LanguageContext";

import { selectCharactersText, selectTwoCharacters, errorCharacterCombination, startGameText, backHomeText, changeDialoguesLanguage, loadingText } from "./CharactersSelectionTranslations";

// Mapeamento de combinações válidas entre personagens
const validCharacterCombinations: { [key: string]: string[] } = {
    Chrom: ['Lucina', 'Tharja'],
    Gaius: ['Tharja'],
    Lucina: ['Chrom'],
    Tharja: ['Chrom', 'Gaius']
}

// Interface representando informações de cada personagem
export interface CharacterInfo {
    image: string;
    character: string;
    classCharacter: string;
}


export const CharactersSelection: React.FC<{ onClose: () => void}> = ({ onClose }) => {
    const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
    const [allowStartDialogue, setAllowStartDialogue] = useState<boolean>(false);

    const { language } = useLanguage();

    // Função para tratar a seleção/deseleção de personagens
    const handleCharacterSelection = (character: string) => {
        if (selectedCharacters.includes(character)) {
            setSelectedCharacters((prevCharacters) => prevCharacters.filter((c) => c != character));
            setErrorMessage('');
        } else if (selectedCharacters.length < 2) {
            setSelectedCharacters((prevCharacters) => [...prevCharacters, character]);
            setErrorMessage('');
        } else {
            setErrorMessage(selectTwoCharacters[language].text2)
        }
    };

    // Função para iniciar o jogo e validar combinação de personagens
    const startGame = () => {
        if (selectedCharacters.length === 2 && isValidCharactersCombination()) {
            setGameStarted(true);
            setErrorMessage('');
        } else {
            setErrorMessage(errorCharacterCombination[language])
        }
    }

    // Função para validar combinação de personagens
    const isValidCharactersCombination = () => {
        const [character1, character2] = selectedCharacters.sort();
        const validCombinations = validCharacterCombinations[character1] || [];
        return validCombinations.includes(character2);
    }

    // Informações que compõem as Cards de cada personagem
    const charactersCardsInfo: CharacterInfo[] = [
        { image: '/assets/images/LucinaCard.png', character: 'Lucina', classCharacter: 'lucina' },
        { image: '/assets/images/ChromCard.png', character: 'Chrom', classCharacter: 'chrom',},
        { image: '/assets/images/GaiusCard.png', character: 'Gaius', classCharacter: 'gaius' },
        { image: '/assets/images/NowiCard.png', character: 'Nowi', classCharacter: 'nowi' },
        { image: '/assets/images/TharjaCard.png', character: 'Tharja', classCharacter: 'tharja' }
    ]

    // Função assíncrona para verificar carregamento de imagem
    const checkImageLoad = async (src: string) => {
        return new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = src;
        })
    }

    // Função assíncrona para carregar imagens
    const loadImages = async () => {
        try {
            const promises = charactersCardsInfo.map(async (characterInfo) => {
                return await checkImageLoad(characterInfo.image);
            });
            const results = await Promise.all(promises);
            const allLoaded = results.every((result) => result);
            setImagesLoaded(allLoaded);
        } catch (error) {
            console.error('Error loading images', error);
        }
    }

    // Efeito colateral para carregar imagens ao montar o componente
    useEffect(() => {
        loadImages();
    }, [])

    // Função para permitir ou não o início dos diálogos
    useEffect(() => {
        if (selectedCharacters.length === 2 && isValidCharactersCombination()) {
            setAllowStartDialogue(true)
        } else {
            setAllowStartDialogue(false);
        }
    }, [selectCharactersText, isValidCharactersCombination])

    // Função para renderizar a seleção de personagens (componente)
    const renderCharactersSelection = () => (
        <div id={styles.charactersSelection}>

            <header className={styles.charactersHeader}>
                <div>
                    <h2>{selectCharactersText[language]}</h2>
                    <h4>{selectTwoCharacters[language].text1}</h4>
                </div>

                <button className={`${styles.startDialogueButton} ${allowStartDialogue ? styles.allowStart : styles.notAllowStart}`} onClick={startGame}>{startGameText[language]}</button>
            </header>

            <div className={styles.cards}>

                {charactersCardsInfo.map((characterInfo, index) => (
                    <CharactersCard
                        key={index}
                        {...characterInfo}
                        isSelected={selectedCharacters.includes(characterInfo.character)}
                        onClick={() => handleCharacterSelection(characterInfo.character)}
                    />
                ))}
            </div>

            {errorMessage && <p>{errorMessage}</p>}
            
            <button onClick={onClose}>{backHomeText[language]}</button>
        </div>  
    )

    // TSX principal que condicionalmente renderiza a seleção de personagens, a página de jogo ou a tela de carregamento
    const text = loadingText[language];

    // Transforma cada caractere em um array de spans
    const spans = text.split('').map((char, index) => (
        <span key={index}>
            {char}
        </span>
    ))

    return (
        <div>
            {!imagesLoaded ? <div className={styles.loadingDiv}><p>{spans}</p></div> : !gameStarted ? renderCharactersSelection() : <GamePage characters={selectedCharacters} language={changeDialoguesLanguage[language]} />}
        </div>
    )
}