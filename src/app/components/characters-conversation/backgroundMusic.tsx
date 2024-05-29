import React, { useEffect, useRef, useState } from "react";

interface BackgroundMusicProps {
  musicSrc: string | null;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ musicSrc }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isUserInteracted, setIsUserInteracted] = useState<boolean>(false);

    useEffect(() => {
        const handleUserInteracted = () => {
            if (musicSrc) {
              setIsUserInteracted(true);
      
              if (audioRef.current) {
                audioRef.current.volume = 0.5;
                audioRef.current.play().catch((error) => {
                  console.error("Erro ao reproduzir áudio:", error);
                });
              }
            }
          };
      
          document.addEventListener("click", handleUserInteracted);
      
          return () => {
            document.addEventListener("click", handleUserInteracted);
          };

    }, [musicSrc])

    return musicSrc ? <audio src={musicSrc} ref={audioRef} autoPlay={true} loop /> : null
}