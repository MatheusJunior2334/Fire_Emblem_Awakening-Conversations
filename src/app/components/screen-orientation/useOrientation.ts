import { useEffect, useState } from 'react';

export const useOrientation = () => {
    const isClient = typeof window === 'object';

    const [orientation, setOrientation] = useState(
        isClient ? window.screen.orientation.type : ''
    );

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const handleOrientationChange = () => {
            setOrientation(window.screen.orientation.type)
        }

        window.addEventListener('orientationchange', handleOrientationChange);

        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange)
        }
    }, [isClient])

    return orientation;
}