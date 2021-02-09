const HORA_MILIS = 3600000;
const MINUTO_MILIS = 60000;
const SEGUNDO_MILIS = 1000;

export const splitTime = (time: number) => {
    let horas = Math.trunc(time / HORA_MILIS);
    let minutos = Math.trunc((time - horas * HORA_MILIS) / MINUTO_MILIS);
    let segundos = Math.trunc((time - horas * HORA_MILIS - minutos * MINUTO_MILIS) / SEGUNDO_MILIS);
    return { horas: horas, minutos: minutos, segundos: segundos }
};

export const parseTime = (time: number): string => {
    if(time === 0) return ''
    if(time >= HORA_MILIS * 60) return 'Resetéame';

    const { horas, minutos, segundos } = splitTime(time);
    
    let horasStr = horas === 0 ? '' : String(horas).padStart(2,'0') + ':';
    let minutosStr = (minutos === 0 && horas === 0) ? '': String(minutos).padStart(2,'0') + ':';
    let segundosStr = String(segundos).padStart(2,'0');

    return `${horasStr}${minutosStr}${segundosStr}`;
};

export const parseMillis = (time: number): string => {
    if(time === 0) return '';
    if(time >= HORA_MILIS * 60) return '';
    const { horas, minutos, segundos } = splitTime(time);
    return String(time - horas * HORA_MILIS - minutos * MINUTO_MILIS - segundos * SEGUNDO_MILIS).substring(0,1);
};