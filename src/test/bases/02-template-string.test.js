import '@testing-library/jest-dom';
import { getSaludo } from "../../bases/02-template-string";

describe('pruebas en 02-template-string.js', () => {

    test('Prueba en el metodo getSaludo debe retornar Hola Jesus', () => {

       const nombre = 'Jesus';
       const saludo = getSaludo(nombre);
       expect(saludo).toBe('Hola ' + nombre);

    });

    test('Debe retornar Hola Jhonger si no hay argumento en el nombre ', () => {
        
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Jhonger');
        
    });
    
    
})
