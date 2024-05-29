export interface Dialogue {
    character: string,
    text: string,
    emotion: string;
    audio?: string;
}

export interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}