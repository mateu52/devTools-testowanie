import React from "react";
import Zadtwo from "./zad2";
import renderer from 'react-test-renderer';

it('renders ok', () => {
    const tree = renderer
        .create(<Zadtwo />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})