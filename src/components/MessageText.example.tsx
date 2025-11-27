import { Heart } from 'lucide-react';
import type { timeElapsed } from '../types';
import './MessageText.css';
import Time, { Time2 } from './Time';

export default function MessageText({ timeElapsed }: { timeElapsed: timeElapsed }) {
    return (
        <div className="love-message">
            <div className="hearts-decoration">
                <Heart size={16} />
                <Heart size={20} fill="currentColor" />
                <Heart size={16} />
            </div>
            <p className="message-text">
                já faz <Time timeElapsed={timeElapsed} /> desde que começamos a namorar/casar!
            </p>
            <div className="message-footer">
                <span>te amo muito meu amor,</span>
                <span className="signature">
                    feliz <Time2 timeElapsed={timeElapsed} />
                    <Heart size={16} fill="currentColor" />
                </span>
            </div>
        </div>
    );
}
