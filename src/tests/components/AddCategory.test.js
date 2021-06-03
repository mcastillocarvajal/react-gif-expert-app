import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe('Test to <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory 
        setCategories={ setCategories }
    />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory 
            setCategories={ setCategories }
        />)
    })
    
    test('should show component correctly', () => {     
        expect( wrapper ).toMatchSnapshot();
    })

    test('should change the input box text', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value }});
    })

    test('should NOT post info in submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('should call setCategories and clean input box', () => {
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input')
        wrapper.find('input').simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( input.prop('value') ).toBe('');
    })
})
