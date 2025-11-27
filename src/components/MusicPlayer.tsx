import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { type MusicPlayerProps, type Song } from '../types';
import './MusicPlayer.css';

export function MusicPlayer({ playlist }: MusicPlayerProps) {
    const [shuffledPlaylist, setShuffledPlaylist] = useState<Song[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const shuffled = [...playlist].sort(() => Math.random() - 0.5);
        setShuffledPlaylist(shuffled);
        setCurrentIndex(0);
    }, [playlist]);

    const currentSong = shuffledPlaylist[currentIndex];

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        setCurrentIndex((prev) => (prev + 1) % shuffledPlaylist.length);
        setIsPlaying(true);
    };

    const previousTrack = () => {
        setCurrentIndex((prev) => (prev - 1 + shuffledPlaylist.length) % shuffledPlaylist.length);
        setIsPlaying(true);
    };

    const handleEnded = () => {
        nextTrack();
    };

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play();
        }
    }, [currentIndex, isPlaying]);

    if (!currentSong) return null;

    return (
        <>
            <div className="music-card">
                <div className="music-content">
                    <div className="album-cover">
                        <img src={currentSong.coverUrl} alt={currentSong.title} />
                        {isPlaying && (
                            <div className="playing-overlay">
                                <div className="playing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="song-details">
                        <div className="song-info">
                            <h3>{currentSong.title}</h3>
                            <p>{currentSong.artist}</p>
                        </div>

                        <div className="controls">
                            <button onClick={previousTrack} className="control-btn">
                                <SkipBack size={20} />
                            </button>

                            <button onClick={togglePlay} className="control-btn play-btn">
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                            </button>

                            <button onClick={nextTrack} className="control-btn">
                                <SkipForward size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <audio ref={audioRef} src={`songs/${currentSong.audioUrl}`} onEnded={handleEnded} />
        </>
    );
}
