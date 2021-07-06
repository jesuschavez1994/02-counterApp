import PrimeraApp from "../PrimerApp";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Prueba en <PrimerApp />', () => {

    test('Debe de mostrar <PrimerApp /> ', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } />)
        expect( wrapper ).toMatchSnapshot( )
    });

    test('Debe de mostrar el subtitulo enviado por el prop', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo = { saludo } 
                subtitulo = { subtitulo } 
            />
        )

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo );
    })
    
})
