import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
    it('render message correctly', () => {
        const message = {
            text: 'foo',
        };

        const wrapper = shallow(
            <MyComponent message={message} />
        );

        expect(wrapper.contains(<p>foo</p>)).to.be.true;
    });
});
