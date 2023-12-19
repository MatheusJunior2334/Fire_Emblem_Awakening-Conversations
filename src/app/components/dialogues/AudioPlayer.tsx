import React, { useState, useEffect, useRef } from "react";

interface AudioPlayerProps {
    audioSrc?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
    const [userInteracted, setUserInteracted] = useState<boolean>(false);
    const [audioPlayed, setAudioPlayed] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleUserInteracted = () => {
            if (audioSrc && !audioPlayed) {
              setUserInteracted(true);
              setAudioPlayed(true);
      
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
    }, [audioPlayed, audioSrc])

    return audioSrc ? <audio ref={audioRef} src={audioSrc} autoPlay={userInteracted} /> : null;
}