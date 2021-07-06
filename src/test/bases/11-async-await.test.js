import '@testing-library/jest-dom';
import { getImagen } from '../../bases/11-async-await';

describe('Pruebas con async await y Fetch', () => {

    test('debe de retornar el url de la imagen ', async() => {

        const url = await getImagen();
        // expect( typeof url ).toBe( 'string' );
        expect(url.includes('http')).toBe( true );
    });

    test('Debe de retornar un error ', async() => {

        await getImagen().catch( error => {
            expect( error ).toBe('No existe');
            done();
        });

    })
    
    
})

