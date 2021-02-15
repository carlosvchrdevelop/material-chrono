const DIA_MILIS = 86400000;
const HORA_MILIS = 3600000;
const MINUTO_MILIS = 60000;
const SEGUNDO_MILIS = 1000;

export const splitTime = (time: number) => {
    let dias = Math.trunc(time / DIA_MILIS);
    let horas = Math.trunc((time - dias * DIA_MILIS) / HORA_MILIS);
    let minutos = Math.trunc((time - dias * DIA_MILIS - horas * HORA_MILIS) / MINUTO_MILIS);
    let segundos = Math.trunc((time - dias * DIA_MILIS - horas * HORA_MILIS - minutos * MINUTO_MILIS) / SEGUNDO_MILIS);
    return { dias: dias, horas: horas, minutos: minutos, segundos: segundos }
};

export const parseTime = (time: number): string => {
    const { dias, horas, minutos, segundos } = splitTime(time);
    
    let horasStr = (dias === 0 && horas === 0) ? '' : String(horas).padStart(2,'0') + ':';
    let minutosStr = (dias === 0 && horas === 0 && minutos === 0) ? '': String(minutos).padStart(2,'0') + ':';
    let segundosStr = String(segundos).padStart(2,'0');

    return `${horasStr}${minutosStr}${segundosStr}`;
};

export const parseDays = (time: number): string => {
    let dias = splitTime(time).dias;
    return (dias > 0) ? `${dias}d` : '';
}

export const parseMillis = (time: number): string => {
    const { dias, horas, minutos, segundos } = splitTime(time);
    return String(time - dias * DIA_MILIS - horas * HORA_MILIS - minutos * MINUTO_MILIS - segundos * SEGUNDO_MILIS).substring(0,1);
};