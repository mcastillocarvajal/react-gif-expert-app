import { getGifs } from "../../helpers/getGifs"


describe('Tests to <getGifs />', () => {

    test('should fetch 10 elements', async() => {

        const gifs = await getGifs('One Punch')

        expect( gifs.length ).toBe( 10 )
        
    })

    test('should fetch 10 elements', async() => {

        const gifs = await getGifs('')

        expect( gifs.length ).toBe( 0 )
        
    })
    
    
})
