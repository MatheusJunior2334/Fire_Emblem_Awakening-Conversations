import React, { useEffect, useState, useCallback } from "react";
import { CharactersConversation } from "../characters-conversation/charactersConversation";
import styles from '../../styles/charactersSelection.module.scss';
import { CharactersCard } from "./charactersCard";

import { useLanguage } from "../../../app/contexts/languageContextProvider";

import {
    selectCharactersText,
    errorOnlyTwoCharacters,
    errorCharactersCombination,
    errorSelectTwoCharacters,
    warningMessageTitle,
    tipMessageTitle,
    startGameText,
    backHomeText,
    changeDialoguesLanguage,
    loadingText,
} from "../../data/translations/charactersSelection";

import { SoundtrackConfirmation } from "../soundtrack-confirmation/soundtrackConfirmation";
import Loading from "@/app/loading";

// Mapeamento de combinações válidas entre personagens
const validCharacterCombinations: { [key: string]: string[] } = {
    Chrom: ['Gaius', 'Lucina', 'Lissa'],
    Cordelia: ['Gaius'],
    Gaius: ['Chrom', 'Cordelia', 'Tharja'],
    Henry: ['Tharja'],
    Lissa: ['Chrom'],
    Lucina: ['Chrom'],
    Tharja: ['Gaius', 'Henry']
}

// Interface representando informações de cada personagem
export interface CharacterInfo {
    image: string;
    character: string;
}

const charactersCardsInfo: CharacterInfo[] = [
    { image: '/assets/images/ChromCard.png', character: 'Chrom'},
    { image: '/assets/images/CordeliaCard.png', character: 'Cordelia' },
    { image: '/assets/images/GaiusCard.png', character: 'Gaius' },
    { image: '/assets/images/HenryCard.png', character: 'Henry' },
    
    { image: '/assets/images/LissaCard.png', character: 'Lissa' },
    { image: '/assets/images/LucinaCard.png', character: 'Lucina' },
    { image: '/assets/images/TharjaCard.png', character: 'Tharja' }
]

const useLoadImages = (urls: string[]) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        const load = async () => {
            const results = await Promise.all(urls.map(url => new Promise<boolean>(resolve => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = url;
            })));
            setLoaded(results.every(Boolean));
        };
        load();
    }, [urls])
    return loaded;
}

interface CharactersSelectionProps {
    onClose: () => void;
    onRestartGame: () => void;
}

