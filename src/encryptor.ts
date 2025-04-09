export function encrypt(text: string): string {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = text.charCodeAt(i); 
        const shift = (i * 3 + 7) % 10; 
        const newCharCode = charCode + shift;

        result += String.fromCharCode(newCharCode);
    }

    return result;
}
