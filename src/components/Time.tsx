import type { timeElapsed } from '../types';

export default function Time({ timeElapsed }: { timeElapsed: timeElapsed }) {
    return (
        <>
            {' '}
            {timeElapsed.years > 0 ? (
                <>
                    {timeElapsed.years} {timeElapsed.years === 1 ? 'ano' : 'anos'}
                    {timeElapsed.months > 0 && ` e ${timeElapsed.months} ${timeElapsed.months === 1 ? 'mês' : 'meses'}`}
                </>
            ) : timeElapsed.months > 0 ? (
                <>
                    {timeElapsed.months} {timeElapsed.months === 1 ? 'mês' : 'meses'}
                    {timeElapsed.days > 0 && ` e ${timeElapsed.days} ${timeElapsed.days === 1 ? 'dia' : 'dias'}`}
                </>
            ) : timeElapsed.days > 0 && (
                <>
                    {timeElapsed.days} {timeElapsed.days === 1 ? 'dia' : 'dias'}
                </>
            )}{' '}
        </>
    );
}

export function Time2({ timeElapsed }: { timeElapsed: timeElapsed }) {
    return (
        <>
            {' '}
            {timeElapsed.years > 0 ? (
                <>
                    {timeElapsed.years} {timeElapsed.years === 1 ? 'ano' : 'anos'}
                    {timeElapsed.months > 0 && ` e ${timeElapsed.months} ${timeElapsed.months === 1 ? 'mês' : 'meses'}`}
                </>
            ) : (
                <>
                    {timeElapsed.months} {timeElapsed.months === 1 ? 'mês' : 'meses'}
                </>
            )}{' '}
        </>
    );
}
