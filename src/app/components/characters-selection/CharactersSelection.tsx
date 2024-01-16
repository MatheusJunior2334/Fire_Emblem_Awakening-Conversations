import React, { useEffect, useState } from "react";
import { GamePage } from "../game-page/GamePage";
import styles from './CharactersSelection.module.scss';
import { CharactersCard } from "./CharactersCard";

import { useLanguage } from "@/app/contexts/LanguageContext";

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
} from "./charactersSelectionTranslations";

import { SoundtrackConfirmation } from "../soundtrack-confirmation/SoundtrackConfirmation";

// Mapeamento de combinações válidas entre personagens
const validCharacterCombinations: { [key: string]: string[] } = {
    Chrom: ['Gaius', 'Lucina'],
    Gaius: ['Chrom', 'Tharja'],
    Henry: ['Tharja'],
    Lucina: ['Chrom'],
    Tharja: ['Gaius', 'Henry']
}

// Interface representando informações de cada personagem
export interface CharacterInfo {
    image: string;
    character: string;
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

    const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
    const [allowStartDialogue, setAllowStartDialogue] = useState<boolean>(false);

    // Constantes para habilitar ou não a trilha de fundo e as vozes dos personagens
    const [enableBackgroundMusic, setEnableBackgroundMusic] = useState<boolean>(false);
    const [enableAudioPlayer, setEnableAudioPlayer] = useState<boolean>(false);
    const [confirmChoices, setConfirmChoices] = useState<boolean>(false);

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
            setErrorMessage(errorOnlyTwoCharacters[language].text1);
            setTipMessage(errorOnlyTwoCharacters[language].text2)
        }
    };

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
        const validCombinations = validCharacterCombinations[character1] || [];
        return validCombinations.includes(character2);
    }

    // Informações que compõem as Cards de cada personagem
    const charactersCardsInfo: CharacterInfo[] = [
        { image: '/assets/images/ChromCard.png', character: 'Chrom'},
        { image: '/assets/images/CordeliaCard.png', character: 'Cordelia' },
        { image: '/assets/images/GaiusCard.png', character: 'Gaius' },
        { image: '/assets/images/HenryCard.png', character: 'Henry' },
        
        { image: '/assets/images/LucinaCard.png', character: 'Lucina' },
        { image: '/assets/images/NowiCard.png', character: 'Nowi' },
        { image: '/assets/images/TharjaCard.png', character: 'Tharja' }
    ]

    // Função assíncrona e constantes para verificar o carregamento das imagens das respectivas páginas, para assim renderizar o componente principal
    const characters = ['Chrom', 'Gaius', 'Henry', 'Lucina', 'Nowi', 'Tharja'];
    const emotions = ['Normal', 'Feliz', 'Raiva', 'Dor', 'Determinado', 'Background'];

    const gamePageImages: string[] = [
        '/assets/images/Conversations-background.jpg',
        '/assets/images/backgroundawakening2.png',
        '/assets/images/CharacterBox.png',
        '/assets/images/DialogueBox.png',
    ];

    const characterImages: string[] = [];
    const characterGifs: string[] = [];

    characters.forEach(character => {
        emotions.forEach(emotion => {
            const imagePath = `/assets/images/${character}${emotion}.png`;
            characterImages.push(imagePath);
        })
    })

    characters.forEach(character => {
        const imagePath = `/assets/images/${character}Gif.gif`;
        characterGifs.push(imagePath);
    })

    const allImages = [
        ...charactersCardsInfo.map(info => info.image),
        ...characterImages,
        ...characterGifs,
        ...gamePageImages
    ]

    const checkImageLoad = async (urls: string[]) => {
        const promises = urls.map(url => new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        }))
        return Promise.all(promises)
    }

    // Função assíncrona para carregar imagens
    const loadImages = async () => {
        try {
            const results = await checkImageLoad(allImages);
            const allLoaded = results.every(Boolean);
            setImagesLoaded(allLoaded);
        } catch (error) {
            console.error('Error loading images', error);
        }
    }

    // Efeito colateral para carregar imagens ao montar o componente
    useEffect(() => {
        loadImages();
    }, [])


    // Lógica para permitir ou não o início dos diálogos
    useEffect(() => {
        if (selectedCharacters.length === 2 && isValidCharactersCombination()) {
            setAllowStartDialogue(true)
        } else {
            setAllowStartDialogue(false);
        }
    }, [selectedCharacters, isValidCharactersCombination])


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

            {/* Div que será renderizada caso houver um erro na escolha de personagens */}
            {errorMessage && (
                <div className={styles.errorDiv}>
                    <div>
                        <h4>{warningMessageTitle[language]}</h4>
                        <p>{errorMessage}</p>
                        <p><span>{tipMessageTitle[language]}</span> {tipMessage}</p>
                        <button onClick={() => setErrorMessage('')}>OK</button>
                    </div>
                </div>
            )}
            
            <button onClick={onClose}>{backHomeText[language]}</button>

            
            <div className={styles.showSelectedCharactersContainer}>
                {selectedCharacters && selectedCharacters.map((character) => (
                    <div className={`${styles.showSelectedCharactersContent} ${styles[character.toLowerCase()]}`} key={character}>
                        <p>{character}</p>
                    </div>
                ))}
            </div>
            

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
            {!imagesLoaded ? (
                <div className={styles.loadingDiv}>
                    <p>{spans}</p>
                </div> 
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
                        <GamePage
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