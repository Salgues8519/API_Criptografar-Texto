import { Request, Response } from 'express'
import { encrypt } from './encryptor'


export function cripto ( req: Request, res: Response) {
    console.log("Body recebido:", req.body);
    
    const { text } = req.body

    if (!text ) {
        return res.status(400).json({
            message: 'Text not provided'
        });
    }
    const crypText = encrypt(text);
    res.json({
        result: crypText
    })
}