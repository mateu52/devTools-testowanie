import React from "react";
import Sum from "./Sum";
import renderer from 'react-test-renderer';

it('renders ok', () => {
    const tree = renderer
        .create(<Sum />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})


// describe('sum = a+b ', () => {
//     it('sum is a+b', () => {
//         const wrapper= shallow(<Sum />)
//         const inp =wrapper.find('input')
//         expect (inp.number()).toBe(number)
//     })

// })
