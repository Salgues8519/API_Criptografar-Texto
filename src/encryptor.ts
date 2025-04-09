export function encrypt(text: string): string {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = text.charCodeAt(i); // pega o valor ASCII
        const shift = (i * 3 + 7) % 10; // cálculo simples baseado na posição
        const newCharCode = charCode + shift;

        result += String.fromCharCode(newCharCode);
    }

    return result;
}
