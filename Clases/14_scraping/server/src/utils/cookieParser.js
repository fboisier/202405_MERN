import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Crear `__dirname` equivalente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const COOKIES_PATH = path.resolve(__dirname, '../jsons/cookies.json');

// Función para guardar cookies en un archivo
async function saveCookies(page) {
    const cookies = await page.cookies();
    await fs.writeFile(COOKIES_PATH, JSON.stringify(cookies, null, 2));
}

// Función para cargar cookies de un archivo
async function loadCookies(page) {
    try {
        const cookiesString = await fs.readFile(COOKIES_PATH);
        const cookies = JSON.parse(cookiesString);
        await page.setCookie(...cookies);
        return true;
    } catch (err) {
        return false; // No se encontraron cookies, se requiere login
    }
}

export { saveCookies, loadCookies }