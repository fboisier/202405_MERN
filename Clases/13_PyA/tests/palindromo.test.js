import esPalindromo from "../src/palindromo.js"

test('anita lava la tina', () => {
    expect(esPalindromo("anita lava la tina")).toBe(true);
});
test('La ruta natural', () => {
    expect(esPalindromo("La ruta natural")).toBe(true);
});
test('A mama Roma le aviva el amor a mama', () => {
    expect(esPalindromo("A mama Roma le aviva el amor a mama")).toBe(true);
});
test('Yo dono rosas oro no doy', () => {
    expect(esPalindromo("Yo dono rosas oro no doy")).toBe(true);
});
test('Yo dono rosas, oro no doy', () => {
    expect(esPalindromo("Yo dono rosas, oro no doy")).toBe(false);
});
test('Programacion', () => {
    expect(esPalindromo("Programacion")).toBe(false);
});

