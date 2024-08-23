import puppeteer from 'puppeteer';
import {loadCookies, saveCookies} from '../utils/cookieParser.js';

const getPageGithub = async (req, res) => {
    try {

        const email = process.env.GITHUB_EMAIL;
        const pass = process.env.GITHUB_PASS;
        const user = process.env.GITHUB_USER;

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

         // Cargar cookies si existen
        const previousSession = await loadCookies(page);
        
        if (!previousSession) {
            // Si no hay cookies cargadas, hacer login
            await page.goto('https://github.com/login');
            await page.type('#login_field', email);
            await page.type('#password', pass);
            await page.click('input[type="submit"]');
            await page.waitForNavigation();
            // Guardar cookies después de iniciar sesión
            await saveCookies(page);
        }else{
            console.log('Ya hay cookies cargadas');
        }

        await page.goto(`https://github.com/${user}?tab=repositories`);

        const data = await page.evaluate(() => {
            const repos = [];
            const repoElements = document.querySelectorAll('#user-repositories-list a[itemprop="name codeRepository"]');
            
            // Iteramos sobre cada uno de estos elementos
            repoElements.forEach((element) => {
                // Obtenemos el nombre del repositorio (texto del enlace) y el link
                const name = element.innerText;
                const link = element.href;
                
                // Agregamos un objeto con el nombre y el link al arreglo
                repos.push({ name, link });
            });
            
            return repos; // Devolvemos el arreglo de objetos
        });

        res.json({"respuesta": data});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export {
    getPageGithub,
}
