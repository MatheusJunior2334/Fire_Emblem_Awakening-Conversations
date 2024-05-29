import React, { useState, useEffect, useRef } from "react";

interface CharacterAudioPlayerProps {
    audioSrc?: string;
}

export const CharacterAudioPlayer: React.FC<CharacterAudioPlayerProps> = ({ audioSrc }) => {
    const [userInteracted, setUserInteracted] = useState<boolean>(false);
    const [audioPlayed, setAudioPlayed] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
      if (audioSrc && !audioPlayed) {
        setTimeout(() => {
          audioRef.current && audioRef.current.play();
        }, 300)
      }
    }, [audioSrc, audioPlayed])

    return audioSrc ? <audio ref={audioRef} src={audioSrc} autoPlay={false} /> : null;
}