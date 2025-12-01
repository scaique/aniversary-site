import { Calendar, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import MessageText from './components/MessageText';
import { MusicPlayer } from './components/MusicPlayer';
import { PhotoGallery } from './components/PhotoGallery';
import { START_DATE } from './data/data';
import { playlist } from './data/playlist';
import { calculateTimeElapsed } from './utils/timeCalculator';

export default function App() {
    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateTime = () => {
            setTimeElapsed(calculateTimeElapsed(START_DATE));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            <div className="container">
                <div className="header">
                    <div className="hearts-decoration">
                        <Heart size={16} />
                        <Heart size={20} fill="currentColor" />
                        <Heart size={16} />
                    </div>
                </div>

                <MusicPlayer playlist={playlist} />

                <div className="time-counter">
                    <Calendar size={18} className="calendar-icon" />
                    <div className="time-text">
                        <span className="time-label">Juntos há</span>
                        <div className="time-values">
                            {timeElapsed.years > 0 && (
                                <span className="time-unit">
                                    <strong>{timeElapsed.years}</strong> {timeElapsed.years === 1 ? 'ano' : 'anos'}
                                </span>
                            )}
                            {timeElapsed.months > 0 && (
                                <span className="time-unit">
                                    <strong>{timeElapsed.months}</strong> {timeElapsed.months === 1 ? 'mês' : 'meses'}
                                </span>
                            )}
                            {timeElapsed.days > 0 && (
                                <span className="time-unit">
                                    <strong>{timeElapsed.days}</strong> {timeElapsed.days === 1 ? 'dia' : 'dias'}
                                </span>
                            )}
                        </div>
                        <div className="time-details">
                            {String(timeElapsed.hours).padStart(2, '0')}:{String(timeElapsed.minutes).padStart(2, '0')}:{String(timeElapsed.seconds).padStart(2, '0')}
                        </div>
                    </div>
                </div>

                <PhotoGallery />

                <MessageText timeElapsed={timeElapsed} />
            </div>
        </div>
    );
}
