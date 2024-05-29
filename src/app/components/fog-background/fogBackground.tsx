import React from "react";
import styles from '../../styles/fogBackground.module.scss';

export const FogBackground: React.FC = () => {
    return (
       <div id={styles.fog}>
        <div className={`${styles.image} ${styles.image1}`}></div>
        <div className={`${styles.image} ${styles.image2}`}></div>
       </div>
    )
}

 // <>
        //     {[1].map((layer) => (
        //         <div key={layer} id={styles[`foglayer_0${layer}`]} className={styles.fogLayer}>
        //             <div className={`${styles.image} ${styles.image01}`} />
        //             <div className={`${styles.image} ${styles.image02}`} />
        //         </div>
        //     ))}
        // </>