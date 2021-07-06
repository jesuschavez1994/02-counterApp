import '@testing-library/jest-dom';
import { retornaArreglo } from '../../bases/07-deses-arr';

describe('pruebas en 07-deses-arr.test', () => {
    test('Debe retornar un string y un número ', () => {
        const [ letras, numeros ] = retornaArreglo();
        // expect( arr ).toEqual(['ABC', 123])
        expect( typeof letras).toBe('string');
        expect( typeof numeros).toBe('number');
    });
    
})
