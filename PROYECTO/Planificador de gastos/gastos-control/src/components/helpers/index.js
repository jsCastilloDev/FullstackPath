export const generateId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    }
export const getNewTimestamp = fecha => {
    const date = new Date(fecha);
    const opciones = { year: "numeric", month: "long", day: "2-digit" };
    return date.toLocaleDateString("es-ES", opciones);
    }