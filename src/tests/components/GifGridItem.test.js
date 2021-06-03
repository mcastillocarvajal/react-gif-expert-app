import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('Test for <GifGridItem />', () => {

    const title = 'title';
    const url = 'https://localhost/algo.png'
    const wrapper = shallow( <GifGridItem 
        title={ title }
        url={ url }
    /> )
    
    test('should show component correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('should have a <p> with a text', () => {

        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )
    })

    test('should have a <img> with the props url and alt', () => {

        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( title )
    })

    test('should have the classname with animation', () => {
        
        const div = wrapper.find('div')
        const className = div.prop('className')

        expect( className.includes( 'animate__fadeIn' ) ).toBe( true )
    })
    
    
    
})
