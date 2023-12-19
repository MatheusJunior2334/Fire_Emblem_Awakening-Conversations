export const shouldPromptOrientationChange = (orientation: string): boolean => {
    return orientation === 'landscape-primary' || orientation === 'landscape-secondary';
}