function esPalindromo(cadena) {
    cadena = cadena.replace(/\s+/g, "").toUpperCase()
    for (let i = 0; i < cadena.length / 2; i++) {
        console.log(cadena[i], cadena[cadena.length - 1 - i]);
        if (cadena[i] != cadena[cadena.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

export default esPalindromo