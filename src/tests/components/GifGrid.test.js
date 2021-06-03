import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test for <GifGrid />', () => {

    const category = 'Homero'

    test('should show the component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category }/>)

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show items when imgs are loaded with useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything',
            title: 'Anything'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category }/>)

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
        expect( wrapper).toMatchSnapshot();
    })
    
})
