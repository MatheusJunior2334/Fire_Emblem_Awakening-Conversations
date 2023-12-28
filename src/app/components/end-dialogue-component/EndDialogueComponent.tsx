import React from 'react';
import styles from './EndDialogueComponent.module.scss';

interface EndDialogueComponentProps {
    onRestartGame: () => void;
}

export const EndDialogueComponent: React.FC<EndDialogueComponentProps> = ({ onRestartGame }) => {
    return (
        <div id={styles.endDialogueComponent}>
            <p>End of dialogue. Do you want to start a new one?</p>
            <button onClick={onRestartGame}>Return to Home Page</button>
        </div>
    )
}