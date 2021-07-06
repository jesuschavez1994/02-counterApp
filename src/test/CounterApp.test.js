import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CouterApp from '../CounterApp';

describe('Prueba en <CouterApp />', () => {

    let wrapper = shallow( <CouterApp />);

    beforeEach( () => {
        wrapper = shallow( <CouterApp />);
    })

    test('Debe de mostrar <CouterApp /> ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar por defecto el valor de 100 ', () => {
        const wrapper = shallow( <CouterApp value = {100} />);
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('100');
    });

    test('Debe de incrementar el botón +1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        const Text = wrapper.find('h2').text().trim();
        expect(Text).toBe('11');
    });

    test('Debe de decrementar el botón -1  ', () => {
        wrapper.find('button').at(2).simulate('click');
        const Text = wrapper.find('h2').text().trim();
        expect(Text).toBe('9');
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow( <CouterApp value = {105} />);
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const Text =  wrapper.find('h2').text().trim();
        expect(Text).toBe('105');

    })
    
})
