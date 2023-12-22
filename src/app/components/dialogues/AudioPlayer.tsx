import React, { useState, useEffect, useRef } from "react";

interface AudioPlayerProps {
    audioSrc?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
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