export const CharactersSelection: React.FC<CharactersSelectionProps> = ({ onClose, onRestartGame }) => {
    const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [tipMessage, setTipMessage] = useState<string>('');

    const [allowStartDialogue, setAllowStartDialogue] = useState<boolean>(false);

    // Constantes para habilitar ou não a trilha de fundo e as vozes dos personagens
    const [enableBackgroundMusic, setEnableBackgroundMusic] = useState<boolean>(false);
    const [enableAudioPlayer, setEnableAudioPlayer] = useState<boolean>(false);
    const [confirmChoices, setConfirmChoices] = useState<boolean>(false);

    const { language } = useLanguage();

    const allImages = [
        ...charactersCardsInfo.map(info => info.image),
        ...['Chrom', 'Cordelia', 'Gaius', 'Henry', 'Lissa', 'Lucina', 'Tharja'].flatMap(character => [
            'Normal', 'Feliz', 'Raiva', 'Dor', 'Determinado', 'Background'
        ].map(emotion => `/assets/images/${character}${emotion}.png`)),
        ...['Chrom', 'Cordelia', 'Gaius', 'Henry', 'Lissa', 'Lucina', 'Tharja'].map(character => `/assets/images/${character}Gif.gif`),
        '/assets/images/Conversations-background.jpg',
        '/assets/images/backgroundawakening2.png',
        '/assets/images/CharacterBox.png',
        '/assets/images/DialogueBox.png',
        '/assets/images/FogImage1.png',
        '/assets/images/FogImage2.png'
    ]

    const imagesLoaded = useLoadImages(allImages)

    // Função para tratar a seleção/deseleção de personagens
    const handleCharacterSelection = useCallback((character: string) => {
        setSelectedCharacters(prevCharacters => {
            const isSelected = prevCharacters.includes(character);
            const newCharacters = isSelected ? prevCharacters.filter(c => c !== character) : [...prevCharacters, character];
            if (newCharacters.length > 2) {
                setErrorMessage(errorOnlyTwoCharacters[language].text1);
                setTipMessage(errorOnlyTwoCharacters[language].text2);
                return prevCharacters;
            } else {
                setErrorMessage('');
                return newCharacters;
            }
        });
    }, [language]);

    // Função para iniciar o jogo e validar combinação de personagens
    const startGame = () => {
        if (selectedCharacters.length === 2 && isValidCharactersCombination()) {
            setGameStarted(true);
            setErrorMessage('');
        } else if (selectedCharacters.length < 2) {
            setErrorMessage(errorSelectTwoCharacters[language].text1)
            setTipMessage(errorSelectTwoCharacters[language].text2)
        } else {
            setErrorMessage(errorCharactersCombination[language].text1)
            setTipMessage(errorCharactersCombination[language].text2)
        }
    }

    // Função para validar combinação de personagens
    const isValidCharactersCombination = () => {
        const [character1, character2] = selectedCharacters.sort();

        if (
            (character1 === 'Chrom' && character2 === 'Lissa') ||
            (character1 === 'Cordelia' && character2 === 'Gaius')
        ) {
            selectedCharacters.reverse();
        }

        const sortedCharacters = selectedCharacters;

        const validCombinations = validCharacterCombinations[sortedCharacters[0]] || [];
        return validCombinations.includes(sortedCharacters[1]);
    }

    // Lógica para permitir ou não o início dos diálogos
    useEffect(() => {
        const isValid = selectedCharacters.length === 2 && validCharacterCombinations[selectedCharacters[0]]?.includes(selectedCharacters[1]);
        setAllowStartDialogue(isValid);
    }, [selectedCharacters]);


    // Funções para habilitar ou não a trilha de fundo e as vozes dos personagens (Função será utilizada no componente SoundtrackConfirmation)
    const toggleBackgroundMusic = () => {
        setEnableBackgroundMusic(!enableBackgroundMusic);
    }

    const toggleAudioPlayer = () => {
        setEnableAudioPlayer(!enableAudioPlayer);
    }

    const handleConfirmMusicChoices = () => {
        setConfirmChoices(true);
    }


    // Função para renderizar a seleção de personagens (componente)
    const renderCharactersSelection = () => (
        <div id={styles.charactersSelection}>

            <header className={styles.charactersHeader}>
                <div>
                    <h2>{selectCharactersText[language].text1}</h2>
                    <h4>{selectCharactersText[language].text2}</h4>
                </div>

                <button className={`${styles.startDialogueButton} ${allowStartDialogue ? styles.allowStart : styles.notAllowStart}`} onClick={startGame}>
                    {startGameText[language]}
                </button>
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

            {/* Div que será renderizada caso houver um erro na escolha de personagens */}
            {errorMessage && (
                <div className={styles.errorDiv}>
                    <div className={styles.errorBackdrop} onClick={() => setErrorMessage('')} />
                    <div className={styles.errorBox}>
                        <h4>{warningMessageTitle[language]}</h4>
                        <p>{errorMessage}</p>
                        <p><span>{tipMessageTitle[language]}</span> {tipMessage}</p>
                        <button onClick={() => setErrorMessage('')}>OK</button>
                    </div>
                </div>
            )}
            
            <button className={styles.returnHomeButton} onClick={onClose}>{backHomeText[language]}</button>
            
            <div className={styles.showSelectedCharactersContainer}>
                {selectedCharacters && selectedCharacters.map((character) => (
                    <div className={`${styles.showSelectedCharactersContent} ${styles[character.toLowerCase()]}`} key={character}>
                        <p>{character}</p>
                    </div>
                ))}
            </div>
        </div>  
    )

    return (
        <div>
            {!imagesLoaded ? (
                <Loading />
            ): !gameStarted ? (
                renderCharactersSelection()
            ) : (
                <>
                    {!confirmChoices ? (
                        <SoundtrackConfirmation
                            backgroundMusic={toggleBackgroundMusic}
                            isBackgroundMusic={enableBackgroundMusic}
                            audioPlayer={toggleAudioPlayer}
                            isAudioPlayer={enableAudioPlayer}
                            confirmChoices={handleConfirmMusicChoices}
                            selectedCharacters={selectedCharacters}
                        />
                    ) : (
                        <CharactersConversation
                            characters={selectedCharacters}
                            language={changeDialoguesLanguage[language]}
                            enableBackgroundMusic={enableBackgroundMusic}
                            enableAudioPlayer={enableAudioPlayer}
                            onRestartGame={onRestartGame}
                        />
                    )}  
                </>
            )}
        </div>
    )
}