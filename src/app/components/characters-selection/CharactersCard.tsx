import React from 'react';
import Image from 'next/image';
import styles from './CharactersCard.module.scss';

import { useLanguage} from '@/app/contexts/LanguageContext';
import { CharacterInfo } from './CharactersSelection';

import { characterTextCard } from './charactersSelectionTranslations';

interface CharacterCardProps extends CharacterInfo {
    isSelected: boolean;
    onClick: () => void;
}

export const CharactersCard: React.FC<CharacterCardProps>  = ({ image, character, isSelected, onClick }) => {
    const { language } = useLanguage();

    // Constante para facilitar a importação da imagem de fundo
    const backgroundImage = `url("/assets/images/${character + 'Background.png'}")`;

    // Constante para facilitar a nomeação do personagem para escolher a classe (estilização) adjacente
    const classCharacter = character.toLowerCase();

    // Constante para organizar o nome dos personagens em ordem alfabética, para evitar erros no alt

    return (
        <button
            type='button'
            id={styles.charactersCard}
            onClick={onClick}
            style={{
                background: isSelected ? `#D9D9D9 ${backgroundImage} 50% / cover no-repeat`: '#D9D9D9 50%'
            }}
            title={`${!isSelected ? characterTextCard[language].text1 : characterTextCard[language].text2}: ${character}`}
        >
           <div className={styles.imageContainer}>
            {/* Essa escolha de tamanho é para priorizar a qualidade da imagem, o seu tamanho real foi mudado pelo scss */}
            <Image
                src={image}
                alt={character}
                priority
                width={450}
                height={450}
            />
           </div>
          
            <div className={styles.textContainer}>
                <h3>{character}</h3>
                <div className={`${styles.textContent} ${isSelected ? styles[classCharacter] : ''}`}>
                    
                    {!isSelected && (  
                        <p>
                            {characterTextCard[language].text1.split(' ')[0]}
                            <br />
                            {characterTextCard[language].text1.split(' ')[1]}
                        </p>
                    )}

                    {isSelected && <p>{characterTextCard[language].text2}</p>}
                </div>
            </div>
        </button>
    )
}