
const criptoMap: Record <string, string> = {
    'A': '@', 'a': '@',
    'B': '&', 'b': '&',
    'C': '¢', 'c': '¢',
    'D': '¬', 'd': '¬',
    'E': '3', 'e': '3',
    'F': '*', 'f': '*',
    'G': '+', 'g': '+',
    'H': '/', 'h': '/',
    'I': '<', 'i': '<',
    'J': '~', 'j': '~',
    'K': '4', 'k': '4',
    'L': '>', 'l': '>',
    'M': 'Ω', 'm': 'Ω',
    'N': 'φ', 'n': 'φ',
    'O': 'δ', 'o': 'δ',
    'P': '1', 'p': '1',
    'Q': 'ß', 'q': 'ß',
    'R': 'Σ', 'r': 'Σ',
    'S': '╞', 's': '╞',
    'T': '╚', 't': '╚',
    'U': '§', 'u': '§',
    'V': '∩', 'v': '∩',
    'W': '■', 'w': '■',
    'X': '╨', 'x': '╨',
    'Y': 'µ', 'y': 'µ',
    'Z': '0', 'z': '0'
}

// Função para criptografar um texto
export function encrypt (text:string):string {
    let result = '';

    for (const letter of text) {
        // Se a letra está no mapa, substitui, senão mantém original
        result += criptoMap[letter] || letter;
    }
    return result
}