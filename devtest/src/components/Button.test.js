import React from "react";
import Button from "./Button";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


it('renders ok', () => {
    const tree = renderer
        .create(<Button label="Click" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

// describe('testing with jest', () => {
//     it('should isOk to bu true', () =>{
//         const isOk = true;
//         expect(isOk).toBe(true);
//     })
//     it('should array lenght to be 2', () => {
//         const names = ['Patryk', 'Ania'];
//         expect(names.length).toBe(2);
//     });
// });
describe('button component', () => {
    it('should renders ok', () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find('button');
        expect(button.text()).toBe('OK 0');
    });
    it('should renders Click me 0', () => {
        const wrapper = shallow(<Button label="OK" />);
        const button = wrapper.find('button');
        expect(button.text()).toBe('Click me 0');
    });
    it('should increment counter', () => {

    })
})