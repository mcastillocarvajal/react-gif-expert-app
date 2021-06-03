import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Test for <GifExpertApp />', () => {

    test('should show component correctly', () => {

        const wrapper = shallow( <GifExpertApp />)
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show a list of categories', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultcategories={ categories }/>)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
