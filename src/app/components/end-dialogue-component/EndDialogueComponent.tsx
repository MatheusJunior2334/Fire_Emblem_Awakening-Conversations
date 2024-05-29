import React from 'react';
import styles from '../../styles/endDialogueComponent.module.scss';

interface EndDialogueComponentProps {
    onRestartGame: () => void;
}

export const EndDialogueComponent: React.FC<EndDialogueComponentProps> = ({ onRestartGame }) => {
    return (
        <div className={styles.endDialogueComponent}>
            <div className={styles.endDialogueBackdrop} />

            <div className={styles.endDialogueBox}>
                <p>End of dialogue. Do you want to start a new one?</p>
                <button onClick={onRestartGame}>Return to Home Page</button>
            </div>
        </div>
    )
}