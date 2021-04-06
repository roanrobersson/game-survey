export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';

export type Game = {
    id: number;
    title: string;
    platform: GamePlatform;
    label: string;
    value: number;
}

export type FormState = {
    name: string;
    age: string;
    gameId: string;
}

export type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;