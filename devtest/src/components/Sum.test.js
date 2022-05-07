import React from "react";
import Sum from "./Sum";
import renderer from 'react-test-renderer';
 //import ShallowRenderer from 'react-test-renderer/shallow';


it('renders ok', () => {
    const tree = renderer
        .create(<Sum />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})


describe('sum = a+b' , () => {
    it('sum is a+b', () => {
        expect(Sum(1,2)).toBe(3);
    });

})
