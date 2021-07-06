import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heores';

describe('Prueba con Promesas', () => {

    test('Debe retornar un heroe con async ', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id  ).then( heroe =>  {
            expect( heroe ).toBe( heroes[0] );
            done();
        });
    });

    test('Debe de obtener un error si el heroe no existe ', ( done ) => {
        const id = 10;
        getHeroeByIdAsync( id  ).catch( error => {
            expect( error ).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
    
})
