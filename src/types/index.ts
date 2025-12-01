export interface Song {
    id: string | number;
    title: string;
    artist: string;
    coverUrl: string;
    audioUrl?: string;
}

export interface MusicPlayerProps {
    playlist: Song[];
}

export interface Photo {
    id: string | number;
    url: string;
    caption?: string;
    date?: string;
    location?: string;
    comment?: string;
}

export interface timeElapsed {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface MessageTextProps {
    timeElapsed: timeElapsed;
}
